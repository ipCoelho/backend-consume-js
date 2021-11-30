"use strict";

const imagePreview = (fileID, imagemID) => {
    const fileReader = new FileReader();
    const file = document.getElementById(fileID).files[0];
    const preview = document.getElementById(imagemID);

    if(file) {
        fileReader.readAsDataURL(file);
    } else {
        preview.src = './img/foto.png';
    }

    fileReader.onloadend = () => {
        preview.src = fileReader.result;
    }

    console.log(file);
}

export { imagePreview };