// Nice documentation! Remember to fill it out completely if you're going to include an api endpoint
function index(req, res) {
  res.json({
    message: "Welcome to thearticledork!",
    documentation_url: "https://github.com/sophn11/crow-project1/blob/master/README.md",
    base_url: "http://thearticledork.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
