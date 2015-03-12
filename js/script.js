//var divs = document.getElementsByClassName('alert');
//for(var i=0; i<divs.length; i++) {
//  divs[i].addEventListener("click", highlightThis);
//  /*
//  divs[i].addEventListener("click", highlightThis, true);
//  divs[i].addEventListener("click", highlightThis, false);*/
//}
//
//function highlightThis(event) {
//    //event.stopPropagation();
//
//    var backgroundColor = this.style.backgroundColor;
//    this.style.backgroundColor='yellow';
//    alert(this.className);
//    this.style.backgroundColor=backgroundColor;
//}

$(
    function() {
        $(window).scroll(function(e){
            if($(document).scrollTop() > 0){
                $("nav").removeClass('large').addClass('small');
            }
            else {
                $('nav').removeClass('small').addClass('large');
            }
        });
        $(window).scroll(function(event){
            var section1 = $('#section1');
            var section2 = $('#section2');
            var section3 = $('#section3');
            var entry1 = $('#entry1');
            var entry2 = $('#entry2');
            var entry3 = $('#entry3');
            var entry4 = $('#entry4');

            //if($(document).scrollTop() >  section1.offsetTop){
            if($(document).scrollTop() >= 50 && $(document).scrollTop() < section2.offset().top - 1){
                entry1.addClass('active');
            }
            else {
                entry1.removeClass('active');
            }
            if($(document).scrollTop() >= section2.offset().top - 1 && $(document).scrollTop() < $('#video-section').offset().top - 1){
                entry2.addClass('active');
            }
            else {
                entry2.removeClass('active');
            }
            if($(document).scrollTop() >= $('#video-section').offset().top - 1 && $(document).scrollTop() < section3.offset().top - 1){
                entry3.addClass('active');
            }
            else {
                entry3.removeClass('active');
            }
            if($(document).scrollTop() + 1 >= section3.offset().top -1){
                entry4.addClass('active');
            }
            else {
                entry4.removeClass('active');
            }

        });

        $('.fade').slick({
            //setting-name: setting-value
            accessibility: true,
            dots: false,
            prevArrow: "<button style='float: left; position: relative;background-color: transparent;z-index: 998;bottom:250px;' type=\"button\" class=\"slick-prev\"><li class='fa fa-arrow-left fa-3x'></li></button>",
            nextArrow:"<button style='float: right;position: relative;background-color: transparent;z-index: 998;bottom:250px;' type=\"button\" class=\"slick-next\"><li class='fa fa-arrow-right fa-3x'></li></button>",
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });

        $('a[href*=#]').click(function() {
            var target = $(this.hash);
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 800);
            return false;
        });
        $(document).foundation();
    }

)

$(
    function(){

        $('.variable-width').slick({
            accessibility: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });
    }
)

