var link = document.querySelector(".hotel-search");
var searchPopup = document.querySelector(".modal-search-form");
var form = searchPopup.querySelector("form");
var checkIn = searchPopup.querySelector("[name=check-in]");
var checkOut = searchPopup.querySelector("[name=check-out]");
var numberOfAdults = searchPopup.querySelector("[name=number-of-adults]");
var numberOfKids = searchPopup.querySelector("[name=number-of-kids]");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("modal-search-form");
});

form.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value || !numberOfAdults.value || !numberOfKids.value) {
        evt.preventDefault();
        searchPopup.classList.remove("modal-error");
        searchPopup.offsetWidth = searchPopup.offsetWidth;
        searchPopup.classList.add("modal-error");
        console.log("Заполните все поля формы");
    }            
});
