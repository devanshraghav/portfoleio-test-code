var t1 = gsap.timeline();

t1.to(".fs", {
  height: 0,
  duration: 2,
  ease: Expo.easeInOut,
});
t1.to(".ele", {
  height: "100%",
  duration: 2,
  delay: -2,
  ease: Expo.easeInOut,
});
t1.to(".white", {
  height: "100%",
  duration: 2,
  delay: -1.6,
  ease: Expo.easeInOut,
});

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (element) {
    let parentSpan = document.createElement("span");
    let childSpan = document.createElement("span");

    parentSpan.classList.add("parentSpan");
    childSpan.classList.add("childSpan");

    childSpan.textContent = element.textContent;

    parentSpan.appendChild(childSpan);

    element.innerHTML = "";
    element.appendChild(parentSpan);
  });
}

revealToSpan();
