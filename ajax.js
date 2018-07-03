
topics = ["Animals", "Gliders", "Good Morning Gif",
    "Fall out boy llama", "DNCE", "Simpsons", "Excited NFL", "Warriors", "Wonder Women"];

//Refactor into function
//This function should now take in a search term
    function ajxCall(searchInput) {
        var url = "https://api.giphy.com/v1/gifs/search?q='"+ searchInput + "'&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: url,
            method: "GET"
        }).done(function (response) {
            console.log(response);

            for (var i = 0;i < topics.length;i++){
                var title = response.data[i].title;
                var rating = response.data[i].rating;
                var gif = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                console.log(title, rating, still, gif);
                $('#root').append(`
                <div>
                <h3>${title}</h3>
                <img class="gif-image" data-gif="${gif}" data-still="${still}" data-state="still" src="${still}" alt='${title}'>
                <p>${rating}</p>
                </div>
                `)
            }
    });
}
//Set up a click handler that will work with dynamically generated buttons on class button-clicker
$(document).on("click", ".gif-image", function () {

    if ($(this).attr("data-state") === "still"){
        $(this).attr("src", $(this).attr("data-gif"));
        $(this).attr("data-state", "gif");
    }else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }



});

function addButtons() {
    for (i = 0; i < topics.length; i++) {
        $("#dynButtons").append("<input type='button' class='button-clicker' id='topicID" + i + "' value='" + topics[i] + "' />");
    }
}

//Search Button
$("#btnTopic").on("click", notify);

function notify(){
    //Read input from iput
    var userInput = $("#userInput").val().trim();

    //push input into aray
    if (userInput!==""){
        topics.push(userInput);
        $("#dynButtons").empty();
        addButtons();
    }else
    {
        alert("Please enter a topic!");
    }

}
$(document).on("click", ".button-clicker", btnClick);
function btnClick(){
    $("#root").empty();
    var searchParam = $(this).val().trim();
    ajxCall(searchParam);
}

//Add Buttons from topics
addButtons();