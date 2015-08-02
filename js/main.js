var list = ['developer','dancer','comic book enthusiast','student','golden hawk','hacker','black coffee drinker'];
var queue = new Queue();

$(function(){
    console.log("ready");
    insertVal();

    /** Nav bar lock function */
    // need to recalculate height when user changes screen size like un-maximizing the window
    var height = $(window).height();
    $(window).on('scroll', function(){
        $('.header').fadeIn(1500, function(){
            $('.header').removeClass('light-hidden');
        });
        stayUp(height);
    })
});

function insertVal(){
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

function stayUp(height){
    if ($(window).scrollTop() > height){
        $('.header').addClass('fixed').css('top','0');
    } else {
        $('.header').removeClass('fixed');
    }
}
