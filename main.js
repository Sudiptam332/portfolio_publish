const scriptURL = 'https://script.google.com/macros/s/AKfycbwQk_s9MEqVnxDy8L9O0TD0rZH9-26r1NA_JtVSZjJn5KeN5nhSS5MPT5AikwEcs6eXGQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            form.reset()
            msg.innerHTML = "Message sent succesfully."
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
        })

    .catch(error => console.error('Error!', error.message))
})


let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slider img').length;

function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    manualSlide(currentSlide);
}

function manualSlide(slideIndex) {
    const translateX = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${translateX}%)`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    manualSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    manualSlide(currentSlide);
});

setInterval(autoSlide, 3000);


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const readMoreBtn = document.querySelector(".more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "More") {
        readMoreBtn.innerText = "Less";
    } else {
        readMoreBtn.innerText = "More";
    }
});

const moreWork1 = document.querySelector(".more-work1");
const moreWork2 = document.querySelector(".more-work2");
const moreWork3 = document.querySelector(".more-work3");
const moreBtn = document.querySelector(".more-Pbtn");

function otherWork(e) {
    moreWork1.style.display = "block";
    moreWork2.style.display = "block";
    moreWork3.style.display = "block";
    if (moreBtn.innerText === "More Projects") {
        moreBtn.innerText = "Show Less";
    } else {
        moreBtn.innerText = "More Projects";
        moreWork1.style.display = "none";
        moreWork2.style.display = "none";
        moreWork3.style.display = "none";
    }
}