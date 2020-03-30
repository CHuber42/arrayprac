$(document).ready(function(){
  $("form#favoritesForm").submit(function(event){
    event.preventDefault();
    
    var favThings = [$("#things1").val(), $("#things2").val(), $("#things3").val(), $("#things4").val(), $("#things5").val()]
    console.log(favThings);
    var array2 = [];
    array2.push(favThings[2]);
    array2.push(favThings[0]); 
    array2.push(favThings[1]);
    console.log(array2);
    array2.array.forEach(element => {
      
    });
  });
});

var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"