$(document).ready(function() {
$("form#survey").submit(fuction(){
  event.preventDefault();
  var result = calculate()
  console.log("result is: " + result)
  if (result <= 5){
    $("#react").show();
    $("#c").hide();
    $("#js").hide();
    $("#doom").hide();
  }
}
});