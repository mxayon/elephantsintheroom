var db = require('./models');

var articlesList = [
  {
  articleUrl: "http://motherboard.vice.com/read/scientists-made-a-new-map-of-the-human-brain-cerebral-cortex",
  title: "Scientists Made a New Map of the Human Brain",
  description: "For centuries, scientists have tried to map out these areas in an attempt to better understand how the brain works. Now, researchers have published a new brain “atlas” that includes nearly 100 previously unmapped regions.",
  imageUrl: "http://motherboard-images.vice.com/content-images/contentimage/35821/1469026202421104.png",
  author: "Victoria Turk",
  location: "Washington University",
  date: "July 20, 2016",
  compassionScale: "50"
  },
  {
  articleUrl: "http://interactive.aljazeera.com/aje/shorts/india-menstruation-man/index.html",
  title: "India's Menstruation Man",
  description: "Arunachalam Muruganantham was obsessed with making the perfect sanitary pad for his wife. After years of work, his invention has changed the lives of millions of women in India.",
  imageUrl: "/images/ajshortsindiamm.jpg",
  author: "Dirk Gilson",
  location: "South India",
  date: "1998",
  compassionScale: "50"
  },
  {
  articleUrl: "http://today.law.harvard.edu/feature/seizing-opportunity-alan-jenkins-agenda-social-change/",
  title: "Seizing the Opportunity",
  description: "Alan Jenkins’ agenda for social change starts with communication.",
  imageUrl: "https://today.law.harvard.edu/wp-content/uploads/2016/04/01_19_16_GlenJenkinsClass_098_MStewartop.op_-768x512.jpg",
  author: "STEPHANIE SCHOROW",
  location: "Cambridge, MA",
  date: "April 28, 2016",
  compassionScale: "50"
  },
  {
  articleUrl: "http://www.aljazeera.com/news/americas/2014/09/yahoo-faced-massive-fine-threat-over-data-2014911232221919500.html",
  title: "Yahoo faced massive fine threat over data",
  description: "Internet giant says it was threatened with fine of $250,000 a day in 2008 if it did not surrender online information.",
  imageUrl: "http://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2014/9/12//20149122324039734_20.jpg",
  author: "reuters",
  location: "USA",
  date: "11 SEPTEMBER 2014",
  compassionScale: "50"
  },
  {
  articleUrl: "https://mashable.com/2016/07/24/munich-shooting-facebook-post/#HulKR03jAZqb",
  title: "Munich shooter may have used Facebook post to lure victims",
  description: "The gunman who murdered nine people at a Munich mall Friday may have attempted to lure young people to the scene of the crime with a fake Facebook post offering free food.",
  imageUrl: "http://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2014/9/12//20149122324039734_20.jpg",
  author: "ARIEL BOGLE",
  location: "Munich, Germany",
  date: "July 23, 2016",
  compassionScale: "1"
  },
  {
  articleUrl: "https://orgs.law.harvard.edu/docstudio/films/",
  title: "The Harvard Law Documentary Studio",
  description: "The Harvard Law Documentary Studio aims to produce original documentaries that explore social and policy issues.",
  imageUrl: "https://orgs.law.harvard.edu/docstudio/files/2015/09/cropped-Doc-Studio-logo.jpg",
  author: " ",
  location: " ",
  date: " ",
  compassionScale: " "
  }
];




var tagWordObj0 = {
  name: "Major Issues and Current Events"
};
var tagWordObj1 = {
  name: "Connection"
};
var tagWordObj2 = {
  name: "Culture"
};
var tagWordObj3 = {
  name: "Communication"
};


db.TagWord.remove({},function(err, success) {
  console.log("Removed tags...");
});

db.Article.remove({}, function(err, success) {
  if (err) {console.log(err);}
  console.log("Cleaned out Articles!!!");
});

db.ArticleTagWord.remove({}, function(err, succ) {
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
          description: articleData.description,
          imageUrl: articleData.imageUrl,
          author: articleData.author,
          location: articleData.location,
          date: articleData.date,
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
  ///// obj 2
      db.TagWord.create(tagWordObj2, function handleNewTagWord(err, tagWordCulture){
        if (err) {console.log(err);}
        console.log("Tag Word - Culture created.");

        db.Article.findOne({title: "Munich shooter may have used Facebook post to lure victims"}, function(err, munichShooter) {
          db.ArticleTagWord.create({_article: munichShooter._id,
          _tagWord: tagWordCulture._id}, function thirdJoinMade(err,success){
            if (err) {console.log(err);}
            console.log(success);
          });
        });

      });
      db.Article.findOne({title: "Munich shooter may have used Facebook post to lure victims"}, function(err, munichShooter) {

        db.ArticleTagWord.find({article: munichShooter._id}, function allmunichShooter(err,success){
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

///// obj 1
      db.TagWord.create(tagWordObj1, function handleNewTagWord(err, tagWordConnection){
        if (err) {console.log(err);}
        console.log("Tag Word - Connection created.");

        db.Article.findOne({title: "Scientists Made a New Map of the Human Brain"}, function(err, scientistsMadeANewMap) {
          db.ArticleTagWord.create({_article: scientistsMadeANewMap._id,
          _tagWord: tagWordCulture._id}, function fourthJoinMade(err,success){
            if (err) {console.log(err);}
            console.log(success);
          });
        });

      });
      db.Article.findOne({title: "Munich shooter may have used Facebook post to lure victims"}, function(err, munichShooter) {

        db.ArticleTagWord.find({article: munichShooter._id}, function allmunichShooter(err,success){
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
  //   name: "Communication"
  // },
  // function(err, succ) {
  //   db.ArticleTagWord.find({
  //     tagWordId: succ._id,
  //   })
  //   .populate('articleId')
  //   .exec(function(err, articles) {
  //     if (err) {console.log(err);}
  //     article.forEach( function(el) {
  //       console.log(el.articleId.title);
  //     });
  //   });
  // });





});
