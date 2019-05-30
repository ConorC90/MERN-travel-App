const router = require("express").Router();
const Favourites = require("../favourites");
// const auth = require("../middelware/auth");

router.get("/", (req, res) => {
  res.send("Hello favourites");
});

router.get("/:toursId", (req, res) => {
  Favourites.findById(req.params.toursId, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

router.get("/:toursId", (req, res) => {
  //   res.send(req.params.commentId);
  res.send({ MSG: "CIAO  CONOR" });
});

router.post("/:toursId", function(req, res) {
  const favourites = new Favourites({
    toursId: req.body.toursId,
    name: req.body.name,
    favourite: req.body.favourite
  });
  favourites.save().then(favourites => res.send(favourites));
});

module.exports = router;
