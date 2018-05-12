document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
        accordion: true,
        induration: 1000
    };
    var instances = M.Collapsible.init(elems, options);
  });
