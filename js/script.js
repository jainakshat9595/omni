$(document).ready(function(){

    const showMainContentByIndex = (index) => {
        $('.main-content-item').hide();
        $(`.main-content-item[data-index="${index}"]`).show();
    }

    $('.main-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
    });

    showMainContentByIndex(1);

    $('.main-slider .main-slider-item img').mouseenter((e) => {
        let indexToShow = $(e.target).data('index');
        showMainContentByIndex(indexToShow);
    });

    
});