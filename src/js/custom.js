
/*
$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 100) {
      $(".scrollTopbtn").addClass("small")
  } else {
      $(".scrollTopbtn").removeClass("small")
  }
});
*/
$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
      $('.scrollTopbtn').addClass('show');
  } else {
      $('.scrollTopbtn').removeClass('show');
  }
});
$('.scrollTopbtn').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
});





// language script.js
$(document).ready(function () {
  const locales = [
    { locale: "en-US", name: "EN", flag: "us.png" },
    { locale: "fr-FR", name: "FR", flag: "fr.png" },
    { locale: "pt-PT", name: "PT", flag: "pt.png" },
    { locale: "de-DE", name: "DE", flag: "gr.png" },
    { locale: "tr-TR", name: "TR", flag: "tr.png" },
    // Add more locales as needed
  ];

  const $dropdownBtn = $(".dropdown-btn");
  const $dropdownContent = $(".dropdown-content");
  const $selectedFlag = $(".selected-flag");
  const $selectedLanguage = $(".selected-language");

  $.each(locales, function (index, locale) {
    const $listEl = $("<li></li>").html(`<img src="./images/flags/${locale.flag}" alt="${locale.name}"/> ${locale.name}`);
    $listEl.on("click", function () {
      setSelectedLocale(locale);
    });
    $dropdownContent.append($listEl);
  });

  $dropdownBtn.on("click", function () {
    $dropdownContent.toggle();
  });

  function setSelectedLocale(locale) {
    $selectedFlag.attr("src", `./images/flags/${locale.flag}`);
    $selectedLanguage.text(locale.name);
    $dropdownContent.hide();
  }

  // Close the dropdown if the user clicks outside of it
  $(window).on("click", function (event) {
    if (!$(event.target).is('.dropdown-btn')) {
      $dropdownContent.hide();
    }
  });
});

if ($(window).width() < 575) {
  $(".footerSocialLinksArea ").insertAfter(".footerRegionBox");
  $(".copyWriteArea ").insertAfter(".footerSocialLinksArea");
  $(".homeAboutVideoArea ").insertAfter(".homeAboutCounterField");
  $(".homeAboutContent .custome-btn ").insertAfter(".solutionListArea");
  $(".language-selector-header ").insertAfter(".navbar-collapse-region-blank");
} else {
  //$(".footerSocialLinksArea").removeClass("mobileview");
}

if ($(window).width() <1199) {
  $(".header .navbar .navbar-nav .nav-item").hover(function(){
    $(this).removeClass("hover");    
  });  
} else {
  $('.header .navbar .navbar-nav .nav-item').mouseenter(function() {
    $(this).addClass("hover");    
    $(".header .navbar .navbar-nav .nav-item").not($(this)).removeClass("hover"); 
}).mouseleave(function() {
  $(this).removeClass("hover");    
});
}

$(".meet-accordian .meet-accordian-item .meet-right-box .meet-accordian-header").click(function(){
  $(this).parent().parent().toggleClass("curent");
  $('.meet-accordian .meet-accordian-item .meet-right-box .meet-accordian-header').not($(this)).parent().parent().removeClass('curent');
});

// Counter To Count Number Visit
let a = 0;
$(window).scroll(function() {

  let oTop = $('#unique-id').offset().top - window.innerHeight;
  // Md.Asaduzzaman Muhid
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
        let $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 5000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    a = 1;// Md.Asaduzzaman Muhid
  }
});













$(".navbar-toggler").click(function () {
  $(".navbar-collapse").toggleClass("menu-visible");
  $(".menu_overlay").toggleClass("menu-visible");
  $("body").css("overflow", "hidden");
});

$(".menu_close_btn").click(function () {
  $(".navbar-collapse").removeClass("menu-visible");
  $(".navbar-collapse").removeClass("show");
  $(".menu_overlay").removeClass("menu-visible");
  $("body").css("overflow", "auto");
});

$(".menu_overlay").click(function () {
  $(".menu_overlay").removeClass("menu-visible");
  $(".navbar-collapse").removeClass("show");
  $(".navbar-collapse").removeClass("menu-visible");
  $("body").css("overflow", "auto");
});




/*var selector = $('.successStoriesSlider');
$('.my-next-button').click(function() {
  selector.trigger('next.owl.carousel');
});
$('.my-prev-button').click(function() {
  selector.trigger('prev.owl.carousel');
});
*/


$(".header .navbar .navbar-nav li ul")
  .find("li")
  .closest("ul")
  .parent("li")
  .addClass("dropdown_menu");
