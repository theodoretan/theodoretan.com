var list = ['developer','dancer','student','golden hawk', 'coffee drinker','self-starter'];
var queue = new Queue();
insertVal();

window.setInterval(scroll, 2000);

$(function(){
  console.log("ready");
  // need to recalculate height when user changes screen size like un-maximizing the window
  var height = $(window).height();
  $(window).on('scroll', function(){
    $('.header').fadeIn(1500, function(){
      $('.header').removeClass('light-hidden');
    });
    stayUp(height);
  })

  $('li, a').on('click', function(e) {
    var id = $(this).attr('id');
    scrollToClass(id);
    e.preventDefault();
  })

  $('.resume').on('click', openResume);
  $('.github').on('click', github);

  // changes the height that is needed for the nav bar to stick to the top of the page.
  window.addEventListener('resize', function(){
    height = $(window).height();
  });
});

function insertVal() {
  for (var x = 0; x < list.length; x++) {
    queue.insert(list[x]);
  }
  for (var x = 0; x < queue.getlen(); x++){
    var a = Math.floor(Math.random() * queue.getlen());
    do {
      var b = Math.floor(Math.random() * queue.getlen());
    } while (a === b);
    queue.swap(a,b);
  }
}

function getVal() {
  if (queue.peek() === false) {
    insertVal();
  }
  return queue.remove();
}

function scroll() {
  var scroller = $('.scroller p');
  scroller.fadeOut(400, function() {
    scroller.text(getVal());
    scroller.fadeIn(400);
  });
}

function stayUp(height) {
  if ($(window).scrollTop() >= height){
    $('.header').addClass('fixed').css('top','0');
    $('.about').addClass('fix_height');
  } else {
    $('.header').removeClass('fixed');
    $('.about').removeClass('fix_height');
  }
}

function scrollToClass(id) {
  var off = 80;

  if (id === 'down' ) {
    id = 'about';
    off = 85;
    if ($('.header').hasClass('light-hidden')){ off = 25; }
  }
  else if (id === 'lander') { off = 0; }
  else if (id === 'about') { off = 85; }
  $('html, body').animate({
    scrollTop:$('.'+id).offset().top - off
  },1500);
}

var openResume = function() {
  window.open('files/resume.pdf');
}

var github = function() {
  window.location.href = "http://www.github.com/th30retical/";
}
