//================= global variables =====================
var YOUTUBE_SEARCH_URL = "";

var RESULTS_TEMPLATE = (
  "<div>" +
  '<a href="" class="video-image-link" target="_blank"><img class="video-image" src="" alt="video image"></a>' +
  '<h2>' +
  '<a href="" class="video-name" target="_blank"></a> by <a href="" class="video-owner" target="_blank"></a>'
  '</h2>' +
  "</div>"
);
//================== functions ==========================

function renderResult(result){
  var template = $(RESULTS_TEMPLATE);
  
}

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

//================= app: main function =================
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
