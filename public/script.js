
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar){
    bar.addEventListener("click",()=>{
      nav.classList.add('show');
    })
}

if (close){
  close.addEventListener("click",()=>{
    nav.classList.remove('show');
  })
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1;}
  slides1[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 3000); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let j;
  let slides2 = document.getElementsByClassName("mySlides2");
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1;}
  slides2[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let k;
  let slides3 = document.getElementsByClassName("mySlides3");
  for (k = 0; k < slides3.length; k++) {
    slides3[k].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1;}
  slides3[slideIndex3-1].style.display = "block";
  setTimeout(showSlides3, 3000); // Change image every 2 seconds
}
