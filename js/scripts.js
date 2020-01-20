$(document).ready(function(){
  $("form#survey").submit(function(){
  event.preventDefault();
  var result = calculate()

    if (result === 15) {
      $("#react").show();
      $("#c").hide();
      $("#js").hide();
      $("#doom").hide();
    } else if (result === 10 || result=== 11|| result=== 12|| result ===13|| result === 14){
      $("#c").show();
      $("#react").hide();
      $("#js").hide();
      $("#doom").hide();
    } else if (result === 5|| result === 6 || result === 7|| result === 8|| result === 9) {
      $("#js").show();
      $("#c").hide();
      $("#react").hide();
      $("#doom").hide();
    } else  {
      $("#doom").show();
      $("#js").hide();
      $("#react").hide();
      $("#c").hide();
      }
      })

  function calculate() {
  var path = parseInt($("#path").val());
  var item = parseInt($("#item").val());
  var goblin = parseInt($("#goblin").val());
  var village = parseInt($("#village").val());
  var castle = parseInt($("#castle").val());
  return path + item + goblin + village + castle;
};
});