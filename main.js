
$(document).ready(function() {

//funzioni

  function random_int_number(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
  }

//generazione di contatti

  var orari_accesso = [ '12:50', '18:42', '15:30', '10:59', '14:02']
  var contatto = {
    'numero' : 6,
    'nome' : ['', 'Guido', 'Giulia', 'Francesco', 'Cecilia', 'Andrea', 'Riccardo'],
    'testi' : ['', 'Ciao, come va?', 'Domani a che ora ci troviamo?', 'Buonasera', 'Buonanotte', 'Posso chiamarti? :)', 'Ottimo!!'],
    'immagine' : ['', "https://images.wallpaperscraft.com/image/mountains_clouds_trees_snow_119169_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_starry_sky_milky_way_night_119973_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_trees_frozen_lake_winter_landscape_93344_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_landscape_mt_rainier_washington_grass_hdr_90605_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_cordillera_sky_sunset_sun_clouds_95556_3840x2160.jpg"],
    'orario' : ['', '12:50', '18:42', '15:30', '10:59', '14:02'],
    'stato' : ['', 'Online', 'ultimo accesso alle ore ' + orari_accesso[random_int_number(0, 5)], 'Sta scrivendo']
  };
  var num_cont = contatto.numero;
  console.log(contatto.nome[2]);

  var conversazione = $('.con-item').clone();
  console.log(conversazione);

  for (var i = 1; i <= num_cont; i++) {
    var copia = conversazione.clone();
   $('.conv-list').append(copia);
   $('.conv-list .con-item:nth-child(' + i + ') h3').text(contatto.nome[i])
   $('.conv-list .con-item:nth-child(' + i + ') h4').text(contatto.testi[i])
   $('.conv-list .con-item:nth-child(' + i + ') img').attr('src', contatto.immagine[i]);
   $('.conv-list .con-item:nth-child(' + i + ') p').text(contatto.orario[i]);
  }


//cambia nome contatto selezionato



  $('.con-item').click(function(event) {
    var nome = $(this).find('h3').text();
    var scritte = $(this).find('h4').text();
    var ora = $(this).find('p').text();
    var state = contatto.stato[random_int_number(0, 3)];
    console.log(nome);
    console.log(scritte);
    $('.messages h3').text(nome);
    $('.messages .mess-input p').text(scritte);
    $('.messages .mess-input h5').text(ora);
    $('.messages .text-person p').text(state);

  });

//mic diventa freccia se scrivo testo

 $('.form-control-i').click(function() {
   $('.fa-microphone').hide();
   $('.fa-location-arrow').show();
 });

//inserisci messaggi verdi o bianchi

 $('.invio').click(function() {
   var mio_mex = $('.form-control-i').val();
   console.log(mio_mex);
   $('.messages .mess-output p').text(mio_mex);
   var d = new Date();
   var n = d.getHours();
   var m = d.getMinutes();
   console.log(n);
   $('.messages .mess-output h5').text(n + ':' + m);
  });



});
