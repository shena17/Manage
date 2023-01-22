const faders = document.querySelectorAll(".heading");

const options = {
  root: null,
  treshold: 0,
  rootMargin: "-150px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("fade");
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach((fader) => {
  observer.observe(fader);
});
