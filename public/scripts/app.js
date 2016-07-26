$(document).ready(function() {
  console.log('app.js loaded!');

  $.get('/api/articles', onSuccess);

  $('.navbar-brand').on('click', function(e){
      $.get('/api/articles', onSuccess);
  });

  $('#majorIssues').on('click', function(e){
    $.get('/api/articleTagWords/579737bf5ee79963e88f8ccd/articles', onSuccessMajorIssues);
  });

  $('#communication').on('click', function(e){
    $.get('/api/articleTagWords/579737bf5ee79963e88f8cec/articles', onSuccessCommunication);
  });

  $('#culture').on('click', function(e){
    $.get('/api/articleTagWords/579737bf5ee79963e88f8ced/articles', onSuccessCulture);
  });

  $('#connection').on('click', function(e){
    $.get('/api/articleTagWords/579737bf5ee79963e88f8cee/articles', onSuccessConnection);
  });

  $('#article-form form').on('submit', function(e) {
      e.preventDefault();
      var formData = $(this).serialize();
      console.log('formData', formData);
      $.post('/api/articles', formData, function(articles) {
      console.log('article after POST', articles);
      renderArticles(articles);
      });
      $(this).trigger("reset");
      $('form input').val('');
    });

  $('.articlesShow').on('click', '.deleteBtn', handleDeleteArticleClick);

});

function handleDeleteArticleClick(e) {
  e.preventDefault();
 console.log("DELETE CALLED");
 var articleId = $(this).parents('.thumbnail').data('article-id');
 console.log('someone wants to delete article');
 $.ajax ({
   method: 'DELETE',
   url: '/api/articles/' + articleId,
   success: handleDeleteArticleSuccess,
 });
 }

// callback after DELETE /api/albums/:id
function handleDeleteArticleSuccess(article) {
 var deletedArticleId = article._id;
 console.log('removing the following article from the page');
 $('div[data-article-id=' + deletedArticleId + ']').remove();
}

function onSuccessMajorIssues(articles) {
  console.log('FOUND ALL MajorIssuesArticles', articles);
  articles.forEach(function (article){
    renderMajor(article);
});
}

function renderMajor(article) {
  var majorArticlesHtml = $('#articles-template').html();
  var majorArticlesTemplate = Handlebars.compile(majorArticlesHtml);
  var html = majorArticlesTemplate(article);
  console.log(article);
  // $('.thumbnail').empty();
  // $currentCarousel.find('articlesList').append(html);
  $('.articlesShow').prepend(html);
}

function onSuccessCommunication(articles) {
  console.log('FOUND ALL CommunicationArticles', articles);
  articles.forEach(function (article){
    renderCommunication(article);
});
}

function renderCommunication(article) {
  var commArticlesHtml = $('#articles-template').html();
  var commArticlesTemplate = Handlebars.compile(commArticlesHtml);
  var html = commArticlesTemplate(article);
  // $('.articlesShow').empty();
  $('.articlesShow').prepend(html);
}


function onSuccessCulture(articles) {
  console.log('FOUND ALL CultureArticles', articles);
  articles.forEach(function (article){
    renderCulture(article);
});
}

function renderCulture(article) {
  var culArticlesHtml = $('#articles-template').html();
  var culArticlesTemplate = Handlebars.compile(culArticlesHtml);
  var html = culArticlesTemplate(article);
  // $('.articlesShow').empty();
  // $currentCarousel.find('articlesList').append(html);
  $('.articlesShow').prepend(html);
}

function onSuccessConnection(articles) {
  console.log('FOUND ALL ConnectionArticles', articles);
  articles.forEach(function (article){
    renderConnection(article);
});
}

function renderConnection(article) {
  var concArticlesHtml = $('#articles-template').html();
  var concArticlesTemplate = Handlebars.compile(concArticlesHtml);
  var html = concArticlesTemplate(article);
  // $('.articlesShow').empty();
  // $currentCarousel.find('articlesList').append(html);
  $('.articlesShow').prepend(html);
}

function renderArticles(article) {
  var articleHtml = $('#articles-template').html();
  var articleTemplate = Handlebars.compile(articleHtml);
  var html = articleTemplate(article);
  // $currentCarousel.find('articlesList').append(html);
  $('.articlesShow').prepend(html);
}
//
function onSuccess(articles) {
  console.log('FOUND ALL PIECES', articles);

  articles.forEach(function (article){
    renderArticles(article);
  });
}

function onSuccessClick(articles) {
  console.log('FOUND ALL PIECES', articles);
  articles.forEach(function (article){
    renderArticlesClick(article);
  });
}

function renderArticlesClick(article) {
  var articleHtmlClick = $('#articles-template').html();
  var articleTemplate = Handlebars.compile(articleHtmlClick);
  var html = articleTemplate(article);
  // $currentCarousel.find('articlesList').append(html);
  $('.articlesShow').prepend(html);
}
