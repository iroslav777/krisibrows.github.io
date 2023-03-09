if (document.documentElement.clientWidth < 500) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
} else {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 150,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
};

function openfunction() {
  const myNav = document.getElementById("myNav");
  const openMenu = document.querySelector(".openMenu");
  
  myNav.classList.toggle("show");
  openMenu.classList.toggle("activeMenu");
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function validate() {
  let a = document.forms["maForms"]["name"].value;
if (a == "") {
  alert("Укажіть ваше ім'я");
  return false;
}
let b = document.forms["maForms"]["phone_number"].value;
if (b == "") {
  alert("Номер введено не вірно");
  return false;
}
}
$('.drop_arrow, .drop_arrow_two, .nav_link').click(function(e) {
  e.stopPropagation();
  var $list = $(this).siblings('.drop_list, .drop_list_two');
  var $arrow = $(this).hasClass('nav_link') ? $(this).next('.drop_arrow') : $(this);
  $list.toggle();
  $arrow.toggleClass('active');
});

$(document).on('click', function(e) {
  var $list = $('.drop_list, .drop_list_two');
  var $arrow = $('.drop_arrow, .drop_arrow_two, .nav_link');
  if (!$(e.target).closest($list).length && !$(e.target).is($arrow)) {
    $list.hide();
    $arrow.removeClass('active');
  }
});


