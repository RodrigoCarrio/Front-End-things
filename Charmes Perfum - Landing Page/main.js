const sections = 
        document.querySelectorAll("section");
      navLinks =
        document.querySelectorAll("nav a");

const resetLinks = () =>
  navLinks.forEach(link =>
    link.classList.remove("active")
    );

const handleScroll = () => {
  const {pageY0ffset} = window;
  sections.forEach(section => {
    const {id, offsetTop, clientHeight} =
    section;
    const offset  =offsetTop - 1;
  
    if (
      pageY0ffset >= offset &&
      pageY0ffset < offset + clientHeight) {
        resetLinks();
        navLinks.forEach (link => {
          if (link.dataset.scroll === id) {
            link.classList.add ("active");
          }
        });
      }
  });

};