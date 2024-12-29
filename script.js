// about me interactive part
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// sidemenu (for small screen only)
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// form script
const scriptURL = 'https://script.google.com/macros/s/AKfycbySCPsK7IB93-YcloRQjhzMlS77IAmgRQYwaEh1jiM20-AMHpQHV-e1h0VgEJ1uQXSX/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully. Thank you!";
            console.log('Success!', response);
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// scrolling header bar thing 
window.addEventListener("scroll", function () {
    const headerBar = document.querySelector(".header-bar");
    if (window.scrollY > 50) {
        headerBar.classList.add("shrink");
    } else {
        headerBar.classList.remove("shrink");
    }
});

