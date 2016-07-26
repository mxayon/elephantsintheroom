var db = require('./models');

var articlesList = [
  {
  articleUrl: "https://motherboard.vice.com/read/scientists-made-a-new-map-of-the-human-brain-cerebral-cortex",
  title: "Scientists Made a New Map of the Human Brain",
  description: "For centuries, scientists have tried to map out these areas in an attempt to better understand how the brain works. Now, researchers have published a new brain “atlas” that includes nearly 100 previously unmapped regions.",
  imageUrl: "http://motherboard-images.vice.com/content-images/contentimage/35821/1469026202421104.png",
  author: "Victoria Turk",
  location: "Washington University",
  date: "July 20, 2016"
  },
  {
  articleUrl: "https://broadly.vice.com/en_us/article/why-is-it-so-hard-to-fight-child-sex-trafficking-on-backpagecom",
  title: "Why Is It So Hard to Fight Child Sex Trafficking on Backpage.com?",
  description: "According to the Center for Missing and Exploited Children, 71 percent of child sex trafficking cases reported come from Backpage listings, nevertheless law enforcement seems powerless to stop it.",
  imageUrl: "https://broadly-images.vice.com/images/articles/meta/2016/07/25/the-crimes-of-backpagecom-and-why-they-are-so-hard-to-stop-1469460506.jpg?crop=1xw:1xh;center,top&resize=2000:*&output-quality=70",
  author: "Matt Ramos",
  location: " ",
  date: "JUL 25 2016"
  },
  {
  articleUrl: "https://www.ted.com/talks/jeremy_rifkin_on_the_empathic_civilization",
  title: "The Empathic Civilization",
  description: "In this talk from RSA Animate, bestselling author Jeremy Rifkin investigates the evolution of empathy and the profound ways it has shaped human development and society.",
  imageUrl: "https://i.ytimg.com/vi/zDZFcDGpL4U/maxresdefault.jpg",
  author: "Jeremy Rifkin",
  location: " ",
  date: "Aug, 2010"
  },
  {
  articleUrl: "http://nymag.com/scienceofus/2016/02/caribbean-whales-have-regional-accents.html",
  title: "It Turns Out Some Whales Have Regional Accents",
  description: "Whales might not have opposable thumbs or manipulative digits, but they do rival human beings when it comes to brainpower.",
  imageUrl: "https://pixel.nymag.com/imgs/daily/science/2016/02/12/12-whale-sad.w536.h357.2x.jpg",
  author: "Claire Landsbaum",
  location: "Carribean",
  date: "February 16, 2016"
  },
  {
  articleUrl: "https://interactive.aljazeera.com/aje/shorts/india-menstruation-man/index.html",
  title: "India's Menstruation Man",
  description: "Arunachalam Muruganantham was obsessed with making the perfect sanitary pad for his wife. After years of work, his invention has changed the lives of millions of women in India.",
  imageUrl: "/images/ajshortsindiamm.jpg",
  author: "Dirk Gilson",
  location: "South India",
  date: "1998"
  },
  {
  articleUrl: "https://www.ted.com/talks/jamila_lyiscott_3_ways_to_speak_english",
  title: "Jamila Lyiscott: 3 ways to speak English",
  description: "Jamila Lyiscott is a “tri-tongued orator;” in her powerful spoken-word essay “Broken English,”...",
  imageUrl: "http://cdn2.hubspot.net/hubfs/451100/ted.jpg",
  author: "Jamila Lyiscott",
  location: " ",
  date: "February 2010"
  },
  {
  articleUrl: "https://today.law.harvard.edu/feature/seizing-opportunity-alan-jenkins-agenda-social-change/",
  title: "Seizing the Opportunity",
  description: "Alan Jenkins’ agenda for social change starts with communication.",
  imageUrl: "https://today.law.harvard.edu/wp-content/uploads/2016/04/01_19_16_GlenJenkinsClass_098_MStewartop.op_-768x512.jpg",
  author: "STEPHANIE SCHOROW",
  location: "Cambridge, MA",
  date: "April 28, 2016"
  },
  {
  articleUrl: "https://www.aljazeera.com/news/americas/2014/09/yahoo-faced-massive-fine-threat-over-data-2014911232221919500.html",
  title: "Yahoo faced massive fine threat over data",
  description: "Internet giant says it was threatened with fine of $250,000 a day in 2008 if it did not surrender online information.",
  imageUrl: "http://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2014/9/12//20149122324039734_20.jpg",
  author: "reuters",
  location: "USA",
  date: "11 SEPTEMBER 2014"
  },
  {
  articleUrl: "http://www.theatlantic.com/politics/archive/2016/07/disputed-influence-of-black-lives-matter/492704/",
  title: "The Disputed Influence of Black Lives Matter",
  description: "Research suggests the movement affects voting behavior among African Americans in different ways.",
  imageUrl: "https://cdn.theatlantic.com/assets/media/img/mt/2016/07/AP_081104023882/lead_960.jpg?1469219260",
  author: "THEODORE R. JOHNSON",
  location: "Philadelphia, PA",
  date: "JUL 25, 2016"
  },
  {
  articleUrl: "https://orgs.law.harvard.edu/docstudio/films/",
  title: "The Harvard Law Documentary Studio",
  description: "The Harvard Law Documentary Studio aims to produce original documentaries that explore social and policy issues.",
  imageUrl: "https://orgs.law.harvard.edu/docstudio/files/2015/09/cropped-Doc-Studio-logo.jpg",
  author: " ",
  location: " ",
  date: " "
  },
  {
  articleUrl: "http://nymag.com/scienceofus/2016/07/the-charles-kinsey-shooting-shows-police-still-have-a-mental-illness-problem.html",
  title: "The Charles Kinsey Shooting Shows Police Still Have a Mental-Illness Problem",
  description: "Unfortunately, there is no shortage of recent, depressing violent encounters between the police and people with mental illness, many of those encounters ending in tragedy. ",
  imageUrl: "http://pixel.nymag.com/imgs/daily/science/2016/07/21/21-unarmed-man.w710.h473.2x.jpg",
  author: "Jesse Singal",
  location: " ",
  date: "July 21, 2016"
  },
  {
  articleUrl: "http://nymag.com/scienceofus/2016/07/why-pokmon-go-might-actually-be-helping-kids-with-autism.html",
  title: "How Pokémon Go Might Actually Be Helping Kids With Autism",
  description: "If you’ve been following coverage of Pokémon Go, the mobile game that has ...",
  imageUrl: "http://pixel.nymag.com/imgs/daily/intelligencer/2016/07/19/19-pokemon-go.w710.h473.2x.jpg",
  author: " ",
  location: " ",
  date: " "
  },
  {
  articleUrl: "https://i-d.vice.com/en_gb/article/ai-weiwei-and-patti-smith-part-of-artangel-project-at-prison-oscar-wilde-was-sent-to-for-being-gay",
  title: "​ai weiwei and patti smith part of artangel project at prison oscar wilde was sent to for being gay",
  description: "The major new site-specific project will bring a group of the best artists and writers in the world to Reading Prison, where Wilde was incarcerated during the 1890s.",
  imageUrl: "https://i-d-images.vice.com/images/2016/07/21/untitled-article-1469096930-body-image-1469097372.jpg?output-quality=75",
  author: "Charlotte Gush",
  location: " ",
  date: "21 July, 2016"
  },
  {
  articleUrl: "http://motherboard.vice.com/read/machine-learning-algorithm-spots-depression-based-on-speech-patterns",
  title: "​Machine Learning Algorithm Spots Depression in Speech Patterns",
  description: "The major new site-specific project will bring a group of the best artists and writers in the world to Reading Prison, where Wilde was incarcerated during the 1890s.",
  imageUrl: "https://assets.pando.com/uploads/2014/02/motherboard.jpg",
  author: "Charlotte Gush",
  location: " ",
  date: "July 9, 2016"
  },
  {
  articleUrl: "http://nymag.com/scienceofus/2016/07/why-conservatives-band-together-fast.html",
  title: "The Psychological Reason Conservatives Band Together Faster Than Liberals",
  description: "When Donald Trump picked the Mulan-hating, Titanic-loving gubernatorial goober Mike Pence to be his vice-presidential pick, he said that it was about “party unity.” ",
  imageUrl: "http://pixel.nymag.com/imgs/daily/science/2016/07/21/21-conservative-psychology.w710.h473.2x.jpg",
  author: "Drake Baer",
  location: "Washington, DC ",
  date: "July 22, 2016"
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
      // articlesList.forEach(function (articleData) {
      //   var article = new db.Article({
      //     articleUrl: articleData.articleUrl,
      //     title: articleData.title,
      //     description: articleData.description,
      //     imageUrl: articleData.imageUrl,
      //     author: articleData.author,
      //     location: articleData.location,
      //     date: articleData.date,
      //     compassionScale: articleData.compassionScale
      //   });
      //     article.save(function(err, savedArticle){
      //       if (err) {
      //         return console.log(err);
      //       }
      //       console.log('saved ' + savedArticle.title);
      //     });
      // });
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

        db.Article.findOne({title: "It Turns Out Some Whales Have Regional Accents"}, function(err, itTurnsOutSomeWhales) {
          db.ArticleTagWord.create({_article: itTurnsOutSomeWhales._id,
          _tagWord: tagWordCulture._id}, function thirdJoinMade(err,success){
            if (err) {console.log(err);}
            console.log(success);
          });
        });

      });
      db.Article.findOne({title: "It Turns Out Some Whales Have Regional Accents"}, function(err, itTurnsOutSomeWhales) {

        db.ArticleTagWord.find({article: itTurnsOutSomeWhales._id}, function allitTurnsOutSomeWhales(err,success){
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
          _tagWord: tagWordConnection._id}, function fourthJoinMade(err,success){
            if (err) {console.log(err);}
            console.log(success);
          });
        });

      });
      db.Article.findOne({title: "Scientists Made a New Map of the Human Brain"}, function(err, scientistsMadeANewMap) {

        db.ArticleTagWord.find({article: scientistsMadeANewMap._id}, function allscientistsMadeANewMap(err,success){
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
  db.TagWord.findOne({
    name: "Communication"
  },
  function(err, succ) {
    db.ArticleTagWord.find({
      _tagWord: tagWordSuccess._id,
    })
    .populate('articleId')
    .exec(function(err, articles) {
      if (err) {console.log(err);}
      articles.forEach( function(el) {
        console.log(el.articleId.title);
      });
    });
  });





});
