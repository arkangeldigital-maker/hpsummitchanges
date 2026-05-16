var uza_window = $(window);
uza_window.on('load', function () {
    $('#preloader').fadeOut('1000', function () {
        $(this).remove();
    });
});

$(document).ready(function () {

    /*
    ===================================
    HEADER SCROLL
    ===================================
    */

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 30) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }

    });

    /*
    ===================================
    COUNTER ANIMATION
    ===================================
    */

    $('.counter').each(function () {

        let $this = $(this);

        let countTo = parseInt(
            $this.attr('data-count')
        );

        $({
            countNum: 0
        }).animate({

            countNum: countTo

        }, {

            duration: 2500,

            easing: 'swing',

            step: function () {

                if (countTo >= 1000000) {

                    $this.text(
                        (this.countNum / 1000000).toFixed(1) + 'M+'
                    );

                } else {

                    $this.text(
                        Math.floor(this.countNum).toLocaleString()
                    );

                }

            },

            complete: function () {

                if (countTo >= 1000000) {

                    $this.text(
                        (this.countNum / 1000000).toFixed(1) + 'M+'
                    );

                } else {

                    $this.text(
                        Math.floor(this.countNum).toLocaleString()
                    );

                }

            }

        });

    });

    /*
    ===================================
    WORLD SECTION PARALLAX
    ===================================
    */

    /*$(window).on('mousemove', function (e) {

        let x = (window.innerWidth - e.pageX * 1.02) / 90;
        let y = (window.innerHeight - e.pageY * 1.02) / 90;

        $('.world-shape-dark').css({
            transform:
                'rotate(45deg) translate(' +
                x * 0.3 + 'px,' +
                y * 0.3 + 'px)'
        });

        $('.world-shape-blue').css({
            transform:
                'rotate(45deg) translate(' +
                x * 0.5 + 'px,' +
                y * 0.5 + 'px)'
        });

    });*/

    /*
    ===================================
    ACTIVE MENU ON SCROLL
    ===================================
    */

    const sections = $('section[id]');
    const navLinks = $('.navbar-nav .nav-link');

    $(window).on('scroll', function () {

        let currentScroll = $(this).scrollTop();

        sections.each(function () {

            const sectionTop =
                $(this).offset().top - 140;

            const sectionHeight =
                $(this).outerHeight();

            const sectionId =
                $(this).attr('id');

            if (
                currentScroll >= sectionTop &&
                currentScroll <
                sectionTop + sectionHeight
            ) {

                navLinks.removeClass('active');

                $('.navbar-nav .nav-link[href="#' + sectionId + '"]')
                    .addClass('active');

            }

        });

    });

    /*
    ===================================
    SMOOTH SCROLL
    ===================================
    */

    $('.navbar-nav .nav-link').on('click', function (e) {

        const target = $(this).attr('href');

        if ($(target).length) {

            e.preventDefault();

            $('html, body').animate({

                scrollTop:
                    $(target).offset().top - 74

            }, 800);

        }

    });

    /*
    ===================================
    INSIDE SLIDER
    ===================================
    */

    $(document).ready(function () {

        const trackCobertura = $('#cobertura .inside-track');
        const cardsCobertura = $('#cobertura .inside-card');
        const dotsContainerCobertura = $('#cobertura .inside-dots');

        let currentCobertura = 0;

        function getCardsPerViewCobertura() {

            if ($(window).width() < 768) {

                return 1;

            } else if ($(window).width() < 1200) {

                return 2;

            }

            return 4;
        }

        function updateSliderCobertura() {

            const cardsPerViewCobertura = getCardsPerViewCobertura();

            const cardWidthCobertura =
                cardsCobertura.outerWidth(true);

            const maxSlidesCobertura =
                cardsCobertura.length - cardsPerViewCobertura;

            if (currentCobertura < 0) {

                currentCobertura = 0;

            }

            if (currentCobertura > maxSlidesCobertura) {

                currentCobertura = maxSlidesCobertura;

            }

            trackCobertura.css({

                transform:
                    `translateX(-${currentCobertura * cardWidthCobertura}px)`

            });

            $('#cobertura .inside-dot')
                .removeClass('active');

            $('#cobertura .inside-dot')
                .eq(currentCobertura)
                .addClass('active');

            /* ARROWS */

            if (currentCobertura <= 0) {

                $('#cobertura .inside-prev').fadeOut(200);

            } else {

                $('#cobertura .inside-prev').fadeIn(200);

            }

            if (currentCobertura >= maxSlidesCobertura) {

                $('#cobertura .inside-next').fadeOut(200);

            } else {

                $('#cobertura .inside-next').fadeIn(200);

            }

        }

        /*
        ===================================
        DOTS
        ===================================
        */

        function createDotsCobertura() {

            dotsContainerCobertura.html('');

            const cardsPerViewCobertura =
                getCardsPerViewCobertura();

            const totalCobertura =
                cardsCobertura.length - cardsPerViewCobertura + 1;

            for (let i = 0; i < totalCobertura; i++) {

                dotsContainerCobertura.append(
                    `<div class="inside-dot" data-index="${i}"></div>`
                );

            }

        }

        /*
        ===================================
        EVENTS
        ===================================
        */

        $('#cobertura .inside-next').on('click', function () {

            currentCobertura++;

            updateSliderCobertura();

        });

        $('#cobertura .inside-prev').on('click', function () {

            currentCobertura--;

            updateSliderCobertura();

        });

        $(document).on('click', '#cobertura .inside-dot', function () {

            currentCobertura =
                $(this).data('index');

            updateSliderCobertura();

        });

        $(window).on('resize', function () {

            createDotsCobertura();

            updateSliderCobertura();

        });

        /*
        ===================================
        INIT
        ===================================
        */

        createDotsCobertura();

        updateSliderCobertura();

    });

    
    /*
    ===================================
    INNOVACION SLIDER
    ===================================
    */

    $(document).ready(function () {

        const trackinnovacion = $('#innovacion .inside-track');
        const cardsinnovacion = $('#innovacion .inside-card');
        const dotsContainerinnovacion = $('#innovacion .inside-dots');

        let currentinnovacion = 0;

        function getCardsPerViewinnovacion() {

            if ($(window).width() < 768) {
                return 1;
            } else if ($(window).width() < 1200) {
                return 2;
            }
            return 2;
        }

        function updateSliderinnovacion() {

            const cardsPerViewinnovacion = getCardsPerViewinnovacion();

            const cardWidthinnovacion =
                cardsinnovacion.outerWidth(true);

            const maxSlidesinnovacion =
                cardsinnovacion.length - cardsPerViewinnovacion;

            if (currentinnovacion < 0) {
                currentinnovacion = 0;
            }

            if (currentinnovacion > maxSlidesinnovacion) {
                currentinnovacion = maxSlidesinnovacion;

            }

            trackinnovacion.css({
                transform:
                    `translateX(-${currentinnovacion * cardWidthinnovacion}px)`
            });

            $('#innovacion .inside-dot')
                .removeClass('active');

            $('#innovacion .inside-dot')
                .eq(currentinnovacion)
                .addClass('active');

            /* ARROWS */

            if (currentinnovacion <= 0) {
                $('#innovacion .inside-prev').fadeOut(200);
            } else {
                $('#innovacion .inside-prev').fadeIn(200);

            }
            if (currentinnovacion >= maxSlidesinnovacion) {
                $('#innovacion .inside-next').fadeOut(200);
            } else {
                $('#innovacion .inside-next').fadeIn(200);

            }

        }

        /*
        ===================================
        DOTS
        ===================================
        */

        function createDotsinnovacion() {

            dotsContainerinnovacion.html('');

            const cardsPerViewinnovacion =
                getCardsPerViewinnovacion();

            const totalinnovacion =
                cardsinnovacion.length - cardsPerViewinnovacion + 1;

            for (let j = 0; j < totalinnovacion; j++) {

                dotsContainerinnovacion.append(
                    `<div class="inside-dot" data-index="${j}"></div>`
                );

            }

        }

        /*
        ===================================
        EVENTS
        ===================================
        */

        $('#innovacion .inside-next').on('click', function () {

            currentinnovacion++;

            updateSliderinnovacion();

        });

        $('#innovacion .inside-prev').on('click', function () {

            currentinnovacion--;

            updateSliderinnovacion();

        });

        $(document).on('click', '#innovacion .inside-dot', function () {

            currentinnovacion =
                $(this).data('index');

            updateSliderinnovacion();

        });

        $(window).on('resize', function () {

            createDotsinnovacion();

            updateSliderinnovacion();

        });

        /*
        ===================================
        INIT
        ===================================
        */

        createDotsinnovacion();

        updateSliderinnovacion();

    });


    /*
    ===================================
    CHANGE MAIN IMAGE
    ===================================
    */

    $('.s-tech-item').on('click', function () {

        const newImage =
            $(this)
            .find('img')
            .attr('data-full');

        /*
        ACTIVE STATE
        */

        $('.s-tech-item')
            .removeClass('active');

        $(this)
            .addClass('active');

        /*
        FADE EFFECT
        */

        $('#sTechMainImage').css({

            opacity:0

        });

        setTimeout(function () {

            $('#sTechMainImage')
                .attr('src', newImage);

            $('#sTechMainImage').css({

                opacity:1

            });

        }, 220);

    });

    $('#galeria .photos').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Cargando imagen #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">La imagen #%curr%</a> no puede ser cargada.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true, 
            duration: 300, // Animation speed in milliseconds
            easing: 'ease-in-out', 
            // The "opener" function links the popup back to the thumbnail for the zoom origin
            opener: function(openerElement) {
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

    $('.video-play-btnlink').magnificPopup({
        type: 'iframe'
    });
    

});