$(document).ready(function(){

    const showMainContentByIndex = (index) => {
        $('.main-content-item').hide();
        $(`.main-content-item[data-index="${index}"]`).show();
    }

    const markActiveItemByIndex = (index) => {
        $('.main-slider-item').removeClass('active');
        $(`.main-slider-item[data-index="${index}"]`).addClass('active');
    }

    $('.main-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
    });

    showMainContentByIndex(1);

    $('.main-slider .main-slider-item img').mouseenter((e) => {
        let indexToShow = $(e.target).parent().data('index');
        markActiveItemByIndex(indexToShow);
        showMainContentByIndex(indexToShow);
        if(indexToShow !== 8 && indexToShow !== '8') {
            document.getElementById('omni-video-main').load();
        } else {
            document.getElementById('omni-video-main').play();
        }
    });

    $('.hotpoint-outer[data-index="1"]').magnificPopup({
        items: {
          src: 'images/main-slider/full/2.jpg'
        },
        type: 'image'
    });

    $('.hotpoint-outer[data-index="2"]').magnificPopup({
        items: [
            {
                src: 'images/main-slider/full/4.jpg'
            },
            {
                src: 'images/main-slider/full/6.jpg'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });

    $('.hotpoint-outer[data-index="3"]').magnificPopup({
        items: [
            {
                src: 'images/hot_3_1.jpg'
            },
            {
                src: 'images/hot_3_2.jpg'
            },
            {
                src: 'images/hot_3_3.jpg'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });

    $('.hotpoint-outer[data-index="5"]').magnificPopup({
        items: {
          src: 'images/main-slider/full/3.jpg'
        },
        type: 'image'
    });

    $('.hotpoint-outer[data-index="6"]').magnificPopup({
        items: {
          src: 'images/main-slider/full/5.gif'
        },
        type: 'image'
    });

    $('.hotpoint-outer[data-index="4"]').magnificPopup({
        items: {
            src: `
                <video id="omni-video" preload="auto">
                    <source src="vid.mp4" type="video/mp4">
                </video>
            `,
        },
        type: 'inline',
        callbacks: {
            open: function() {
                $('html').css('margin-right', 0);
                // Play video on open:
                document.getElementById('omni-video').play();
            },
            close: function() {
                // Reset video on close:
                document.getElementById('omni-video').load();
            }
        }
    });
    
    
});