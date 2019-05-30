const router = require("express").Router();
const City = require("../city");
const auth = require("../middelware/auth");
// router.get("/", (req, res) => {
//   res.send("testing route");
// });

router.get("/all", (req, res) => {
  City.find({}, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

router.get("/all/:cityId", (req, res) => {
  City.findById(req.params.cityId, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

router.get("/all/:cityId", (req, res) => {
  res.send(req.params.cityId);
});

router.post("/all", auth, function(req, res) {
  const city = new City({
    name: req.body.name,
    country: req.body.country
  });

  city.save().then(city => res.send(city));
});

module.exports = router;