$(".header .navbar .navbar-nav li").click(function () {
  $(this).toggleClass("curent");
  $(".header .navbar .navbar-nav li").not($(this)).removeClass("curent");
});














$(".modal").insertAfter(".footer");










$(".trustedSlider").owlCarousel({
  nav: false,
  margin: 15,
  autoplay: true,
  loop: true,
  dots: false,
  smartSpeed: 500,
  navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>",
  ],

  /*animateOut: 'fadeOut',
       animateIn: 'fadeIn',*/
  responsive: {
    0: {
      items: 3,
    },
    480: {
      items: 4,
    },
    600: {
      items: 6,
    },
    767: {
      items: 8,
    },
    991: {
      items: 10,
    },
    1200: {
      items: 12,
    },
    1440: {
      items: 12,
    },
    1920: {
      items: 12,
    },
  },
});


$(".testimonialSlider").owlCarousel({
  nav: true,
  margin: 20,
  autoplay: false,
  loop: false,
  dots: false,
  smartSpeed: 500,
  navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>",
  ],

  /*animateOut: 'fadeOut',
       animateIn: 'fadeIn',*/
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    480: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    767: {
      items: 2,
    },
    991: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1440: {
      items: 3,
    },
    1920: {
      items: 3,
    },
  },
});

$(".successStoriesSlider-1").owlCarousel({
  nav: true,
  margin: 10,
  autoplay: false,
  loop: false,
  dots: false,
  smartSpeed: 500,
  //autoWidth:true,
  navText: [
    "<span><i class='fa-light fa-angle-left'></i></span>",
    "<span><i class='fa-light fa-angle-right'></i></span>",
  ],
  navContainer: '.custom-owl-nav-1',
  navContainerClass:'owl-nav',
  navClass:['owl-prev', 'owl-next'],
  responsive: {
    0: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    480: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    600: {
      items: 3,
      autoWidth:false,
    },
    767: {
      items: 3,
      autoWidth:false,
    },
    991: {
      items: 3,
      autoWidth:false,
    },
    1200: {
      items: 4,
      autoWidth:false,
    },
    1440: {
      items: 4,
    },
    1920: {
      items: 4,
    },
  },
});

$(".successStoriesSlider-2").owlCarousel({
  nav: true,
  margin: 10,
  autoplay: false,
  loop: false,
  dots: false,
  smartSpeed: 500,
  //autoWidth:true,
  navText: [
    "<span><i class='fa-light fa-angle-left'></i></span>",
    "<span><i class='fa-light fa-angle-right'></i></span>",
  ],
  navContainer: '.custom-owl-nav-2',
  navContainerClass:'owl-nav',
  navClass:['owl-prev', 'owl-next'],
  responsive: {
    0: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    480: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    600: {
      items: 3,
      autoWidth:false,
    },
    767: {
      items: 3,
      autoWidth:false,
    },
    991: {
      items: 3,
      autoWidth:false,
    },
    1200: {
      items: 4,
      autoWidth:false,
    },
    1440: {
      items: 4,
    },
    1920: {
      items: 4,
    },
  },
});

$(".successStoriesSlider-3").owlCarousel({
  nav: true,
  margin: 10,
  autoplay: false,
  loop: false,
  dots: false,
  smartSpeed: 500,
  //autoWidth:true,
  navText: [
    "<span><i class='fa-light fa-angle-left'></i></span>",
    "<span><i class='fa-light fa-angle-right'></i></span>",
  ],
  navContainer: '.custom-owl-nav-3',
  navContainerClass:'owl-nav',
  navClass:['owl-prev', 'owl-next'],
  responsive: {
    0: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    480: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    600: {
      items: 3,
      autoWidth:false,
    },
    767: {
      items: 3,
      autoWidth:false,
    },
    991: {
      items: 3,
      autoWidth:false,
    },
    1200: {
      items: 4,
      autoWidth:false,
    },
    1440: {
      items: 4,
    },
    1920: {
      items: 4,
    },
  },
});

$(".successStoriesSlider-4").owlCarousel({
  nav: true,
  margin: 10,
  autoplay: false,
  loop: false,
  dots: false,
  smartSpeed: 500,
  //autoWidth:true,
  navText: [
    "<span><i class='fa-light fa-angle-left'></i></span>",
    "<span><i class='fa-light fa-angle-right'></i></span>",
  ],
  navContainer: '.custom-owl-nav-4',
  navContainerClass:'owl-nav',
  navClass:['owl-prev', 'owl-next'],
  responsive: {
    0: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    480: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    600: {
      items: 3,
      autoWidth:false,
    },
    767: {
      items: 3,
      autoWidth:false,
    },
    991: {
      items: 3,
      autoWidth:false,
    },
    1200: {
      items: 4,
      autoWidth:false,
    },
    1440: {
      items: 4,
    },
    1920: {
      items: 4,
    },
  },
});

