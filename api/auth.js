const router = require("express").Router();
const User = require("../user");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middelware/auth");
// import googleRegister from "../client/src/actions/authActions";

router.get("/", (req, res) => {
  res.send("You are login.....I think");
});

//auth with google localhost:5000/auth/google

router.get("/google", (req, res) => {
  res.send("This is Google login.....I hope");
});

// changed from router.post
router.post("/google", (req, res) => {
  const googleUser = req.body;
  console.log("GOOGLEUSER", req.body);
  User.findOne({ email: googleUser.email }).then(user => {
    if (!user) {
      const newUser = new User({
        username: googleUser.username,
        password: "",
        email: googleUser.email,
        firstName: googleUser.firstName,
        lastName: googleUser.lastName,
        country: ""
      });

      newUser
        .save()
        .then(user => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user
              });
            }
          );
        })
        .catch(err => console.log(err));
    } else {
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user
          });
        }
      );
    }

    router.post("/", (req, res) => {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
      }

      User.findOne({ username }).then(user => {
        if (!user) return res.status(400).json({ msg: "User dose not exists" });

        //validate user

        bcrypt.compare(password, user.password).then(isMatch => {
          if (!isMatch)
            return res.status(400).json({ msg: "Invalid credentials" });

          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  username: user.username
                }
              });
            }
          );
        });
      });

      // user.save().then(user => res.send(user));
      router.get("/user", auth, (req, res) => {
        User.findById(req.user.id)
          .select("-password")
          .then(user => res.json(user));
      });
    });
  });
});

module.exports = router;
