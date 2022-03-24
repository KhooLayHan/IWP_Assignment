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
        "1920x1080 px", "1280x720 px", "1080x1080 px"
    ],
    aspectRatio: [
        "1:1", "3:2", "5:4"
    ],
    license: [ 
        "MIT", "GPLv2", "Other", "Apache" // Licenses based on Github
    ]
};

function getImageValueAtIndex(values) { return values[generateRandomInt(0, values.length)]; }

function generateRandomImageDetails() {
    const url = Object.entries(productImageDetails)[0][1].find(getImageValueAtIndex)
    const name = Object.entries(productImageDetails)[1][1].find(getImageValueAtIndex)
    const format = Object.entries(productImageDetails)[2][1].find(getImageValueAtIndex)
    const size = Object.entries(productImageDetails)[3][1].find(getImageValueAtIndex)
    const license = Object.entries(productImageDetails)[4][1].find(getImageValueAtIndex)

    console.log(url, name, format, size, license)

    return { url, name, format, size, license };
}



const url = Object.entries(productImageDetails)[0][1].find(getImageValueAtIndex);
    const name = Object.entries(productImageDetails)[1][1].find(getImageValueAtIndex);
    const format = Object.entries(productImageDetails)[2][1].find(getImageValueAtIndex);
    const size = Object.entries(productImageDetails)[3][1].find(getImageValueAtIndex);
    const license = Object.entries(productImageDetails)[4][1].find(getImageValueAtIndex);

    //if ((url || name || format || size || license) === undefined)


    console.log(url, name, format, size, license)

//console.log(Object.entries(result)[0][1]);


//console.log(Object.entries(result)[4][1].find(getImageValueAtIndex));

//console.log(Object.entries(result));

document.getElementById("product-image-name");
document.getElementById("product-image-format");

window.addEventListener("load", () => {
    document.getElementById("product-image-name").textContent = "Visa";
});

//if (window.location.reload())
// {
//    for (int i = 0; i != )
// }