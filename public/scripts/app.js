$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/articles', onSuccess);
  $.get('/api/articles', onSuccessTitle);
////carousel
  var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');
			}
		}
		clickEvent = false;

	  });


////////form input works!!!!
  $('#article-form form').on('submit', function(e) {
      e.preventDefault();
      var formData = $(this).serialize();
      console.log('formData', formData);
      $.post('/api/articles', formData, function(articles) {
      console.log('article after POST', articles);
      renderArticles(article);  //render the server's response
      });
      $(this).trigger("reset");
      $('form input').val('');
    });



/////end document ready//////
});

// var $currentCarousel = $(".container-carousel");



function renderArticles(article) {
  var articleHtml = $('#articles-template').html();
  var articleTemplate = Handlebars.compile(articleHtml);
  var html = articleTemplate(article);
  // $currentCarousel.find('articlesList').append(html);
  $('.carousel-inner').prepend(html);
}

function onSuccess(articles) {
  console.log('FOUND ALL PIECES', articles);
  articles.forEach(function (article){
    renderArticles(article);
  });
}

function renderTitle(title) {
  var titleHtml = $('#title-template').html();
  var titleTemplate = Handlebars.compile(titleHtml);
  var html = titleTemplate(title);
  console.log(html);
  $('.list-group').prepend(html);
}

function onSuccessTitle(titles) {
  console.log('FOUND ALL PIECES', titles);
  titles.forEach(function (title){
    renderTitle(title);
  });
}



function handleNewArticle(articles) {
  console.log(articles);
  renderArticles(article);
}

////////scroll spy
//
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });
//
// //jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

////////end scroll spy

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});

  // $.get('/api/articles').success(function (articles) {
  //   articles.forEach(function(article) {
  //     renderArticle(article);
  //   });
  // });
