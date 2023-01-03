const btnSearch = document.querySelector(".search-btn");
const productCartSideBar = document.querySelector(".product-cart-sidebar");
const message = document.querySelector(".message");
const addCart = document.querySelectorAll(".social .add-cart");

const btnAddToCart = document.querySelector(".btn-add-to-cart");
const searchInput = document.querySelector(".search-input");
const searchFormInputEl = document.querySelector(".seach-input");



btnSearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});
$(".menu-icon").click(function () {
  $(".menu ul").css("left", "0");
  $("#overlay").css("display", "block");
});
$(".close-menu-icon").click(function(){
  $(".menu-icon").css("left", "-350px");
  $("#overlay").css("display","none");
});
$(".shopping-cart").click(function () {
  $(".cart").css("right", "0");
  $("#overlay").css("display", "block");
});
$(".close-cart").click(function () {
  $(".cart").css("right", "-450px");
  $("#overlay").css("display", "none");
});
$("#overlay").click(function () {
  $(".cart").css("right", "-450px");
  $("#overlay").css("display", "none");
});
$("#navbarDropdown").click(function () {
  $(".dropdown-menu").slideToggle(300, "linear");
});

$(".dropdown-menu").mouseleave(function () {
  $(this).slideToggle(300, "linear");
});

$(".image-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
  responsive: [
    {
      breakpoint: 568,
      settings: {
        arrows: false,
      },
    },
  ],
});

