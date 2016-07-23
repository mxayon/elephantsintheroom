var db = require('./models');

var articlesList = [
  {
  articleUrl: " ",
  title: " ",
  description: " ",
  imageUrl: " ",
  author: " ",
  location: " ",
  date: " ",
  compassionScale: " "
  },
  {
  articleUrl: " ",
  title: " ",
  description: " ",
  imageUrl: " ",
  author: " ",
  location: " ",
  date: " ",
  compassionScale: " "
  },
  {
  articleUrl: "https://orgs.law.harvard.edu/docstudio/films/",
  title: "The Harvard Law Documentary Studio",
  description: "The Harvard Law Documentary Studio aims to produce original documentaries that explore social and policy issues.",
  imageUrl: "https://orgs.law.harvard.edu/docstudio/",
  author: " ",
  location: " ",
  date: " ",
  compassionScale: " "
  }
];


var tagWordObj0 = {
  name: "The Big Elephants and Current Issues"
};
var tagWordObj1 = {
  name: "Human Rights and Civil Liberties"
};
var tagWordObj2 = {
  name: "Global Crisis"
};
var tagWordObj3 = {
  name: "Communication"
};
var tagWordObj4 = {
  name: "Culture"
};
var tagWordObj5 = {
  name: "Connection"
};
var tagWordObj6 = {
  name: "Tech And Web Development"
};
var tagWordObj7 = {
  name: "Documentaries"
};


db.TagWord.remove({},function RemoveTags(err, succ) {
  console.log("Removed tags...");
});

db.TagWord.create(tagWordsList, function(err, createdTagWords) {
  if(err){return console.log("ERROR: ", err);}
  console.log(createdTagWords);
});

db.ArticleTagWord.remove({}, function(err, succ) {
  if (err) {console.log(err);}
  console.log("Cleaned out ArticleTagWords!!!");
});


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
