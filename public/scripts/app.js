$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/articles').success(function (articles) {
    articles.forEach(function(article) {
      renderArticle(article);
    });
  });

});

// this function takes a single album and renders it to the page
function renderArticle(article) {
  console.log('rendering article', article);
  var articleHtml = $('#article-template').html();
  var articleTemplate = Handlebars.compile(articleHtml);
  var html = articleTemplate(article);
  $('#article').prepend(html);
}
