const Dog = document.getElementById('dog');
const cat = document.getElementById('cat');

// Function to toggle the menu
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.transform = (menu.style.transform === "translateX(0%)" || menu.style.transform === "") ? "translateX(-100%)" : "translateX(0%)";
  }

  // Swipe detection
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
  });

  document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50; // Adjust this value as needed

    if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe to the left (closing menu)
      toggleMenu();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe to the right (opening menu)
      toggleMenu();
    }
  }
  console.log('slide effective')