// lazy load 
window.onload = () => {
  const lazyLoads = document.querySelectorAll('.lazy-load > source');
  lazyLoadImages(lazyLoads);
}
function lazyLoadImages(images) {
  const options = {
    rootMargin: '0px',
    threshold: 0.1
  };
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0.1 && entry.target.dataset.src != '') {
        let lazyImage = entry.target;
        lazyImage.srcset = lazyImage.dataset.srcset;
        lazyImage.nextElementSibling.src = lazyImage.dataset.srcset;
        lazyImage.parentElement.classList.add('fade-in');
        observer.unobserve(lazyImage);
      }
    })
  }
  const observer = new IntersectionObserver(handleIntersection, options);
  if ("IntersectionObserver" in window) {
    images.forEach((img) => {
      observer.observe(img);
    });
  }
  document.addEventListener("scroll", function() {
    if ("IntersectionObserver" in window) {
      images.forEach((img) => {
        observer.observe(img);
      });
    }
  });
}