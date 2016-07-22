function index(req, res) {
  res.json({
    message: "Welcome to Crow!",
    documentation_url: "https://github.com/sophn11/crow-project1/blob/master/README.md",
    base_url: "http://crow.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
