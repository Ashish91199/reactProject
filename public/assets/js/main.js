(function ($) {
"user strict";

//preloder
$(window).on('load', function() {
  $("#preloader").delay(1500).animate({
    "opacity": "0"
  }, 1500, function () {
      $("#preloader").css("display", "none");
  });
});

//Create Background Image
(function background() {
  let img = $('.bg_img');
  img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
  });
})();

// nice-select
$("select").niceSelect(),

// lightcase
 $(window).on('load', function () {
  $("a[data-rel^=lightcase]").lightcase();
})


// header-fixed
var fixed_top = $(".header-section");
$(window).on("scroll", function(){
    if( $(window).scrollTop() > 100){  
        fixed_top.addClass("animated fadeInDown header-fixed");
    }
    else{
        fixed_top.removeClass("animated fadeInDown header-fixed");
    }
});

// navbar-click
$(".navbar li a").on("click", function () {
  var element = $(this).parent("li");
  if (element.hasClass("show")) {
    element.removeClass("show");
    element.children("ul").slideUp(500);
  }
  else {
    element.siblings("li").removeClass('show');
    element.addClass("show");
    element.siblings("li").find("ul").slideUp(500);
    element.children('ul').slideDown(500);
  }
});

// scroll-to-top
// window.addEventListener('scroll', e => {
//   var el = document.getElementById('jsScroll');
//   if(window.scrollY > 200) {
//     el.classList.add('visible');
//   } else {
//     el.classList.remove('visible');
//   }
// });


//Odometer
if ($(".counter").length) {
  $(".counter").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
}



//toggle passwoard

$(document).ready(function() {
  $(".show_hide_password a").on('click', function(event) {
      event.preventDefault();
      if($('.show_hide_password input').attr("type") == "text"){
          $('.show_hide_password input').attr('type', 'password');
          $('.show_hide_password i').addClass( "fa-eye-slash" );
          $('.show_hide_password i').removeClass( "fa-eye" );
      }else if($('.show_hide_password input').attr("type") == "password"){
          $('.show_hide_password input').attr('type', 'text');
          $('.show_hide_password i').removeClass( "fa-eye-slash" );
          $('.show_hide_password i').addClass( "fa-eye" );
      }
  });
});
$(document).ready(function() {
  $(".show_hide_password-2 a").on('click', function(event) {
      event.preventDefault();
      if($('.show_hide_password-2 input').attr("type") == "text"){
          $('.show_hide_password-2 input').attr('type', 'password');
          $('.show_hide_password-2 i').addClass( "fa-eye-slash" );
          $('.show_hide_password-2 i').removeClass( "fa-eye" );
      }else if($('.show_hide_password-2 input').attr("type") == "password"){
          $('.show_hide_password-2 input').attr('type', 'text');
          $('.show_hide_password-2 i').removeClass( "fa-eye-slash" );
          $('.show_hide_password-2 i').addClass( "fa-eye" );
      }
  });
});
$(document).ready(function() {
  $(".show_hide_password-3 a").on('click', function(event) {
      event.preventDefault();
      if($('.show_hide_password-3 input').attr("type") == "text"){
          $('.show_hide_password-3 input').attr('type', 'password');
          $('.show_hide_password-3 i').addClass( "fa-eye-slash" );
          $('.show_hide_password-3 i').removeClass( "fa-eye" );
      }else if($('.show_hide_password-3 input').attr("type") == "password"){
          $('.show_hide_password-3 input').attr('type', 'text');
          $('.show_hide_password-3 i').removeClass( "fa-eye-slash" );
          $('.show_hide_password-3 i').addClass( "fa-eye" );
      }
  });
});


// faq
$('.faq-wrapper .faq-title').on('click', function (e) {
  var element = $(this).parent('.faq-item');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('.faq-content').removeClass('open');
    element.find('.faq-content').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('.faq-content').slideDown(300, "swing");
    element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
    element.siblings('.faq-item').removeClass('open');
    element.siblings('.faq-item').find('.faq-title').removeClass('open');
    element.siblings('.taq-item').find('.faq-content').slideUp(300, "swing");
  }
});

