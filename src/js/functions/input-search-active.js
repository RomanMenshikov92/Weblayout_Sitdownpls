/*** input-search-active ***/

/* header */
// если введено слово в input, то засвечиваем иконку
const inputSearch = document.getElementById("input-search");
const searchIcon = document.querySelector(".header__bottom-span-icon");

inputSearch.addEventListener("input", () => {
  if (inputSearch.value.trim()) {
    searchIcon.style.fill = "#a65cf0";
  } else {
    searchIcon.style.fill = "#999";
  }
});

/* contact-form */
// если введено слово в input, то засвечиваем input
const inputsInContacts = document.querySelectorAll(".contact-form__input");

inputsInContacts.forEach((inputContact) => {
  inputContact.addEventListener("input", () => {
    if (inputContact.value.trim()) {
      inputContact.style.borderColor = "#b8ec64";
      inputContact.style.backgroundColor = "#f6f6f6";
    } else {
      inputContact.style.borderColor = "transparent";
    }
  });
});
