// app logic
const hamburgerBtn = document.querySelector('.hamburgerBtn');
const hamburgerTopBar = document.querySelector(".hamburgerBtn__hamburgerBar--top");
const hamburgerMiddleBar = document.querySelector(".hamburgerBtn__hamburgerBar--middle");
const hamburgerBottomBar = document.querySelector(".hamburgerBtn__hamburgerBar--bottom");
const hamburgerMenu = document.querySelector('.navList');
const navItems = document.querySelectorAll('.navItem');
const navItem1 = document.querySelector('.navItem1');
const navItem2 = document.querySelector('.navItem2');
const navItem3 = document.querySelector('.navItem3');
const navItem4 = document.querySelector('.navItem4');
const profilePhoto = document.querySelector('.profilePhoto');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbarSection');
const navFrame = document.querySelector('.navFrame');
const footer = document.querySelector('.footer');
const hero = document.querySelector('.heroSection');
let footerHeight = footer.offsetHeight;
// hero.style.minHeight = `${window.innerHeight - footerHeight}px`;
console.log(`${window.innerHeight - footerHeight}px`);
let height = navbar.offsetHeight;
navFrame.style.height = `${height}px`;
visualViewport.addEventListener("resize", () => {
  height = navbar.offsetHeight;
  navFrame.style.height = `${height}px`;
  console.log(`navbar height = ${navbar.offsetHeight}`);
  console.log(`navFrame height = ${navFrame.offsetHeight}`);
});
window.addEventListener('resize', function(){
  footerHeight = footer.offsetHeight;
  // hero.style.minHeight = `${window.innerHeight - footerHeight}px`;
});
hamburgerBtn.addEventListener('click', () => {
  console.log(`navbar offsetHeight = ${navbar.offsetHeight}`);
  navFrame.style.height = `${height}px`;
  console.log(`navFrame offsetHeight = ${navFrame.offsetHeight}`);
  if (!hamburgerTopBar.classList.contains('hamburgerBtn__hamburgerBar--right')) {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 200);
  } else {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
    if(window.scrollY < 200 && !hamburgerMenu.classList.contains('navList--displayNone')){
      // footer.style.position = "fixed";
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
    }
  }
  if(hamburgerMenu.classList.contains('navList--displayNone')) {
    hamburgerMenu.classList.remove('navList--displayNone');
    hamburgerMenu.classList.add('navList--display');
    for(let item of navItems) {
      item.style.opacity = "0";
    }
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--navListMoveOut');
      hamburgerMenu.classList.add('navList--navListMoveIn');
      for(let item of navItems) {
        item.classList.remove('navItem--moveOut');
        item.classList.add('navItem--moveIn');
      }
      navItem1.style.animationDelay = '.70s';
      navItem2.style.animationDelay = '.80s';
      navItem3.style.animationDelay = '.90s';
      navItem4.style.animationDelay = '1.00s';
    }, 20);
  } else {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 2000);
  }  
});
window.onscroll = () => {
  setTimeout(() => {
    if(window.scrollY > 200) 
    {  
      // footer.style.position = "static";
      navbar.style.visibility = "visible";
      navbar.style.opacity = "1";
      navbar.classList.add('navbar--background');
    }
    else if(window.scrollY < 200 && hamburgerMenu.classList.contains('navList--displayNone'))
    {
      // footer.style.position = "fixed";
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
      termsAndConditions.classList.add('termsAndConditions-displayNone');
      legalOpenIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.add('openAndCloseIcons__icon--displayNone');
    }
  }, 500);
}
for(let item of navItems) {
  item.addEventListener('click', () => {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 1200);
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
    setTimeout(() => {
      if(window.scrollY < 200 ){
        // footer.style.position = "fixed";
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
        navbar.classList.remove('navbar--background');
      }
    }, 800);
  });
}
///////////////////////////////////////////////////////////////////////////////////
// slider logic
///////////////////////////////////////////////////////////////////////////////////
const leftArr = document.querySelector(".leftArr");
const rightArr = document.querySelector(".rightArr");
const index = document.querySelectorAll(".slider__index");
const slides = document.querySelectorAll(".slider__figure");
let counter = 0;
rightArr.addEventListener('click', function() {
  moveSlidesToLeft();
  setTimeout(function(){
    indexLogicRight();
  }, 1000);
});
leftArr.addEventListener('click', function() {
  moveSlidesToRight();
  setTimeout(function(){
    indexLogicLeft();
  }, 1000);
});
// move index to right 
function indexLogicRight() {
  if(counter === 22) {
    counter = 0;
    index[0].style.backgroundColor = '#f5aa15';
    index[index.length - 1].style.backgroundColor = '#011338';
  } else {
    index[counter].style.backgroundColor = '#011338'; // oxford-blue
    index[counter + 1].style.backgroundColor = '#f5aa15'; // harvest-gold
    counter++;
  };
};
//move index to left
function indexLogicLeft() {
  if(counter === 0) {
    counter = index.length -1;
    index[index.length - 1].style.backgroundColor = '#f5aa15';
    index[0].style.backgroundColor = '#011338';
  } else {
    index[counter].style.backgroundColor = '#011338'; // oxford-blue
    index[counter - 1].style.backgroundColor = '#f5aa15'; // harvest-gold
    counter--;
  };
};
// move slides to left
function moveSlidesToLeft() {
  if(counter === 22) {
    slides[counter].style.opacity = "0";
    setTimeout(function(){
      slides[counter].classList.toggle("slider__displayNone");
      slides[counter].classList.toggle("slider__displayBlock");
    }, 700);
    setTimeout(function(){
      slides[0].style.opacity = "0";
      slides[0].classList.toggle("slider__displayNone");
      slides[0].classList.toggle("slider__displayBlock");
    }, 800);
    setTimeout(() => {
      slides[0].style.opacity = "1";
    }, 850);
  } else {
    slides[counter].style.opacity = "0";
    setTimeout(function(){
      slides[counter].classList.toggle("slider__displayNone");
      slides[counter].classList.toggle("slider__displayBlock");
    }, 700);
    setTimeout(function(){
      slides[counter + 1].style.opacity = "0";
      slides[counter + 1].classList.toggle("slider__displayNone");
      slides[counter + 1].classList.toggle("slider__displayBlock");
    }, 800);
    setTimeout(() => {
      slides[counter + 1].style.opacity = "1";
    }, 850);
  }
};
// move slides to right
function moveSlidesToRight() {
  if(counter === 0) {
    slides[counter].style.opacity = "0";
    setTimeout(function(){
      slides[counter].classList.toggle("slider__displayNone");
      slides[counter].classList.toggle("slider__displayBlock");
    }, 700);
    setTimeout(function(){
      slides[slides.length - 1].style.opacity = "0";
      slides[slides.length - 1].classList.toggle("slider__displayNone");
      slides[slides.length - 1].classList.toggle("slider__displayBlock");
    }, 800);
    setTimeout(() => {
      slides[slides.length - 1].style.opacity = "1";
    }, 850);
  } else {
    slides[counter].style.opacity = "0";
    setTimeout(function(){
      slides[counter].classList.toggle("slider__displayNone");
      slides[counter].classList.toggle("slider__displayBlock");
    }, 700);
    setTimeout(function(){
      slides[counter - 1].style.opacity = "0";
      slides[counter - 1].classList.toggle("slider__displayNone");
      slides[counter - 1].classList.toggle("slider__displayBlock");
    }, 800);
    setTimeout(() => {
      slides[counter - 1].style.opacity = "1";
    }, 850);
  }
}
///////////////////////////////////////////////////////////////////////////////////
// legal Age btn logic
///////////////////////////////////////////////////////////////////////////////////
// legalAgePage.style.opacity = "1";
// legalAgePage.style.visibility = "visible";
document.body.style.overflow = "hidden";
// legalAgePage.style.display = "flex";
const legalAgeBtn = document.querySelector(".legalAge__btn");
const legalAgePage = document.querySelector(".legalAge");
legalAgeBtn.addEventListener('click', function(){
  legalAgePage.style.opacity = "0";
  legalAgePage.style.visibility = "hidden";
  document.body.style.overflow = "visible";
  setTimeout(() => {
    legalAgePage.style.display = "none";
  }, 2000);
});
setTimeout(() => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}, 3000);

