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
    array2.forEach(element => {
      var thingsNode = document.createElement("li");
      console.log(element);
      thingsNode.textContent = element;
      document.getElementById("publishedResults").appendChild(thingsNode);

    });
  });
});

