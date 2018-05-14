document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = {
        noWrap: false,
        padding: 10,
        margin: 10,
        fullWidth: true,
        shift: 1000,
        indicators: true,
        dist: -100,
        pressed: true
    };
    var instances = M.Carousel.init(elems, options);
  });
