$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/articles', onSuccess);

});

function renderArticle(article) {
  var articleHtml = $('#article-template').html();
  var articleTemplate = Handlebars.compile(articleHtml);
  var html = articleTemplate(article);
  $('#article-template').prepend(html);
}

function onSuccess(json) {
  console.log('FOUND ALL PIECES');
  json.forEach(function(article) {
    renderArticle(article);
    console.log(article);
  });
}
  // $.get('/api/articles').success(function (articles) {
  //   articles.forEach(function(article) {
  //     renderArticle(article);
  //   });
  // });