$(".successStoriesSlider-5").owlCarousel({
  nav: true,
  margin: 10,
  autoplay: false,
  loop: false,
  dots: false,
  smartSpeed: 500,
  //autoWidth:true,
  navText: [
    "<span><i class='fa-light fa-angle-left'></i></span>",
    "<span><i class='fa-light fa-angle-right'></i></span>",
  ],
  navContainer: '.custom-owl-nav-5',
  navContainerClass:'owl-nav',
  navClass:['owl-prev', 'owl-next'],
  responsive: {
    0: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    480: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    600: {
      items: 3,
      autoWidth:false,
    },
    767: {
      items: 3,
      autoWidth:false,
    },
    991: {
      items: 3,
      autoWidth:false,
    },
    1200: {
      items: 4,
      autoWidth:false,
    },
    1440: {
      items: 4,
    },
    1920: {
      items: 4,
    },
  },
});

$(".successStoriesSlider-6").owlCarousel({
  nav: true,
  margin: 10,
  autoplay: false,
  loop: false,
  dots: false,
  smartSpeed: 500,
  //autoWidth:true,
  navText: [
    "<span><i class='fa-light fa-angle-left'></i></span>",
    "<span><i class='fa-light fa-angle-right'></i></span>",
  ],
  navContainer: '.custom-owl-nav-6',
  navContainerClass:'owl-nav',
  navClass:['owl-prev', 'owl-next'],
  responsive: {
    0: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    480: {
      items: 2,
      nav: true,
      autoWidth:false,
    },
    600: {
      items: 2,
      autoWidth:false,
    },
    767: {
      items: 3,
      autoWidth:false,
    },
    991: {
      items: 3,
      autoWidth:false,
    },
    1200: {
      items: 4,
      autoWidth:false,
    },
    1440: {
      items: 4,
    },
    1920: {
      items: 4,
    },
  },
});


$(".meet-right-slider").owlCarousel({
  nav: true,
  autoplay: false,
  loop: true,
  dots: false,
  smartSpeed: 500,
  navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>",
  ],
  responsive: {
    0: {
      items: 3,
    },
    480: {
      items: 3,
    },
    600: {
      items: 3,
    },
    767: {
      items: 3,
    },
    991: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1440: {
      items: 3,
    },
    1920: {
      items: 3,
    },
  },
});

$(".leadership-slider").slick({
  dots: false,
  infinite: false,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  // centerMode: true,
  // variableWidth: false,
  // autoplay: true,
  // autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false, 
        infinite: false,       
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,        
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});
$(".prev-btn").click(function () {
  $(".leadership-slider").slick("slickPrev");
});

$(".next-btn").click(function () {
  $(".leadership-slider").slick("slickNext");
});
$(".prev-btn").addClass("slick-disabled");
$(".leadership-slider").on("afterChange", function () {
  if ($(".slick-prev").hasClass("slick-disabled")) {
    $(".prev-btn").addClass("slick-disabled");
  } else {
    $(".prev-btn").removeClass("slick-disabled");
  }
  if ($(".slick-next").hasClass("slick-disabled")) {
    $(".next-btn").addClass("slick-disabled");
  } else {
    $(".next-btn").removeClass("slick-disabled");
  }
});


$(".guid-facts-slider").slick({
  dots: false,
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  // centerMode: true,
  // variableWidth: false,
  // autoplay: true,
  // autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
       
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
        arrows: false,        
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
        arrows: false,        
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      },
    },
  ],
});
$(".prev-btn").click(function () {
  $(".guid-facts-slider").slick("slickPrev");
});

$(".next-btn").click(function () {
  $(".guid-facts-slider").slick("slickNext");
});
$(".prev-btn").addClass("slick-disabled");
$(".guid-facts-slider").on("afterChange", function () {
  if ($(".slick-prev").hasClass("slick-disabled")) {
    $(".prev-btn").addClass("slick-disabled");
  } else {
    $(".prev-btn").removeClass("slick-disabled");
  }
  if ($(".slick-next").hasClass("slick-disabled")) {
    $(".next-btn").addClass("slick-disabled");
  } else {
    $(".next-btn").removeClass("slick-disabled");
  }
});


