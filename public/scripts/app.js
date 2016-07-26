$(document).ready(function() {
  console.log('app.js loaded!');
  // $.get('/api/articles', onSuccess);
  // $.get('/api/articles', onSuccessTitle);

  // $.get('/api/articleTagWords/5796ca17a5d21536bad9ad7b/articles', onSuccessMajorIssues);

  $.get('/api/articles', onSuccess);

  $('#majorIssues').on('click', function(e){
    $.get('/api/articleTagWords/5796ca17a5d21536bad9ad7b/articles', onSuccessMajorIssues);
  });

  $('#communication').on('click', function(e){
    $.get('/api/articleTagWords/5796ca17a5d21536bad9ad88/articles', onSuccessCommunication);
  });

  $('#culture').on('click', function(e){
    $.get('/api/articleTagWords/5796ca17a5d21536bad9ad89/articles', onSuccessCulture);
  });

  $('#connection').on('click', function(e){
    $.get('/api/articleTagWords/5796ca17a5d21536bad9ad8a/articles', onSuccessConnection);
  });



////////form input works!!!!
  $('#article-form form').on('submit', function(e) {
      e.preventDefault();
      var formData = $(this).serialize();
      console.log('formData', formData);
      $.post('/api/articles', formData, function(articles) {
      console.log('article after POST', articles);
      renderArticles(articles);  //render the server's response
      });
      $(this).trigger("reset");
      $('form input').val('');
    });



/////end document ready//////
});

// var $currentCarousel = $(".container-carousel");

function onSuccessMajorIssues(articles) {
  console.log('FOUND ALL MajorIssuesArticles', articles);
  articles.forEach(function (article){
    renderMajor(article);
});
}

function renderMajor(article) {
  var articleHtml = $('#articles-template').html();
  var articleTemplate = Handlebars.compile(articleHtml);
  var html = articleTemplate(article);
  $('.articlesShow').empty();
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
  var articleHtml = $('#articles-template').html();
  var articleTemplate = Handlebars.compile(articleHtml);
  var html = articleTemplate(article);
  $('.articlesShow').empty();
  // $currentCarousel.find('articlesList').append(html);
  $('.articlesShow').prepend(html);
}


function onSuccessCulture(articles) {
  console.log('FOUND ALL CultureArticles', articles);
  articles.forEach(function (article){
    renderCulture(article);
});
}

function renderCulture(article) {
  var articleHtml = $('#articles-template').html();
  var articleTemplate = Handlebars.compile(articleHtml);
  var html = articleTemplate(article);
  $('.articlesShow').empty();
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
  var articleHtml = $('#articles-template').html();
  var articleTemplate = Handlebars.compile(articleHtml);
  var html = articleTemplate(article);
  $('.articlesShow').empty();
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
