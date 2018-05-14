document.addEventListener('DOMContentLoaded', function() {
    var collapse = document.querySelectorAll('.collapsible');
    var options = {
        accordion: true,
        induration: 1000
    };
    var instances = M.Collapsible.init(collapse, options);

    var select = document.querySelectorAll('select');
    var options = {
        classes: "",
        dropdownOptions: {}
    }
    var instances = M.FormSelect.init(select, options);
  });


