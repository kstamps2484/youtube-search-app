//================= global variables =====================
var YOUTUBE_SEARCH_URL = "";

var RESULTS_TEMPLATE = (
  "<div>" +
  "</div>"
);
//================== functions ==========================

function fetchApiData(input, callback){
  var query = {
    q: input + ' in:name',
    per_page: 5;
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function displaySearchResults(data){
  var results = data.items.map(function(item, index){
    return renderResult(item);
  });
  $('.search-results').html(results);
}

//=================== app: main function ===============================
function app {
  $('.youtube-search-form').submit( function(event){
    event.preventDefault();
    var inputElement = $('.youtube-search');
    var query = searchElement.val();
    inputElement.val('');
    fetchApiData(query, displaySearchResults);
  });
}

$(app);
