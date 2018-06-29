
$(document).ready(function(){
var url = "https://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC";
$.ajax({
    url: url,
    method: "GET"
}).done(function(response) {
    console.log(response);
    var title = response.data[1].title;
    var rating = response.data[1].rating;
    var gif = response.data[1].images.fixed_height.url;
    var still = response.data[1].images.fixed_height_still.url;
    console.log(title, rating, still, gif);
    $('#root').append(`
    <div>
    <h3>${title}</h3>
    <img src="${gif}" alt='${title}'>
    <p>${rating}</p>
    </div>
    `)
});
});

`don't can you beleive he said "that"`
