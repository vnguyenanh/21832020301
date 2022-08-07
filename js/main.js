// Start Hidden Search
var toggleSearch = document.getElementById('toggleSearch');
var hd_search_onoff = true;
toggleSearch.addEventListener('click', function(){
    var element = document.getElementById("hds");
    if(hd_search_onoff){
        element.classList.add("header__search__active");
        hd_search_onoff = false;
    }
    else{
        element.classList.remove("header__search__active");
        hd_search_onoff = true;
    }
})
// End Hidden Search

// Start Slide
$(document).ready(function(){
    $('.tv__slide__block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slick-dots tv__slide__dots',
        responsive: true,
        autoplay: true,
        arrows: false
    });
  });
// End Slide