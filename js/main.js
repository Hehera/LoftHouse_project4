const navBtn = document.querySelector(".nav-icon-btn");
const iconNav = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
  iconNav.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

/**Phone Mask */

mask("[data-tel-input]");

const phoneInputs = document.querySelectorAll("[data-tel-input] ");

phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});
//popup
// const popupLinks = document.querySelector(".popupLinks");
// const body = document.querySelector("body");
// const lockPadding = document.querySelector("body");

// let unlock = true;

// const timeout = 800;

// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLink = popupLinks[index];

//     popupLink.addEventListener("click", function (e) {
//       const popupName = popupLink.getAttribute("href").replace("#", "");
//       const curentPopup = document.getElementById("popupName");
//       popupOpen(curentPopup);
//       e.preventDefault();
//     });
//   }
// }

// const popupCloseIcon = document.querySelector(".close-popup");

// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener("click", function (e) {
//       popupClose(el.closest(".popup"));
//       e.preventDefault();
//     });
//   }
// }

// function popupOpen(curentPopup) {
//   if (curentPopup && unlock) {
//     const popupActive = document.querySelector(".popup.open");
//     if (popupActive) {
//       popupClose(popupActive, false);
//     } else {
//       bodylock();
//     }
//     curentPopup.classList.add("open");
//     curentPopup.addEventListener("click", function (e) {
//       if (!e.target.closest(".popup__content")) {
//         popupClose(e.target.closest(".popup"));
//       }
//     });
//   }
// }

