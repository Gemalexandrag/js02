$(document).ready(() => {

    $("button").click(() => {
    const name = $("input#name").val();
    const healthy = $("input#healthy").val();
    const response = $("input#picURL").val();



    if (healthy <= 98) {
      $("#heal").append("<img src = '"+ response + "'></img><br>")
      $("#heal").append(name + "<br>");
      $("#happyFace").append("<img src='https://cdn.shopify.com/s/files/1/1061/1924/files/Tongue_Out_Emoji_with_Tightly_Closed_Eyes.png' width = '20px' hight = '20px'>")
      $("#heal").css('color', 'cyan');
      $("#heal").css('background-color', 'yellow');
      $("#heal").css('font-size', '50px');

    }

    if (healthy > 98) {
      $("#heal").append("<img src = '"+ response + "'></img><br>")
      $("#unheal").append(name + "<br>");
      $("#sadFace").append("<img src='http://media.philstar.com/images/the-philippine-star/lifestyle/young-star/20151023/Emoji-5E.jpg' width = '100px' hight = '100px'>")
      $("#unheal").css('background-color', 'green');
      $("#unheal").css('font-size', '50px');

    }
    if (healthy => 103) {
      $("#unheal").css('color', 'red');
    }
  })
})
