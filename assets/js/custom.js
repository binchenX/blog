// Custom JavaScript for generating anchor links for headers
document.addEventListener("DOMContentLoaded", function() {
  var headers = document.querySelectorAll("h2, h3, h4, h5, h6");
  headers.forEach(function(header) {
    var id = header.id || header.textContent.replace(/\s+/g, '-').toLowerCase();
    header.id = id;
    header.innerHTML += `<a class="header-link" href="#${id}" title="Permalink">#</a>`;
  });
});

