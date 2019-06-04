const router = require("express").Router();
const User = require("../user");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  User.find({}, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

router.post("/", (req, res) => {
  const { username, password, email, firstName, lastName, country } = req.body;

  if (!username || !password || !email || !firstName || !lastName || !country) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      username,
      password,
      email,
      firstName,
      lastName,
      country
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
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
                  user: {
                    username: user.username
                  }
                });
              }
            );
          })
          .catch(err => console.log(err));
      });
    });
  });

  // user.save().then(user => res.send(user));
});

//get user by ID
router.get("/:id/", (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

//update user to add favourites
router.put("/:id", function(req, res) {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        favourite: req.body.newFavourite
      }
    }
  ).then(function() {
    User.findOne({ _id: req.params.id }).then(function(user) {
      res.send(user);
    });
  });
});

router.get("/:id/favourite", (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) res.send(err);
    res.send(data.favourite);
  });
});

module.exports = router;
