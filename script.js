let images = [
    "img1.png",
    "img2.png",
    "img3.png",
	"img4.png",
  ];
  let currentImageIndex = 0;
  function nextImage() {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }
    showImage();
  }
  function backImage() {
      if (currentImageIndex > 0) {
          currentImageIndex--;
      } else {
          currentImageIndex = images.length - 1;
      }
      showImage();
  }
    function showImage() {
      var img = document.querySelector('.image-slider img');
      img.src = images[currentImageIndex];
  }