//  rating review 
  const starBoxes = document.querySelectorAll('.ratings-box__item');
  const RatingButtons = document.querySelectorAll('.rating-star-button');
  RatingButtons.forEach((e) => {
    e.addEventListener('click', () => {
      starBoxes.forEach((f) => {
        f.classList.remove('active');
      });
      e.closest('div').classList.add('active');
    })
  })

//  rating review  


// nav bar 
/**
* Template Name: UpConstruction
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

 /* Scroll top button  */
  
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }
});
// nav bar 
//  carddd start js 
  /*
  
    using 
      - an animated gif of sparkles.
      - an animated gradient as a holo effect.
      - color-dodge mix blend mode
    
  */
  var x;
  var $cards = $(".card");
  var $style = $(".hover");

  $cards
    .on("mousemove touchmove", function (e) {
      // normalise touch/mouse
      var pos = [e.offsetX, e.offsetY];
      e.preventDefault();
      if (e.type === "touchmove") {
        pos = [e.touches[0].clientX, e.touches[0].clientY];
      }
      var $card = $(this);
      // math for mouse position
      var l = pos[0];
      var t = pos[1];
      var h = $card.height();
      var w = $card.width();
      var px = Math.abs(Math.floor(100 / w * l) - 100);
      var py = Math.abs(Math.floor(100 / h * t) - 100);
      var pa = (50 - px) + (50 - py);
      // math for gradient / background positions
      var lp = (50 + (px - 50) / 1.5);
      var tp = (50 + (py - 50) / 1.5);
      var px_spark = (50 + (px - 50) / 7);
      var py_spark = (50 + (py - 50) / 7);
      var p_opc = 20 + (Math.abs(pa) * 1.5);
      var ty = ((tp - 50) / 2) * -1;
      var tx = ((lp - 50) / 1.5) * .5;
      // css to apply for active card
      var grad_pos = `background-position: ${lp}% ${tp}%;`
      var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
      var opc = `opacity: ${p_opc / 100};`
      var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
      // need to use a <style> tag for psuedo elements
      var style = `
    .card:hover:before { ${grad_pos} }  /* gradient */
    .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
  `
      // set / apply css class and style
      $cards.removeClass("active");
      $card.removeClass("animated");
      $card.attr("style", tf);
      $style.html(style);
      if (e.type === "touchmove") {
        return false;
      }
      clearTimeout(x);
    }).on("mouseout touchend touchcancel", function () {
      // remove css, apply custom animation on end
      var $card = $(this);
      $style.html("");
      $card.removeAttr("style");
      x = setTimeout(function () {
        $card.addClass("animated");
      }, 2500);
    });
    // map 
    