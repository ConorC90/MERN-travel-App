const router = require("express").Router();
const Tour = require("../itineary");
const auth = require("../middelware/auth");

// router.get("/", (req, res) => {
//   res.send("testing route");
// });

router.get("/all", (req, res) => {
  Tour.find({}, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

router.get("/all/:cityName", (req, res) => {
  Tour.find({ cityName: req.params.cityName }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

router.post("/all", auth, function(req, res) {
  const tour = new Tour({
    title: req.body.title,
    sub_title: req.body.sub_title,
    profile_pic: req.body.profile_pic,
    cost: req.body.cost,
    duration: req.body.duration,
    cityName: req.body.cityName,
    hashTags: req.body.hashTags
  });

  tour.save().then(tour => res.send(tour));
});

// router.get("/all/:cityName", (req, res) => {
//   res.send(req.params.cityName);
// });

module.exports = router;