// if(counter === 4) {
  //   slides[counter].classList.remove("slider__animateAddSlideFromRight");
  //   slides[counter].classList.add("slider__animateRemoveSlideToLeft");
  //   setTimeout(function(){
  //     slides[counter].classList.remove("slider__displayBlock");
  //     slides[counter].classList.add("slider__displayNone");
  //   }, 400)
  //   setTimeout(function(){
  //     slides[0].classList.remove("slider__displayNone");
  //     slides[0].classList.add("slider__displayBlock");
  //     slides[0].classList.add("slider__animateAddSlideFromRight");
  //   }, 500)
  // } else {
  //   slides[counter].classList.add("slider__animateRemoveSlideToLeft");
  //   setTimeout(function(){
  //     slides[counter].classList.remove("slider__displayBlock");
  //     slides[counter].classList.add("slider__displayNone");
  //   }, 300)
  //   setTimeout(function(){
  //     slides[counter + 1].classList.remove("slider__displayNone");
  //     slides[counter + 1].classList.add("slider__displayBlock");
  //     slides[counter + 1].classList.add("slider__animateAddSlideFromRight");
  //   }, 350)
  // }

  // if(counter === 0) {
  //   slides[counter].classList.remove("slider__animateAddSlideFromLeft");
  //   slides[counter].classList.add("slider__animateRemoveSlideToRight");
  //   setTimeout(function(){
  //     slides[counter].classList.remove("slider__displayBlock");
  //     slides[counter].classList.add("slider__displayNone");
  //   }, 400)
  //   setTimeout(function(){
  //     slides[0].classList.remove("slider__displayNone");
  //     slides[0].classList.add("slider__displayBlock");
  //     slides[0].classList.add("slider__animateAddSlideFromLeft");
  //   }, 500)
  // } else {
  //   slides[counter].classList.remove("slider__animateAddSlideFromRight");
  //   slides[counter].classList.remove("slider__animateRemoveSlideToLeft");
  //   slides[counter].classList.add("slider__animateRemoveSlideToRight");
  //   setTimeout(function(){
  //     slides[counter].classList.remove("slider__displayBlock");
  //     slides[counter].classList.add("slider__displayNone");
  //   }, 300)
  //   setTimeout(function(){
  //     slides[counter - 1].classList.remove("slider__displayNone");
  //     slides[counter - 1].classList.add("slider__displayBlock");
  //     slides[counter - 1].classList.remove("slider__animateAddSlideFromRight");
  //     slides[counter - 1].classList.add("slider__animateAddSlideFromLeft");
  //   }, 350)
  // }