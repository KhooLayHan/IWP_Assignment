const generateRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const productImageDetails = {
    url: [
        "../Resource/Images/Placeholders/gallery-img1.jpg",
        "../Resource/Images/Placeholders/gallery-img2.jpg",
        "../Resource/Images/Placeholders/gallery-img3.jpg",
        "../Resource/Images/Placeholders/gallery-img4.jpg",
        "../Resource/Images/Placeholders/gallery-img5.jpg",
        "../Resource/Images/Placeholders/gallery-img6.jpg",
        "../Resource/Images/Placeholders/gallery-img7.jpg",
        "../Resource/Images/Placeholders/gallery-img8.jpg",
        "../Resource/Images/Placeholders/gallery-img9.jpg",
        "../Resource/Images/Placeholders/gallery-img10.jpg",
    ],
    name: [
        "Strike", "Classroom 1", "Classroom 2", "School", "Library", "Students 1", "Students 2"
    ],
    format: [
        "PNG", "JPEG", "TIFF", "SVG"
    ],
    size: [
        "1920x1080", "1280x720", "1080x1080"
    ],
    aspectRatio: [
        "1:1", "3:2", "5:4"
    ],
    license: [ 
        "MIT", "GPLv2", "Other", "Apache" // Licenses based on Github
    ],
    ratings: [
        "1", "2", "3", "4", "5"
    ],
    price: [
        "1.50", "5.00", "3.00", "10.00", "0.50"
    ]
};

function getImageValueAtIndex(values) { return values[generateRandomInt(0, values.length)]; }

function getRandomURL() {
    const url = Object.entries(productImageDetails)[0][1].find(getImageValueAtIndex) 
        ?? "../Resource/Images/Placeholders/gallery-img9.jpg";
    return url;
}

function getRandomName() {
    const name = Object.entries(productImageDetails)[1][1].find(getImageValueAtIndex)
        ?? "Students 2";
    return name;
}

function getRandomFormat() {
    const format = Object.entries(productImageDetails)[2][1].find(getImageValueAtIndex)
        ?? "SVG";
    return format;
}

function getRandomSize() {
    const size = Object.entries(productImageDetails)[3][1].find(getImageValueAtIndex)
        ?? "1080x1080";
    return size;
}

function getRandomAspectRatio() {
    const aspectRatio = Object.entries(productImageDetails)[4][1].find(getImageValueAtIndex) 
        ?? "5:4";
    return aspectRatio;
}

function getRandomLicense() {
    const license = Object.entries(productImageDetails)[5][1].find(getImageValueAtIndex) 
        ?? "Other";
    return license;
}

function getRandomRatings() {
    const ratings = Object.entries(productImageDetails)[6][1].find(getImageValueAtIndex) 
        ?? "1";
    return ratings;
}

function getRandomPrice() {
    const price = Object.entries(productImageDetails)[7][1].find(getImageValueAtIndex) 
        ?? "10.00";
    return price;
}

window.addEventListener("load", () => {
    localStorage.removeItem("p");
    localStorage.removeItem("img");
    
    const img = document.getElementById("product-image");
    const h1 = document.getElementById("product-name");
    const li = document.querySelectorAll("li");
    const span = document.getElementById("product-ratings");
    
    if (!img || !h1 || !li || !span) 
        console.log("Can't GET HTML p OR img values");
    
    img.src = getRandomURL(); 
    h1.textContent = getRandomName(); 
    span.textContent = getRandomRatings() + " STARS";

    li[0].textContent = "RM " + getRandomPrice();
    li[1].textContent = getRandomFormat();
    li[2].textContent = getRandomSize() + " px";
    li[3].textContent = getRandomAspectRatio();
    li[4].textContent = getRandomLicense();
    
    const button = document.querySelector("button[class='cart-button']");

    button.addEventListener("click", function Redirect() {
        localStorage.setItem(`form-${ h1.id }`, h1.textContent);
        localStorage.setItem(`form-${ img.id }`, img.src);
        localStorage.setItem(`form-${ span.id }`, span.textContent);
        
        for (let i = 0; i !== li.length; i++)
        {
            localStorage.setItem(`form-${ li[i].id }`, li[i].textContent);
        }
        
        window.location.href = "../KLH/shopping-cart-page.html";
    });
});


