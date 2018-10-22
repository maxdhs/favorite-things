$(document).ready(function() {
  $('form#favoriteThingsForm').submit(function(event) {
    alert("works");
    event.preventDefault();
    var favoriteArray = [$("#favoriteAnimal").val(), $("#favoriteColor").val(), $("#favoriteMovie").val(), $("#favoriteFood").val()]
    var newArray = [favoriteArray[1], favoriteArray[0], favoriteArray[2]]
    $("#myList").append("<li>"+ newArray[0]+"</li>");
    $("#myList").append("<li>"+ newArray[1]+"</li>");
    $("#myList").append("<li>"+ newArray[2]+"</li>");

  });
});
