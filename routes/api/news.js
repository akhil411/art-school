const router = require("express").Router();
const axios = require("axios");
 
router.get("/news", (req, res) => {
    axios
      .get("http://www.recipepuppy.com/api/?q=chicken")
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });


module.exports = router;





// https://gnews.io/api/v3/top-news?country=au&token=6e314a0ce687a9ec7b548b26e29dee06
// change results to articles
// http://www.recipepuppy.com/api/?q=chicken"