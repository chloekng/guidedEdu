
$(document).ready(function() {

  // make the grid
  if($('body').is('.homefeed')){

    var colcade = new Colcade( '.grid', {
      columns: '.grid-col',
      items: '.grid-item'
    });

      // add images to the pins

  let pins = document.getElementsByClassName("grid-item");

  let addImages = function(pins) {
    for (let i = 0; i < pins.length; i++) {
      let pin = pins[i];
      pin.style.backgroundImage = "url('assets/img/pin" + [i] + ".jpg')"; 
      pin.style.backgroundSize = "cover";
      pin.style.backgroundPosition = "center center";
    }

    
  }

  addImages(pins);


  // pointer animation
  let handSvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  $(".modal").append(handSvg);
  handSvg.setAttributeNS(null, 'width', 24);
  handSvg.setAttributeNS(null, 'height', 24);
  handSvg.setAttributeNS(null, 'viewBox', '0 0 24 24');
  handSvg.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7756 22.3904C13.7747 23.9776 9.24586 22.359 7.21871 18.7698C7.03957 18.5027 6.86043 18.2183 6.68757 17.9103C5.13186 15.1634 3.02771 13.7821 2.58771 13.581C2.14928 13.3783 0.595142 12.613 1.09957 11.6921C1.38086 11.1798 2.16343 10.8011 2.87843 10.7257C4.00043 10.4806 5.89714 11.0337 7.77186 12.2217L4.05386 3.41855C3.74114 2.67684 3.98943 1.85027 4.60857 1.37884C4.61171 1.37569 4.61643 1.37255 4.62114 1.36941C4.67614 1.32698 4.73428 1.28927 4.79557 1.25312C4.80971 1.24684 4.82071 1.23898 4.83486 1.23112C4.90086 1.19498 4.97 1.16041 5.04228 1.13212C5.04386 1.13055 5.04543 1.13055 5.04543 1.13055C5.04543 1.13055 5.04543 1.13055 5.047 1.12898C5.11928 1.10069 5.19314 1.07869 5.267 1.05984C5.28114 1.05669 5.29528 1.05355 5.30943 1.04884C5.38014 1.03469 5.44928 1.02055 5.51843 1.01269C5.52471 1.01269 5.52943 1.01112 5.53414 1.01112C6.31671 0.927837 7.093 1.34741 7.40571 2.08755L9.59157 7.26069C9.64343 6.62269 10.0551 6.03498 10.7089 5.77569C11.6329 5.40955 12.6889 5.83855 13.0691 6.73427C13.0707 6.74212 13.0739 6.75155 13.077 6.75941C13.143 6.13555 13.5516 5.56512 14.1911 5.31212C15.1167 4.94598 16.1727 5.37341 16.5514 6.27069C16.5671 6.30527 16.5781 6.34141 16.5907 6.37912C16.6803 5.78355 17.0794 5.24927 17.6954 5.00569C18.6194 4.63955 19.6189 4.96955 19.9991 5.86684L20.0007 5.87155C20.0007 5.87155 21.1149 8.03855 22.3657 11.6513C22.4129 11.7911 22.4569 11.931 22.4946 12.0724C24.0267 16.1613 21.9666 20.7278 17.7756 22.3904Z" fill="#111111"/>'
  handSvg.setAttribute("class","handSvg");
  $(".handSvg").css("position", "absolute");
  $(".handSvg").css("top", "20%");
  $(".handSvg").css("left", "60%");
  $(".handSvg").css("animation-name", "clicking");
  $(".handSvg").css("animation-duration", "1.5s");
  $(".handSvg").css("animation-iteration-count", "infinite");
  $(".handSvg").css("animation-direction", "alternate");


  //masonry animation

  $(".item-main").css("animation-name", "clicked");
  $(".item-main").css("animation-duration", "3s");
  $(".item-main").css("animation-iteration-count", "infinite");
  $(".item-main").css("animation-timing-function", "cubic-bezier(.63, .09, .3, .43");
  // $("#main").css("animation-direction", "alternate");


  //got it button
  $(".button").click(function() {

    // $(".masonry-bg").addClass("hide");
    // $(".masonry-bg").hide()

    $(".masonry-bg" ).slideUp(160);
    $(".masonry").hide(85);
    $(".handSvg").hide(85);
    $(".button").hide(0);
    $(".modal-text").hide(0);

    let modalCollapsed = document.createElement("div");
    modalCollapsed.className = "modal-collapsed";
  
    $(".modal").append(modalCollapsed);


    let modalTextCollapsed = document.createElement("div");
    modalTextCollapsed.className = "modal-text-collapsed";

    let modalTextCollapsedA = document.createElement("div");
    modalTextCollapsedA.innerHTML = "Click on an idea you like to learn more about it!";
    $(modalTextCollapsed).append(modalTextCollapsedA);
    $(modalCollapsed).append(modalTextCollapsed);
    $(modalTextCollapsedA).css("animation-name", "fade");
    $(modalTextCollapsedA).css("animation-duration", "6s");
    $(modalTextCollapsedA).css("animation-fill-mode", "both");
    $(modalTextCollapsedA).css("animation-direction", "alternate");
    $(modalTextCollapsedA).css("animation-iteration-count", "infinite");
    $(modalTextCollapsedA).css("position", "absolute");

    let modalTextCollapsedB = document.createElement("div");
    modalTextCollapsedB.innerHTML = "Check out tips for how to use Pinterest";
    $(modalTextCollapsed).append(modalTextCollapsedB);
    // $(modalTextCollapsedTips).hide(0);
    $(modalTextCollapsedB).css("position", "absolute");
    $(modalTextCollapsedB).css("animation-name", "fade");
    $(modalTextCollapsedB).css("animation-duration", "6s");
    $(modalTextCollapsedB).css("animation-fill-mode", "both");
    $(modalTextCollapsedB).css("animation-direction", "alternate-reverse");
    $(modalTextCollapsedB).css("animation-iteration-count", "infinite");


    let chevronSvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    $(modalCollapsed).append(chevronSvg);
    chevronSvg.setAttributeNS(null, 'width', 16);
    chevronSvg.setAttributeNS(null, 'height', 16);
    chevronSvg.setAttributeNS(null, 'viewBox', '0 0 16 16');
    chevronSvg.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M0.439333 9.47C0.146667 9.76 0 10.1393 0 10.518C0 10.8973 0.146667 11.2767 0.439333 11.566C1.02533 12.1447 1.97467 12.1447 2.56067 11.566L8 6.192L13.4393 11.566C14.0253 12.1447 14.9747 12.1447 15.5607 11.566C16.1467 10.9873 16.1467 10.048 15.5607 9.47L8 2L0.439333 9.47Z" fill="white"/>'
    chevronSvg.setAttribute("class","chevronSvg");
    // $(".chevronSvg").css("border", "1px solid tomato");
    // $(".chevronSvg").css("top", "20%");
    // $(".chevronSvg").css("left", "60%");

    // $(chevronSvg).click(function() {
    //   console.log("hi")
    // })
  


  });

  }





  // grid item to closeup
  $(".grid-item").click(function() {
    let image = $(this)[0].style.backgroundImage;

    localStorage.setItem("imageURL", image);

    window.location.href = "closeup.html";



  });

  // closeup 

  $(".closeupImage").css('background-image', localStorage.getItem('imageURL'));  

  // closeup back

  $(".back").click(function() {

    window.location.href = "index.html";


  });


  $(".navIcon").click(function() {

    window.location.href = "index.html";


  });

  





  



});