// функция вызова окна
function show_popap(id_popap) {
  var id = "#" + id_popap;
  $(id).addClass('active');
}
 
// функция закрытия окна 
$(".close_popap").click( function(){
  $(".overlay").removeClass("active");
});