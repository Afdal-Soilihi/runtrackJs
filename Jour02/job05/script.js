window.addEventListener('scroll', function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
  
    const footer = document.getElementById('footer');
    footer.style.backgroundColor = `hsl(${scrolledPercentage}, 100%, 50%)`;
  });