const inputImage = document.querySelector("#menu__image-selector");
const bodyImage = document.querySelector("#test");

inputImage.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
  const curFiles = inputImage.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    body.appendChild(para);
  } else {
    for (const file of curFiles) {
      const bgimage = new Image();
      bgimage.src = curFiles;
      bgimage.onload = function () {
        bgimage.classList.add("bgimage");
        bodyImage.appendChild(bgimage);
      };
    }
  }
}
