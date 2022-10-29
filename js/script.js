let navbar = document.querySelector('.header .navbar');
let loginForm = document.querySelector('.login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};
document.querySelector('#login-btn-1').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};
document.querySelector('#login-btn-2').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};
document.querySelector('#login-btn-3').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};
document.querySelector('#login-btn-4').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};


document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}


// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


var index = 0;
var slides = document.querySelectorAll(".slides");
function changeSlide(){
  if(index<0){
    index = slides.length-1;
  }

  if(index>slides.length-1){
    index = 0;
  }

  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";

  }

  slides[index].style.display= "block";


  index++;

  setTimeout(changeSlide,2000);

}

changeSlide();

$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});


/*amenities*/

document.addEventListener("DOMContentLoaded", function () {
    const mySwiper2_wrapper = document.querySelector(".mySwiper2 .swiper-wrapper"),
    mySwiper_container = document.querySelector(".mySwiper"),
          clone = mySwiper2_wrapper.cloneNode(true);
    mySwiper_container.appendChild(clone);

    const swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 8,
    slidesPerView: mySwiper2_wrapper.childNodes.length,
    freeMode: true,
    watchSlidesProgress: true
    });
    const swiper2 = new Swiper(".mySwiper2", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    loopedSlides: mySwiper2_wrapper.childNodes.length,
    spaceBetween: 13,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    thumbs: {
        swiper: swiper
    }
    });
},false);

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  centeredSlides: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    500: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 1.5
    }
  }
});


let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // show one slide base on index number
  slides[slideIndex].style.display = "block";

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec






var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});


  $(document).ready(function() {
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });


  var gallery = document.querySelector('.gallery');
  var galleryItems = document.querySelectorAll('.gallery-item');
  var numOfItems = gallery.children.length;
  var itemWidth = 23; // percent: as set in css

  var featured = document.querySelector('.featured-item');

  var leftBtn = document.querySelector('.move-btn.left');
  var rightBtn = document.querySelector('.move-btn.right');
  var leftInterval;
  var rightInterval;

  var scrollRate = 0.2;
  var left;

  function selectItem(e) {
  	if (e.target.classList.contains('active')) return;

  	featured.style.backgroundImage = e.target.style.backgroundImage;

  	for (var i = 0; i < galleryItems.length; i++) {
  		if (galleryItems[i].classList.contains('active'))
  			galleryItems[i].classList.remove('active');
  	}

  	e.target.classList.add('active');
  }

  function galleryWrapLeft() {
  	var first = gallery.children[0];
  	gallery.removeChild(first);
  	gallery.style.left = -itemWidth + '%';
  	gallery.appendChild(first);
  	gallery.style.left = '0%';
  }

  function galleryWrapRight() {
  	var last = gallery.children[gallery.children.length - 1];
  	gallery.removeChild(last);
  	gallery.insertBefore(last, gallery.children[0]);
  	gallery.style.left = '-23%';
  }

  function moveLeft() {
  	left = left || 0;

  	leftInterval = setInterval(function() {
  		gallery.style.left = left + '%';

  		if (left > -itemWidth) {
  			left -= scrollRate;
  		} else {
  			left = 0;
  			galleryWrapLeft();
  		}
  	}, 1);
  }

  function moveRight() {
  	//Make sure there is element to the leftd
  	if (left > -itemWidth && left < 0) {
  		left = left  - itemWidth;

  		var last = gallery.children[gallery.children.length - 1];
  		gallery.removeChild(last);
  		gallery.style.left = left + '%';
  		gallery.insertBefore(last, gallery.children[0]);
  	}

  	left = left || 0;

  	leftInterval = setInterval(function() {
  		gallery.style.left = left + '%';

  		if (left < 0) {
  			left += scrollRate;
  		} else {
  			left = -itemWidth;
  			galleryWrapRight();
  		}
  	}, 1);
  }

  function stopMovement() {
  	clearInterval(leftInterval);
  	clearInterval(rightInterval);
  }

  leftBtn.addEventListener('mouseenter', moveLeft);
  leftBtn.addEventListener('mouseleave', stopMovement);
  rightBtn.addEventListener('mouseenter', moveRight);
  rightBtn.addEventListener('mouseleave', stopMovement);


  //Start this baby up
  (function init() {
  	var images = [
  		'images/9.jpeg',
  		'images/8.jpeg',
  		'images/7.jpeg',
  		'images/6.jpeg',
  		'images/5.jpeg',
  		'images/2.jpeg',
  		'images/1.jpeg'
  	];

  	//Set Initial Featured Image
  	featured.style.backgroundImage = 'url(' + images[0] + ')';

  	//Set Images for Gallery and Add Event Listeners
  	for (var i = 0; i < galleryItems.length; i++) {
  		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
  		galleryItems[i].addEventListener('click', selectItem);
  	}
  })();


  (function() {
    function validEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    }

    function validateHuman(honeypot) {
      if (honeypot) {
        console.log("Robot Detected!");
        return true;
      } else {
        console.log("Welcome Human!");
      }
    }
    function getFormData(form) {
      var elements = form.elements;

      var fields = Object.keys(elements).filter(function(k) {
            return (elements[k].name !== "honeypot");
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        formData[name] = element.value;
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "Sheet1"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      console.log(formData);
      return formData;
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      var form = event.target;
      var data = getFormData(form);
      if( data.email && !validEmail(data.email) ) {
        var invalidEmail = form.querySelector(".email-invalid");
        if (invalidEmail) {
          invalidEmail.style.display = "block";
          return false;
        }
      } else {
        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            var formElements = form.querySelector(".form-elements")
            if (formElements) {
              formElements.style.display = "none"; // hide form
            }
            var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
              thankYouMessage.style.display = "block";
            }
            return;
        };
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      }
    }

    function loaded() {
      console.log("Contact form submission handler loaded successfully.");
      var forms = document.querySelectorAll("form.login-form","loginform.login-form");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  })();
  function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    var forms = document.querySelectorAll(".form.login-form");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };

  $('.bg').scroll(function(){
    var x = $(this).scrollTop();
    console.log(parseInt(-x/10));
    $(this).css('background-position','0% '+parseInt(-x/10)+'px');
  });







var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});
