const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// *************** Updating nav ***************
// Adding 2 items to the nav
document.querySelector('nav').appendChild(createNavItem('How'));
document.querySelector('nav').appendChild(createNavItem('What'));

// Changing color and updating site content
const navigation = document.querySelectorAll("nav a");
for(i=0; i < navigation.length; i++){
  if(i < 6){
    navigation[i].textContent =  siteContent["nav"][`nav-item-${i+1}`];
  }
  navigation[i].style.color = "green";;
}

/* Another way using for each and index overload
navigation.forEach((item, index) =>{
  item.textContent =  siteContent["nav"][`nav-item-${index}`];
});
*/

// *************** Updating cta ***************
const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.getElementById("cta-img");

// Adding br to h1 using a function wrote bellow
ctaH1.textContent = siteContent["cta"]["h1"]
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// *************** Updating main-content ***************
const mainContentTopAndBottomH4 = document.querySelectorAll(".main-content .text-content h4");
const mainContentTopAndBottomP = document.querySelectorAll(".main-content .text-content p");

// converting object to array of its values
let mainContent = Object.values(siteContent["main-content"]);

// filtering just the headers
let mainContentH4 = mainContent.filter((item, index) =>{
  return index %2 == 0;
});

// filtering just the content
let mainContentP = mainContent.filter((item, index) =>{
  return index %2 != 0;
});

// Changing the content in the array of h4 to the filtered array of siteContent
mainContentTopAndBottomH4.forEach((item, index) =>{
  item.textContent = mainContentH4[index];
});

// Changing the content in the array of p to the filtered array of siteContent
mainContentTopAndBottomP.forEach((item, index) =>{
  item.textContent = mainContentP[index];
});

// Change Image
const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// *************** Updating contact ***************
const contactInfo = document.querySelectorAll(".contact h4, .contact p");
contactInfo[0].textContent = siteContent["contact"]["contact-h4"];
contactInfo[1].textContent = siteContent["contact"]["address"];
contactInfo[2].textContent = siteContent["contact"]["phone"];
contactInfo[3].textContent = siteContent["contact"]["email"];

// *************** Updating footer ***************
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

// Funnctions
function createNavItem(name){
  let a = document.createElement('a');
  a.textContent = name
  return a;
}

// *************** Stretch ***************
const styleButton = document.createElement('button');
styleButton.style.width = '100%';
styleButton.style.height = '40px';
let isDark = false;
styleButton.textContent = 'Click to go to dark mode';

styleButton.addEventListener("click", () => {
  if(isDark == false){
    styleButton.textContent = 'Click to go to light mode';
    document.querySelector('body').style.backgroundColor = 'dimgrey';
    document.querySelector('body').style.color = 'white';
    isDark = true;
  }
  else{
    styleButton.textContent = 'Click to go to dark mode';
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    isDark = false;
  }

});
document.querySelector(".contact").appendChild(styleButton);