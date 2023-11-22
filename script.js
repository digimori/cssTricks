// Intersection observer:
// Give sections an attr like 'hidden' and then target them.

// IntersectionObserver is a class that takes a callback function in its constructor
// This will run everytime the observer changes target in the viewport, which is why the forEach is necessary

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Will make the section visible when the intersection is reached via the show class
    } else {
      entry.target.classList.remove("show"); // Removes the classlist and the element from view when not intersecting.
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el)); // Telling it to observe each looped element to toggle the classlists.
