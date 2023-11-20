const alloTextContainer = document.querySelector(".alloTextContainer");
const alloImgContainer = document.querySelector(".alloImgContainer");
const authorName = document.querySelector(".name");
const authorUnder = document.querySelector(".under");
const jobTitleContainerLight = document.querySelector(".jobTitleContainer.light");
const jobTitleContainerDark = document.querySelector(".jobTitleContainer.dark");
const jobTitle = document.querySelector(".jobTitle");
const jobTitle2 = document.querySelector(".jobTitle2");
const projectTitle = document.querySelector(".projectTitle");
const phones = document.querySelectorAll(".phone");
const laptop = document.querySelector(".laptop");
const phone2 = document.querySelector(".phone2");
const projectDescriptions = document.querySelectorAll(".projectDescription");

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  let isResponsive = window.innerWidth <= 1024; // Define your responsive width

  if (!isResponsive) {
    alloTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`;
    alloImgContainer.style.transform = `translate(${-offsetY * 0.4}px, ${offsetY * 0.7}px)`;
    authorName.style.transform = `translateX(${offsetY * 0.2}px)`;
    authorUnder.style.transform = `translateX(${-offsetY * 0.1}px)`;
    jobTitleContainerLight.style.backgroundPositionY = `${offsetY * 0.5}px`;
    jobTitleContainerDark.style.backgroundPositionY = `${-offsetY * 0.5}px`;
    jobTitle.style.transform = `translateX(calc(200vh - ${offsetY}px))`;
    jobTitle2.style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
    projectTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`;
    phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`;
    laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`;
    phones[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`;
    phone2.style.transform = `translateX(calc(750vh - ${offsetY}px))`;

    // Parallax effect for project descriptions
    projectDescriptions.forEach((description) => {
      description.style.transform = `translateY(${offsetY * 0.1}px)`;
    });
  } else {
    // Reset styles in responsive mode
    alloTextContainer.style.transform = "";
    alloImgContainer.style.transform = "";
    authorName.style.transform = "";
    authorUnder.style.transform = "";
    jobTitleContainerLight.style.backgroundPositionY = "";
    jobTitleContainerDark.style.backgroundPositionY = "";
    jobTitle.style.transform = "";
    jobTitle2.style.transform = "";
    projectTitle.style.transform = "";
    phones[0].style.transform = "";
    laptop.style.transform = "";
    phones[1].style.transform = "";
    phone2.style.transform = "";

    // Reset parallax effect for project descriptions
    projectDescriptions.forEach((description) => {
      description.style.transform = "";
    });
  }
});