var supported_langs = ['fr', 'en'];

var change_loc = function (lang) {
  var location_parts = window.location.toString().split('/').filter(function (_) {
    return _;
  });
  var lang_in_url = '';
  if (supported_langs.indexOf(location_parts[2]) !== -1) {
    lang_in_url = location_parts[2];
    location_parts.splice(2, 1);
  }

  if (lang !== lang_in_url) {
    location_parts.splice(2, 0, lang);
    location_parts[0] += '//';
    window.location = location_parts.join('/');
  }
};

// Detect browser lang if there is no lang in the URL
var location_parts = window.location.toString().split('/').filter(function (_) {
  return _;
});
var lang_in_url = '';
if (supported_langs.indexOf(location_parts[2]) !== -1) {
  lang_in_url = location_parts[2];
  location_parts.splice(2, 1);
}
if (!lang_in_url) {
  change_loc(navigator.language.startsWith('fr') ? 'fr' : 'en');
}

var base_url = location_parts[0] + '//' + location_parts[1] + '/';