// slider
var swiper = new Swiper(".brand-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    speed: 1000,
    delay: 3000,
  },
  speed: 1000,
  breakpoints: {
    1199: {
    slidesPerView: 5,
    },
    991: {
    slidesPerView: 4,
    },
    767: {
    slidesPerView: 3,
    },
    575: {
    slidesPerView: 2,
    },
  }
});

var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    speed: 1000,
    delay: 3000,
  },
  speed: 1000,
  breakpoints: {
    1199: {
    slidesPerView: 1,
    },
    991: {
    slidesPerView: 1,
    },
    767: {
    slidesPerView: 1,
    },
    575: {
    slidesPerView: 1,
    },
  }
});

$(document).ready(function () {
  var AFFIX_TOP_LIMIT = 300;
  var AFFIX_OFFSET = 110;

  var $menu = $("#menu"),
  $btn = $("#menu-toggle");

  $("#menu-toggle").on("click", function () {
      $menu.toggleClass("open");
      return false;
  });


  $(".docs-nav").each(function () {
      var $affixNav = $(this),
    $container = $affixNav.parent(),
    affixNavfixed = false,
    originalClassName = this.className,
    current = null,
    $links = $affixNav.find("a");

      function getClosestHeader(top) {
          var last = $links.first();

          if (top < AFFIX_TOP_LIMIT) {
              return last;
          }

          for (var i = 0; i < $links.length; i++) {
              var $link = $links.eq(i),
        href = $link.attr("href");

              if (href.charAt(0) === "#" && href.length > 1) {
                  var $anchor = $(href).first();

                  if ($anchor.length > 0) {
                      var offset = $anchor.offset();

                      if (top < offset.top - AFFIX_OFFSET) {
                          return last;
                      }

                      last = $link;
                  }
              }
          }
          return last;
      }


      $(window).on("scroll", function (evt) {
          var top = window.scrollY,
        height = $affixNav.outerHeight(),
        max_bottom = $container.offset().top + $container.outerHeight(),
        bottom = top + height + AFFIX_OFFSET;

          if (affixNavfixed) {
              if (top <= AFFIX_TOP_LIMIT) {
                  $affixNav.removeClass("fixed");
                  $affixNav.css("top", 0);
                  affixNavfixed = false;
              } else if (bottom > max_bottom) {
                  $affixNav.css("top", (max_bottom - height) - top);
              } else {
                  $affixNav.css("top", AFFIX_OFFSET);
              }
          } else if (top > AFFIX_TOP_LIMIT) {
              $affixNav.addClass("fixed");
              affixNavfixed = true;
          }

          var $current = getClosestHeader(top);

          if (current !== $current) {
              $affixNav.find(".active").removeClass("active");
              $current.addClass("active");
              current = $current;
          }
      });
  });
});

// sidebar
$(".sidebar-menu-item > a").on("click", function () {
  var element = $(this).parent("li");
  if (element.hasClass("active")) {
    element.removeClass("active");
    element.children("ul").slideUp(500);
  }
  else {
    element.siblings("li").removeClass('active');
    element.addClass("active");
    element.siblings("li").find("ul").slideUp(500);
    element.children('ul').slideDown(500);
  }
});

// active menu JS
function splitSlash(data) {
  return data.split('/').pop();
}
function splitQuestion(data) {
  return data.split('?').shift().trim();
}
var pageNavLis = $('.sidebar-menu a');
var dividePath = splitSlash(window.location.href);
var divideGetData = splitQuestion(dividePath);
var currentPageUrl = divideGetData;

// find current sidevar element
$.each(pageNavLis,function(index,item){
    var anchoreTag = $(item);
    var anchoreTagHref = $(item).attr('href');
    var index = anchoreTagHref.indexOf('/');
    var getUri = "";
    if(index != -1) {
      // split with /
      getUri = splitSlash(anchoreTagHref);
      getUri = splitQuestion(getUri);
    }else {
      getUri = splitQuestion(anchoreTagHref);
    }
    if(getUri == currentPageUrl) {
      var thisElementParent = anchoreTag.parents('.sidebar-menu-item');
      (anchoreTag.hasClass('nav-link') == true) ? anchoreTag.addClass('active') : thisElementParent.addClass('active');
      (anchoreTag.parents('.sidebar-dropdown')) ? anchoreTag.parents('.sidebar-dropdown').addClass('active') : '';
      (thisElementParent.find('.sidebar-submenu')) ? thisElementParent.find('.sidebar-submenu').slideDown("slow") : '';
      return false;
    }
});

