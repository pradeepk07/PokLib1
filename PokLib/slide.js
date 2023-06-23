let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides")[0];
  const images = slides.getElementsByTagName("img");
  
  // Hide all slides
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  
  // Increment slideIndex and reset if exceeds the total number of slides
  slideIndex++;
  if (slideIndex > images.length) {
    slideIndex = 1;
  }
  
  // Display the current slide
  images[slideIndex - 1].style.display = "block";
  
  // Call the function recursively to show the next slide after 2 seconds
  setTimeout(showSlides, 3000);
}
