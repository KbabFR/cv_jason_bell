window.onload = function () {
    function draw() {
      let txt = "Je me bats pour la biodiversité.";
      var ctx = document.getElementById('canvas').getContext('2d');
      ctx.font = "1.8rem Caveat";
      let current_text = "";
      let timeout = 1;
      for (let letter of txt) {
        setTimeout(function () {
          current_text += letter;
          ctx.fillText(current_text, 0, 50);
        }, 100 * timeout);
        timeout++;
      }
    }
    draw();
  }