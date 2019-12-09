var homeContent = "<h1>HOME</h1><p>What is going on in here... breakfast</p>";
var aboutContent = "<h1>ABOUT</h1>";
var productsContent = "<h1>PRODUCTS</h1>";
var contactContent = "<h1>CONTACT</h1>";
var staffContent = "<h1>STAFF</h1>";

/*function buttonPressed(btnId) {
  console.log("pressed " + btnId);
}*/

function addListener() {
  var sectionShowing = "homeSection";
  //var sectionToHide = "";
  $("#" + sectionShowing).html(homeContent);

  $("nav a").click(function(event) {
    var buttonID = event.currentTarget.id;
    var sectionID = buttonID + "Section";
    var currentContent = buttonID + "Content";

    //This turns off the old section
    $("#" + sectionShowing).css("display", "none");

    // We switch the name to the new section showing
    sectionShowing = sectionID;
    $("#" + sectionShowing).html(eval(currentContent));

    // Then we actually show the section showing
    $("#" + sectionShowing).css("display", "block");

    //$("section").html(buttonID);
    // buttonPressed(buttonID);
  });

  // console.log("Hello there " + firstName + " " + lastName);
}

$(document).ready(function() {
  addListener();
  // alert("document is ready");
  // addLister("Nike", "Major");
});
