// 배너 타이머
$(function () {
    var item_top = $('.event_01>').outerHeight(true);
    $('.event_01:first').before($('.event_01:last'));
    $('.event').css({
        'top': -item_top + 'px'
    });
    function slide_ani() {
        var top_indent = parseInt($('.event').css('top')) - item_top;
        $('.event').stop().animate({
            'top': top_indent + 'px'
        }, 700, function () {
            $('.event_01:last').after($('.event_01:first'));
            $('.event').css('top', -item_top + 'px');
        });
    }
    function stat_timer() {
        timer = setInterval(slide_ani, 2000);
    }
    function stop_timer() {
        clearInterval(timer);
    }

    // $('.slide_img').hover(stop_timer, stat_timer);
    stat_timer()

})

// //첫화면 이미지


 $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

// // 메인페이지슬라이드
 const sliderContainer = document.querySelector('.slider-container');
 const slides = document.querySelectorAll('.main_page');
 let currentIndex = 0;
 function showNextSlide() {
     currentIndex = (currentIndex + 1) % slides.length;
     sliderContainer.style.transform = `translateX(${-currentIndex * 200}px)`;
 }
 setInterval(showNextSlide, 2000);


 const gallery = document.getElementById('gallery');
        let scrollAmount = 0;

        function scrollGallery(event) {
            event.preventDefault();

            // 마우스 휠 방향에 따라 이미지들을 좌우로 이동
            scrollAmount += event.deltaY > 0 ? 100 : -100;

            // 최대 스크롤 범위 제한
            scrollAmount = Math.min(scrollAmount, gallery.scrollWidth - gallery.clientWidth);
            scrollAmount = Math.max(scrollAmount, 0);


            // 이미지 갤러리를 좌우로 스크롤
            gallery.scrollTo({
                left: scrollAmount,
                behavior: 'smooth' // 부드러운 스크롤을 위한 옵션
            });

        }


        //  마우스 휠 이벤트에 대한 리스너 등록
        gallery.addEventListener('wheel', scrollGallery);
        $('.post-wrapper').slick({
            slidesToShow: 5,
            slidesToScroll: 3,
            // autoplay: true,
            // autoplaySpeed: 2500,

        })
        window.onscroll = function () { scrollFunction() };


        // 스크롤 내릴 때 서브메뉴 고정
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("mini_banner").classList.add("visible");
            } else {
                document.getElementById("mini_banner").classList.remove("visible");
            }
        }
