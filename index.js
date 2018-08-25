//when i click a link the show class shold added to that link
let home = document.querySelector(".home");
let about = document.querySelector(".about-us");
let contact = document.querySelector(".contact-us");
let faq = document.querySelector(".faq");

let changeDisplayHome = () => {
  Show(home);
  Hide(about, contact, faq);
  home.className = "home";
};
let changeDisplayAbout = () => {
  Show(about);
  Hide(home, contact, faq);
};
let changeDisplayContact = () => {
  Show(contact);
  Hide(about, home, faq);
};
let changeDisplayFaq = () => {
  Show(faq);
  Hide(about, contact, home);
};

let Show = class1 => {
  class1.className = "show";
};

let Hide = (class2, class3, class4) => {
  class2.className = "hide";
  class3.className = "hide";
  class4.className = "hide";
};
