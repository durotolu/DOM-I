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
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let anchor = document.querySelectorAll('a');
anchor[0].textContent = 'Services';
anchor[1].innerText = 'Product';
anchor[2].innerText = 'Vision';
anchor[3].innerText = 'Features';
anchor[4].innerText = 'About';
anchor[5].innerText = 'Contact';

let button = document.querySelector('.cta-text button');
button.textContent = 'Get Started'

let domText = document.querySelector('.cta-text h1');
domText.innerText = 'DOM\nIS\nAWESOME';

let circle = document.querySelector('#cta-img');
circle.setAttribute('src', siteContent["cta"]["img-src"]);

let mainText = document.querySelectorAll('.main-content .text-content h4');
mainText[0].innerText = siteContent['main-content']['features-h4'];
mainText[1].innerText = siteContent['main-content']['about-h4'];
mainText[2].innerText = siteContent['main-content']['services-h4'];
mainText[3].innerText = siteContent['main-content']['product-h4'];
mainText[4].innerText = siteContent['main-content']['vision-h4'];

let paragraphText = document.querySelectorAll('.main-content .text-content p');
paragraphText[0].innerText = siteContent['main-content']['features-content'];
paragraphText[1].innerText = siteContent['main-content']['about-content'];
paragraphText[2].innerText = siteContent['main-content']['services-content'];
paragraphText[3].innerText = siteContent['main-content']['product-content'];
paragraphText[4].innerText = siteContent['main-content']['vision-content'];

let lastImage = document.querySelector('#middle-img');
lastImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let anchorLength = document.querySelectorAll('a').length;
for (let i=0; i<anchorLength; i++) {
  anchor[i].style.color = 'green';
}

let lastAnchor = document.createElement('a');
lastAnchor.textContent = 'Whatever';
lastAnchor.style.color = 'green';

let firstAnchor = document.createElement('a');
firstAnchor.textContent = 'You want';
firstAnchor.style.color = 'green';

let navigation = document.querySelector('nav');
navigation.appendChild(lastAnchor);
navigation.prepend(firstAnchor);