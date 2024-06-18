$(document).ready(function() {
    aniSl19(1);
   

    // sistemaVotacion();
    pausarMultimedia();
    mediaIdioma();

    setTimeout(() => {
        $(".actVorF .tol").html($(".itemQ").length);
    }, "2000");

    populateSelects();
});

let corret = 0;
  function actVorF(el, res) {
    $(".actVorF button").attr("disabled", "disabled");
    //mostrar respuesta
    if (res == "correct") {
      $(el).parents(".itemQ").find("img").attr("src", "assets/img/true.jpg");
      corret = corret + 1;
    } else {
      $(el).parents(".itemQ").find("img").attr("src", "assets/img/false.jpg");
    }

    setTimeout(() => {
      $(el).parents(".itemQ").addClass("hideT");
      $(".actVorF .inc").html($(".hideT").length + 1);
      //mostrar la siguiente pregunta
      $(".itemQ").removeClass("view");
      let view = ".actVorF > div:nth-child(" + ($(".hideT").length + 2) + ")";
      $(view).addClass("view");
      // mostrar resultados finales
      if ($(".itemQ").length == $(".hideT").length) {
        $(".actVorF .inc").html($(".hideT").length);
        $(".actFin").show();
        $(".btn-reintentar").show();
        $(".actFin .p-res").css("font-size", "30px");
        $(".actFin .p-res").css("text-align", "center");
        $(".actFin h1").css("text-align", "center");
        $(".actFin button").css("text-align", "center");
        $(".actFin h1").html(corret + " de " + $(".itemQ").length);
        $('.btn-finalizar').attr('disabled', false);
        // localStorage.setItem("slider28", "ok");
      }
      $(".actVorF button").removeAttr("disabled");
    }, "1000");
  }


function aniSl19(e) {

    // number of slider
    var sliders = $(".contentModule > div").length;
    $('#nSlider').html(sliders - 1);
    var progressBar = Math.round((e/sliders)*100);
    $(".progBar > div").css("width",progressBar+"%");

    if (e === 2) {
        // $("#pagIndex").css('display', 'none');
        $("#next-btn").on('click', function () {
            $("#next").click();
        });

    }
    if (e === 1) {
        $("#prev").show();

        $("#prev").attr('disabled', true);
    }
    if (e === 2) {
        $("#prev").attr('disabled', false);
        $("#next").css('display', 'none');
    }

}

function mediaIdioma(){
    var toggleSwitch = document.getElementById("toggleSwitch");

    var mediaElementsIngles = document.querySelectorAll(".media-ingles");
    var mediaElementsEspanol = document.querySelectorAll(".media-espanol");

    mediaElementsIngles.forEach(media => {
        media.style.display = "none";
    });

    mediaElementsEspanol.forEach(media => {
        media.classList.add("center-media");
    });

    function pauseMedia(mediaElements) {
        mediaElements.forEach(media => {
            var video = media.querySelector('video');
            if (video && !video.paused) {
                video.pause();
            }

            var audio = media.querySelector('audio');
            if (audio && !audio.paused) {
                audio.pause();
            }
        });
    }

    function toggleMediaVisibility(mediaElements, isVisible) {
        mediaElements.forEach(media => {
            media.style.display = isVisible ? "block" : "none";
            media.classList.toggle("center-media", isVisible);
        });
    }

    toggleSwitch.addEventListener("change", function() {
        pauseMedia(mediaElementsIngles);
        pauseMedia(mediaElementsEspanol);

        if (this.checked) {
            toggleMediaVisibility(mediaElementsIngles, true);
            toggleMediaVisibility(mediaElementsEspanol, false);
        } else {
            toggleMediaVisibility(mediaElementsEspanol, true);
            toggleMediaVisibility(mediaElementsIngles, false);
        }
    });
}


function pausarMultimedia(){
    //Funcionalidad que permite pausar los elementos multimedias que se este reproduciendo
    $("#prev, #next").on("click", function() {
        let allMediaElements = $("audio, video");
        // Pausar cada elemento multimedia
        allMediaElements.each(function() {
            if (!this.paused) {
            this.pause();
            }
        });

    });
}


/*Lista despegable*/
const options = [
  'charcos',
  'húmedos',
  'provisionales',
  'eléctricos',
  'protección',
  'cables',
  'dañados',
];

const correctAnswers = {
  drop1: 'eléctricos',
  drop2: 'cables',
  drop3: 'charcos',
  drop4: 'húmedos',
  drop5: 'provisionales',
  drop6: 'dañados',
  drop7: 'protección'
};


const selects = document.querySelectorAll('.word-select');

function populateSelects() {
  selects.forEach(select => {
    options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });
  });
}

function updateSelects() {
  const selectedValues = Array.from(selects).map(select => select.value);
  selects.forEach(select => {
    Array.from(select.options).forEach(option => {
      if (selectedValues.includes(option.value) && option.value !== select.value) {
        option.style.display = 'none';
      } else {
        option.style.display = 'block';
      }
    });
  });
}

function resetSelects() {
  selects.forEach(select => {
    select.value = '';
    Array.from(select.options).forEach(option => {
      option.style.display = 'block';
      select.classList.remove('incorrectAnswer');
      select.classList.remove('correctAnswer');

    });
  });

  $('#p_respuestas').attr('hidden', true);
  $('.btn-finalizar').attr('disabled', true);
  respuestas_correctas = 0;
  $('#respuestas_correctas').text(0);
}

selects.forEach(select => {
  select.addEventListener('change', updateSelects);
});


function validateSelects() {
  let respuestas_correctas = 0;
  selects.forEach(select => {
    const selectId = select.id;

    if (select.value === correctAnswers[selectId]) {
      select.classList.add('correctAnswer');
      select.classList.remove('incorrectAnswer');
      respuestas_correctas++;
    } else {
      select.classList.add('incorrectAnswer');
      select.classList.remove('correctAnswer');
    }
  });

  $('#p_respuestas').attr('hidden', false);
  $('#respuestas_correctas').text(respuestas_correctas);
  $('.btn-finalizar').attr('disabled', false);
  respuestas_correctas = 0;
}
