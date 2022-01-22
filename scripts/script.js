var loginPage = document.querySelector(".login-active");
var loginDialog = document.querySelector(".login-dialog");
var signUpDialog = document.querySelector(".sign-up-dialog");
var modal = document.querySelector(".modal-active");
var profileSection = document.querySelector(".profile-section");
var aboutSection = document.querySelector(".about-section");
var helpPage = document.querySelector(".help-active");

var profileBtn = document.querySelector("#profile-btn");
var aboutBtn = document.querySelector("#about-btn");

function showDefaultPage() {
  loginPage.classList.add("close");
  modal.classList.add("close");
  helpPage.classList.add("close");
}
function showLoginPage() {
  loginPage.classList.toggle("close");
  loginDialog.classList.remove("close");
  signUpDialog.classList.add("close");
  modal.classList.add("close");
  helpPage.classList.add("close");
}
function showLoginDialog() {
  loginDialog.classList.remove("close");
  signUpDialog.classList.add("close");
}
function showSignUpDialog() {
  loginDialog.classList.add("close");
  signUpDialog.classList.remove("close");
}
function showModalPage() {
  loginPage.classList.add("close");
  aboutSection.classList.add("close");
  helpPage.classList.add("close");
  aboutBtn.classList.remove("bg-trans");
  modal.classList.toggle("close");
  profileBtn.classList.add("bg-trans");
  profileSection.classList.remove("close");
}
function showProfileSection() {
  profileBtn.classList.add("bg-trans");
  aboutBtn.classList.remove("bg-trans");
  profileSection.classList.remove("close");
  aboutSection.classList.add("close");
}
function showAboutSection() {
  profileBtn.classList.remove("bg-trans");
  aboutBtn.classList.add("bg-trans");
  profileSection.classList.add("close");
  aboutSection.classList.remove("close");
}
function showHelpPage() {
  loginPage.classList.add("close");
  modal.classList.add("close");
  helpPage.classList.toggle("close");
}
function closeModal() {
  modal.classList.add("close");
}
function helpClose() {
  helpPage.classList.add("close");
}
function loginClose() {
  loginPage.classList.add("close");
}
function reload() {
  console.log(document.querySelector(".heading input").value);
  document.querySelector(".heading input").value = "";
  document.querySelector(".content textarea").value = "";
}
