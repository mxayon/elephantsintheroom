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

db.Article.remove({}, function RemoveArticles(err, succ) {
  if (err) {console.log(err);}
  console.log("Cleaned out Articles!!!");
});

db.ArticleTagWord.remove({}, function RemoveArticleTagWord(err, succ) {
  if (err) {console.log(err);}
  console.log("Cleaned out ArticleTagWords!!!");
});

db.TagWord.create(tagWordObj0, function(err, tagWordSuccess) {
  if(err){console.log("ERROR: ", err);}
  console.log("Created TagWord!");
///////////create articles
  db.Article.create(articlesList, function(err, articles) {
    if (err) {console.log(err);}
    console.log("Created Articles");
      articlesList.forEach(function (articleData) {
        var article = new db.Article({
          articleUrl: articleData.articleUrl,
          title: articleData.title,
          imageUrl: articleData.imageUrl,
          author: articleData.author,
          location: articleData.location,
          date: articleData.date,
          source: articleData.source,
          compassionScale: articleData.compassionScale
        });
          article.save(function(err, savedArticle){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedArticle.title);
          });
      });
//////////////for each article join table
      articles.forEach(function(article) {
      var joinTableData = {
        _article: article._id,
        _tagWord: tagWordSuccess._id
      };
      db.ArticleTagWord.create(joinTableData, function(err, suc) {
        if (err) {console.log(err);}

        console.log("Created Join Table Entry: ");
        console.log(suc + '\n');
        });
      });
      db.ArticleTagWord.find({}, function(err, suc) {
        if (err) {console.log(err);}
        console.log("ALL JOINS: " ,suc);
      });
/////// tag word obj3
      db.TagWord.create(tagWordObj3, function handleNewTagWord(err, tagWordCommunication){
        if (err) {console.log(err);}
        console.log("Tag Word - Communication created.");

        db.Article.findOne({title: "The Harvard Law Documentary Studio"}, function(err, theHarvardLawDocumentaryStudio) {
          db.ArticleTagWord.create({_article: theHarvardLawDocumentaryStudio._id,
          _tagWord: tagWordCommunication._id}, function secondJoinMade(err,success){
            if (err) {console.log(err);}
            console.log(success);
          });
        });

      });
      db.Article.findOne({title: "The Harvard Law Documentary Studio"}, function(err, theHarvardLawDocumentaryStudio) {

        db.ArticleTagWord.find({article: theHarvardLawDocumentaryStudio._id}, function allTheHarvardLawDocumentaryStudio(err,success){
          if (err) {console.log(err);}
          console.log(success.length);
          success.forEach(function(joinEntity){
            console.log("SEARCHING WITH : " + joinEntity._tagWord);
            db.TagWord.findById(joinEntity._tagWord, function(err,succ) {
              console.log(succ.name);
            });
          });
        });

      });

  });

  /*  depopulate and return instructors */
  // db.TagWord.findOne({
  //     name: 'Communication'
  //   },
  //   function(err, succ) {
  //     db.ArticleTagWord.find({
  //         tagWordId: succ._id
  //       })
  //       .populate('articleId')
  //       .exec(function(err, articles) {
  //         if (err) {console.log(err);}
  //         instructors.forEach( function(el) {
  //           console.log(el.articleId.title);
  //         });
  //       });
  //   });



});
