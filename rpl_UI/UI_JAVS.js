$(function () {
  $("#Tombol_tombol").click(function (events) {
    $("#Panel_tombol").slideToggle()
    events.preventDefault()//untuk referesh tanpa tambah #
  })
  $("#Tombol_Action").click(function (events) {
    $("#Panel_Action").slideToggle()
    events.preventDefault()
  })
 //tombol warna kirim sinyal 
 var stateLampuOn=true;
 $("#tombol_button").click(function (events) {
    //$(this).toggleClass("btn-primary")
    //events.preventDefault()//untuk referesh tanpa tambah #
    if(stateLampuOn){
      $(this).toggleClass ("btn-primary");
      $(this).removeClass ("btn-default");
      $("#tombol_button").text("Hidup") //melakukan pergantian text ke hidup
      stateLampuOn=false;
    }
    else{
      $(this).toggleClass ("btn-default");
      $(this).removeClass ("btn-primary");
      $("#tombol_button").text("Mati")
      stateLampuOn=true;
    }
  })

 var stateLampuOn2=true;
 $("#tombol_button2").click(function (events) {
    //$(this).toggleClass("btn-primary")
    //events.preventDefault()//untuk referesh tanpa tambah #
    if(stateLampuOn2){
      $(this).toggleClass ("btn-primary");
      $(this).removeClass ("btn-default");
      $("#tombol_button2").text("Hidup") //melakukan pergantian text ke hidup
      stateLampuOn2=false;
    }
    else{
      $(this).toggleClass ("btn-default");
      $(this).removeClass ("btn-primary");
      $("#tombol_button2").text("Mati")
      stateLampuOn2=true;
    }
  })


 $("#tombol_2_off").click(function (events) {
    $(this).toggleClass("btn-success")
   /*$("#tombol_button").addClass("btn-default")*/
    events.preventDefault()//untuk referesh tanpa tambah #

  })
 $("#tombol_2_on").click(function (events) {
    $(this).toggleClass("btn-primary")
   /*$("#tombol_button").addClass("btn-default")*/
    events.preventDefault()//untuk referesh tanpa tambah #

  })

})
  