//sidebar Menu
$(document).on('click', '.sidebar-menu-bar', function () {
  $('.sidebar').toggleClass('active');
  $('.navbar-wrapper').toggleClass('active');
  $('.body-wrapper').toggleClass('active');
});

// dashboard-list
$('.dashboard-list-item').on('click', function (e) {
  var element = $(this).parent('.dashboard-list-item-wrapper');
  if (element.hasClass('show')) {
    element.removeClass('show');
    element.find('.preview-list-wrapper').removeClass('show');
    element.find('.preview-list-wrapper').slideUp(300, "swing");
  } else {
    element.addClass('show');
    element.children('.preview-list-wrapper').slideDown(300, "swing");
    element.siblings('.dashboard-list-item-wrapper').children('.preview-list-wrapper').slideUp(300, "swing");
    element.siblings('.dashboard-list-item-wrapper').removeClass('show');
    element.siblings('.dashboard-list-item-wrapper').find('.dashboard-list-item').removeClass('show');
    element.siblings('.dashboard-list-item-wrapper').find('.preview-list-wrapper').slideUp(300, "swing");
  }
});

// invoice-form
$('.invoice-form').on('click', '.add-row-btn', function() {
  $('.add-row-btn').closest('.invoice-form').find('.add-row-wrapper').last().clone().show().appendTo('.results');
});

$(document).on('click','.invoice-cross-btn', function (e) {
e.preventDefault();
$(this).parent().parent().hide(300);
});

//pdf
$('.pdf').on('click', function (e) {
  e.preventDefault();
  $('.pdf-area').addClass('active');
  $('.body-overlay').addClass('active');
});
$('#body-overlay, #pdf-area').on('click', function (e) {
  e.preventDefault();
  $('.pdf-area').removeClass('active');
  $('.body-overlay').removeClass('active');
})

//sidebar Menu
$(document).on('click', '.notification-icon', function () {
  $('.notification-wrapper').toggleClass('active');
});

//Profile Upload
function proPicURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          var preview = $(input).parents('.preview-thumb').find('.profilePicPreview');
          $(preview).css('background-image', 'url(' + e.target.result + ')');
          $(preview).addClass('has-image');
          $(preview).hide();
          $(preview).fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$(".profilePicUpload").on('change', function () {
  proPicURL(this);
});

$(".remove-image").on('click', function () {
  $(".profilePicPreview").css('background-image', 'none');
  $(".profilePicPreview").removeClass('has-image');
});


//info-btn
$(document).on('click', '.info-btn', function () {
  $('.support-profile-wrapper').addClass('active');
});
$(document).on('click', '.chat-cross-btn', function () {
  $('.support-profile-wrapper').removeClass('active');
});


$(document).on("click",".card-custom",function(){
  $(this).toggleClass("active");
});

//acoount-toggle
$('.header-account-btn').on('click', function (e) {
  e.preventDefault();
  $('.account').addClass('active');
  $('.body-overlay').addClass('active');
});
$('#body-overlay').on('click', function (e) {
  e.preventDefault();
  $('.account').removeClass('active');
  $('.body-overlay').removeClass('active');
});
$('.account-cross-btn').on('click', function (e) {
  e.preventDefault();
  $('.account').removeClass('active');
  $('.body-overlay').removeClass('active');
});
$('.remove-account').on('click', function (e) {
  e.preventDefault();
  $(this).parent().parent().hide(300);
});
$('.account-control-btn').on('click', function () {
  $('.account-wrapper').toggleClass('change-form');
})


$(".buy-btn").click(function(){
  $("#sell").addClass("d-none");
  $("#buy").removeClass("d-none");
  $(this).addClass("active");
  $(".sell-btn").removeClass("active");
});
$(".sell-btn").click(function(){
  $("#sell").removeClass("d-none");
  $("#buy").addClass("d-none");
  $(this).addClass("active");
  $(".buy-btn").removeClass("active");
});
  





})(jQuery);


