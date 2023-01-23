
// ======================== Skill Progrss =================

window.addEventListener('focusin', () => {
    var element = document.querySelectorAll(".progress-in");
    var count = document.querySelectorAll(".skill-percent");
    var val = [80, 93, 70, 60, 50, 50, 50, 40];
    var width = 1;
    var id = setInterval(scane, 100);
    function scane() {
        for (var i = 0; i < element.length; i++) {
            if (width <= val[i]) {
                width++;
                element[i].style.width = width + '%';
                count[i].innerHTML = ++width + '%';
            }
        }
    }
})

// ======================== Aside Section=================

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"), totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");

    a.addEventListener("click", function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".about-me").addEventListener("click", function () {
    showSection(this);
    updateNav(this);
})
document.querySelector(".hireing-me").addEventListener("click", function () {
    showSection(this);
    updateNav(this);
})


const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// ======================== typing animation=================

var typed = new Typed(".typing", {
    strings: ["", "Student", "Web Developer", "Social Worker"],
    typeSpeed: 150,
    BackSpeed: 60,
    loop: true,
});