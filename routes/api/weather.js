const router = require("express").Router();
const axios = require("axios");
 
router.get("/weather", (req, res) => {
    axios
      .get("http://api.weatherapi.com/v1/current.json?key=906b040171a44bf1b52224803192512&q=sydney")
      .then(({ data: { current } }) => {
        console.log(current); 
        res.json(current)})
      .catch(err => res.status(422).json(err));
  });


module.exports = router;