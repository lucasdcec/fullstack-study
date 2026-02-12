$(".botao1").on("click", function () {
  $("h1").addClass("big-texto");
  $("h1").animate({ opacity: 0.5, marginLeft: "100px" });
});
$(".botao2").on("click", function () {
  $("h1").removeClass("big-texto");
});

$(document).on("keydown", (event) => {
  $("h1").text(event.key);
});
