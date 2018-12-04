
$(document).ready(function() {

//funzioni

// $('#form-search').reset();perche non va?
// $('#form-mex').reset();


  function random_int_number(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
  }

//generazione di contatti

  var orari_accesso = [ '12:50', '18:42', '15:30', '10:59', '14:02']
  var contatto = {
    'numero' : 7,
    'nome' : ['', 'Guido', 'Franco', 'Francesco', 'Cecilia', 'Andrea', 'Riccardo', 'Anna'],
    'testi' : ['', 'Ciao, come va?', 'Domani a che ora ci troviamo?', 'Buonasera', 'Buonanotte', 'Posso chiamarti? :)', 'Ottimo!!'],
    'immagine' : ['', "https://images.wallpaperscraft.com/image/mountains_clouds_trees_snow_119169_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_starry_sky_milky_way_night_119973_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_trees_frozen_lake_winter_landscape_93344_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_landscape_mt_rainier_washington_grass_hdr_90605_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_cordillera_sky_sunset_sun_clouds_95556_3840x2160.jpg"],
    'orario' : ['', '12:50', '18:42', '15:30', '10:59', '14:02'],
    'stato' : ['', 'Online', 'ultimo accesso alle ore ' + orari_accesso[random_int_number(0, 4)], 'Sta scrivendo']
  };
  var num_cont = contatto.numero;
  // console.log(contatto.nome[2]);

  var conversazione = $('.con-item').clone();
  // console.log(conversazione);

  for (var i = 1; i <= num_cont; i++) {
    var copia = conversazione.clone();
   $('.conv-list').append(copia);
   $('.conv-list .con-item:nth-child(' + i + ') h3').text(contatto.nome[i])
   $('.conv-list .con-item:nth-child(' + i + ') h4').text(contatto.testi[i])
   $('.conv-list .con-item:nth-child(' + i + ') img').attr('src', contatto.immagine[i]);
   $('.conv-list .con-item:nth-child(' + i + ') p').text(contatto.orario[i]);
  }
//in alternativa posso usare each() di jquery. E' come un ciclo for.

  // console.log($('.con-item').last().text());
  $('.con-item').last().hide();



//cambia nome contatto selezionato

  $('.con-item').mouseenter(function(event) {
    $('.con-item').removeClass('almostwhite')
    $(this).toggleClass('almostwhite');
  });


  $('.con-item').click(function(event) {
    $('.con-item').removeClass('lightgrey')
    $(this).addClass('lightgrey');

    $('.mess-input').show();//reinizializza i messaggi cancellati permettendo nuovamente di vederli
    $('.mess-output').remove();//reinizializza i messaggi scritti cancellandoli



    $('.messages').show();
    $('.logo-rimpiazzo').hide();
    var nome = $(this).find('h3').text();
    var scritte = $(this).find('h4').text();
    var ora = $(this).find('p').text();
    var immagine_prof = $(this).find('img').attr('src');
    var state = contatto.stato[random_int_number(0, 3)];

    console.log(nome);
    console.log(scritte);
    $('.messages h3').text(nome);
    $('.messages .mess-input p').text(scritte);
    $('.messages .mess-input h5').text(ora);
    $('.messages .text-person p').text(state);
    $('.messages .prof-pic img').attr('src', immagine_prof);


  });

//mic diventa freccia se scrivo testo

 $('.form-control-i').click(function() {
   $('.fa-microphone').hide();
   $('.fa-location-arrow').show();
 });

//inserisci messaggi verdi

var new_cont = $('.mess-output').clone()
$('.mess-output').first().hide();


  $('.invio').click(function() {
    var copy = new_cont.clone();
    $('.mess-main').append(copy);


    var mio_mex = $('.form-control-i').val();
    console.log(mio_mex);
    $(copy).find('p').text(mio_mex);
    $('.form-control-i').val('');

    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log(n);
    $('.messages .mess-output h5').text(n + ':' + m);
   });

//inserisci tramite tasto invio


 $('.form-mex').keypress(function(event) {
   if (event.which == 13) {
     var copy = new_cont.clone();
     $('.mess-main').append(copy);

     var mio_mex = $('.form-control-i').val();
     console.log(mio_mex);
     $(copy).find('p').text(mio_mex);
     $('.form-control-i').val('');

     var d = new Date();
     var n = d.getHours();
     var m = d.getMinutes();
     console.log(n);
     $('.messages .mess-output h5').text(n + ':' + m);
    }
    console.log(event.which);
  });

//mostra spunta



  $('.mess-input').mouseenter(function() {
    $(this).find('.fa-check').removeClass('nascondi');
  });
  $('.mess-input').mouseleave(function() {
    $(this).find('.fa-check').addClass('nascondi');
  });


  $('.mess-output').mouseenter(function() {
    $(this).find('.fa-check').removeClass('nascondi');
  });
  $('.mess-output').mouseleave(function() {
    $(this).find('.fa-check').addClass('nascondi');
  });

//menu a tendina

  $('.tendina_inp').hide();


  $('.fa_inp').click(function() {
    $('.tendina_inp').slideToggle('slow');
  });
  $('.tendina_inp').mouseleave(function() {
    $('.tendina_inp').slideUp('slow');
  });
  //---
  $('.tendina_out').hide();


  $('.fa_ out').click(function() {
    $('.tendina_out').slideDown('slow');
  });
  $('.tendina_out').mouseleave(function() {
    $('.tendina_out').slideUp('slow');
  });

//delete message

  $('.tendina_inp .delete').click(function() {
    $(this).parent('.tendina_inp').parent('.mess-input').hide();
  });
//--


//ricerca contatti (each() mi cicla su tutti i con-item)



  $('.fa-search').click(function() {
    $('.con-item').show();
    $('.con-item').each(function() {
      var writtenValue = $('.form-control').val();
      var nthContactName = $(this).find('h3').text();
      var check = nthContactName.includes(writtenValue)

      console.log(writtenValue);
      console.log(nthContactName);
      console.log(check);
      if (check == false) {
        $(this).hide();
        console.log($(this).find('h3').text());
      }
    });

    // console.log($('.form-control').val());

  });



});
