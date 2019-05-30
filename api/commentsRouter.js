const router = require("express").Router();
const Comment = require("../comment");
const auth = require("../middelware/auth");

router.get("/", (req, res) => {
  res.send("Hello Comments");
});

router.get("/:toursId", (req, res) => {
  Comment.findById(req.params.toursId, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

router.post("/:toursId", function(req, res) {
  const comment = new Comment({
    toursId: req.body.toursId,
    name: req.body.name,
    comment: req.body.comment
  });
  comment.save().then(comment => res.send(comment));
});

module.exports = router;
