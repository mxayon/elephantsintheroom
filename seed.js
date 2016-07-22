var db = require('./models');

var articlesList = [
  {
  articleUrl: "To Kill a Mockingbird",
  title: "Harper Lee",
  imageUrl: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
  author: "July 11, 1960",
  location: " ",
  date: " ",
  source: " ",
  people: " ",
  compassionScale: " "
  },
  {
  articleUrl: "To Kill a Mockingbird",
  title: "Harper Lee",
  image_url: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
  author: "July 11, 1960",
  location: " ",
  date: " ",
  source: " ",
  people: " ",
  compassionScale: " "
  },
  {
  articleUrl: "To Kill a Mockingbird",
  title: "Harper Lee",
  imageUrl: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
  author: "July 11, 1960",
  location: " ",
  date: " ",
  source: " ",
  people: " ",
  compassionScale: " "
  }
];


db.Article.remove({}, function(err, books){
      console.log('removed all articles');
      articlesList.forEach(function (articleData) {
        var article = new db.Article({
          articleUrl: articleData.articleUrl,
          title: articleData.title,
          imageUrl: articleData.imageUrl,
          author: articleData.author,
          location: articleData.location,
          date: articleData.date,
          source: articleData.source,
          people: articleData.people,
          compassionScale: articleData.compassionScale
        });
          article.save(function(err, savedArticle){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedArticle.title);
          });
        });
      });
