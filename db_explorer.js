var db = require('./models');
var comTagId = "579689b807d052bb948952c2";
var culTagId = "579689b807d052bb948952c3";



var article_ids =  [
 "579689b807d052bb948952b0",
 "579689b807d052bb948952b1",
 "579689b807d052bb948952b2",
 "579689b807d052bb948952b3",
 "579689b807d052bb948952b4",
 "579689b807d052bb948952b5",
 "579689b807d052bb948952b5",
 "579689b807d052bb948952b4",
 "579689b807d052bb948952b0",
 "579689b807d052bb948952b1",
 "579689b807d052bb948952b2",
 "579689b807d052bb948952b0",
 "579689b807d052bb948952b1",
 "579689b807d052bb948952b2"
]


// db.Article.populate(article_ids, function(){console.log(arguments)})


// db.ArticleTagWord
//   .find({
//     _article: {$in: article_ids}
//   })
//   .populate('_article')
//   .exec(function(err, articles){
//     console.log(articles)
//   })

//
db.ArticleTagWord
    .find({_tagWord: culTagId})
    .exec(function(err, artTagWords){
      console.log(err)

      var article_ids = artTagWords.map(function(a){ return a._article; });
      db.Article.find({
        _id: {$in: article_ids}
      })
      .exec(function(err, articles){
        console.log(err)
        console.log("Articles with Tag Id", comTagId)
        console.log(articles)
      })
    })


//
// db.ArticleTagWord
//     .aggregate([
//       { $match: {_tagWord: comTagId} }//,
//       // { $project: { _id: 1, article_ids: { $push: "$_article" } } }
//     ])
//     // .populate({ path: 'aricle_ids', model: Conversation })
//     .exec(function(err, art_tags){
//       console.log(err)
//       console.log(art_tags)
//       process.exit();
//     })
//
// // db.Article.find({}).limit(3).exec(function(err, arts){
// //
// //   arts.forEach(function(art){
// //     db.ArticleTagWord.create({
// //       _article: art._id,
// //       _tagWord: comTagId
// //     }, function(err, newArticleTagWord){
// //        console.log(newArticleTagWord)
// //     })
// //   })
// //
// // })
//
// // db.TagWord.find({_id: "579689b707d052bb948952af"},function(){console.log(arguments)})
// // db.TagWord.find({},function(){console.log(arguments)})
// // db.Article.find({},function(){console.log(arguments)})
