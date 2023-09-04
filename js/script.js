

// /**
//  * Toggle .header-scrolled class to #header when page is scrolled
//  */
// let selectHeader = select('#header')
// if (selectHeader) {
//   const headerScrolled = () => {
//     if (window.scrollY > 100) {
//       selectHeader.classList.add('header-scrolled')
//     } else {
//       selectHeader.classList.remove('header-scrolled')
//     }
//   }
//   window.addEventListener('load', headerScrolled)
//   onscroll(document, headerScrolled)
// }

// /**
//  * Mobile nav toggle
//  */
// on('click', '.mobile-nav-toggle', function(e) {
//   select('#navbar').classList.toggle('navbar-mobile')
//   this.classList.toggle('bi-list')
//   this.classList.toggle('bi-x')
// })

// /**
//  * Mobile nav dropdowns activate
//  */
// on('click', '.navbar .dropdown > a', function(e) {
//   if (select('#navbar').classList.contains('navbar-mobile')) {
//     e.preventDefault()
//     this.nextElementSibling.classList.toggle('dropdown-active')
//   }
// }, true)

/**
* Template Name: Gp
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  // let selectHeader = select('#header')
  // if (selectHeader) {
  //   const headerScrolled = () => {
  //     if (window.scrollY > 100) {
  //       selectHeader.classList.add('header-scrolled')
  //     } else {
  //       selectHeader.classList.remove('header-scrolled')
  //     }
  //   }
  //   window.addEventListener('load', headerScrolled)
  //   onscroll(document, headerScrolled)
  // }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader Remove
   */
  const RemovePreloader = () => {
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        if(document.getElementById("background-video"))
        {
          preloader.remove()

        }
        
      });
    }
  }
  RemovePreloader();

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true
    });
  });

  /**
   * Initiate Pure Counter 
   */
  // new PureCounter();

})()

/*
  cursor motion
*/
const CursorMotion = () => {
  let crsr = document.querySelector("#cursor");
  let crsr_blur = document.querySelector("#cursor-blur");
  document.addEventListener('mousemove', function (dets) {
    // crsr.style.display = "block";
    // crsr_blur.style.display = "block";

    crsr.style.left = dets.x - 5 + "px";
    crsr.style.top = dets.y + "px";
    crsr_blur.style.left = dets.x - 115 + "px";
    crsr_blur.style.top = dets.y - 115 + "px";

  })
}
CursorMotion();


gsap.to("#cursor", {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  scrollTrigger: {
    trigger: "#cursor",
    scroller: "body",
    start: "top -20%",
    end: "top -70%",
    scrub: 2
  }
})
gsap.to("#cursor-blur",{
  scrollTrigger:{
    trigger: "#cursor-blur",
    scroller : "body",
    start : "top -20%",
    end : "top -70%",
    scrub : 2
  }
})

/* 
  change background color on scroll
*/
gsap.to("#main", {
  backgroundColor: "#fff",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -20%",
    end: "top -70%",
    // markers:true
    scrub: 2
  }
})

gsap.to("#header", {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  scrollTrigger: {
    trigger: "#header",
    scroller: "body",
    start: "top -30%",
    scrub: 1
  }
})

// for h1 text

gsap.to("#main #page1 #heading-container #head-text-convert", {
  left : "-5vw",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -10%",
    end: "top -60%",
    // duration : "1",
    // markers:true,
    scrub: 2
  }
})
gsap.to("#main #page1 #heading-container #head-text-your", {
  right : "-5vw",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -10%",
    end: "top -60%",
    // duration : "1",
    // markers:true,
    scrub: 2
  }
})
gsap.to("#main #page1 #head-text-pdf-to", {
  color:"#fff0",
  fontSize:"20px",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -20%",
    end: "top -50%",
    // delay : "1s",
    // markers:true,
    scrub: 2
  }
})

// typed animation
const TypeAnimation = () => {
  let typed = new Typed(".auto-type", {
    strings: ["AUDIO", "JPEG", "DOCX" , "LONG IMAGE" ,"JPG"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
  })
}

TypeAnimation();


// const init = () =>{
//   gsap.registerPlugin(ScrollTrigger);
// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
// }

// init();
