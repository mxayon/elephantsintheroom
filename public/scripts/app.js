$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/articles', onSuccess);
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

///////////form

    $("#add_row").on("click", function() {
          // Dynamic Rows Code

          // Get max row id and set new id
          var newid = 0;
          $.each($("#tab_logic tr"), function() {
              if (parseInt($(this).data("id")) > newid) {
                  newid = parseInt($(this).data("id"));
              }
          });
          newid++;

          var tr = $("<tr></tr>", {
              id: "addr"+newid,
              "data-id": newid
          });

          // loop through each td and create new elements with name of newid
          $.each($("#tab_logic tbody tr:nth(0) td"), function() {
              var cur_td = $(this);

              var children = cur_td.children();

              // add new td and element if it has a nane
              if ($(this).data("name") != undefined) {
                  var td = $("<td></td>", {
                      "data-name": $(cur_td).data("name")
                  });

                  var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
                  c.attr("name", $(cur_td).data("name") + newid);
                  c.appendTo($(td));
                  td.appendTo($(tr));
              } else {
                  var td = $("<td></td>", {
                      'text': $('#tab_logic tr').length
                  }).appendTo($(tr));
              }
          });

          // add delete button and td
          /*
          $("<td></td>").append(
              $("<button class='btn btn-danger glyphicon glyphicon-remove row-remove'></button>")
                  .click(function() {
                      $(this).closest("tr").remove();
                  })
          ).appendTo($(tr));
          */

          // add the new row
          $(tr).appendTo($('#tab_logic'));

          $(tr).find("td button.row-remove").on("click", function() {
               $(this).closest("tr").remove();
          });
  });



/////end document ready//////
});

// var $currentCarousel = articlesList;


//
// function renderArticles(articles) {
//   var articleHtml = $('#articles-template').html();
//   var articleTemplate = Handlebars.compile(articleHtml);
//   var html = articleTemplate({ articles: articles });
//   $currentCarousel.find('articlesList').appened(html);
//   $('#container-carousel').prepend(html);
// }
//
// function onSuccess(json) {
//   console.log('FOUND ALL PIECES');
//   renderArticles(json);
//
// }


$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



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
