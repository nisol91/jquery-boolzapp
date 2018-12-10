
$(document).ready(function() {

//funzioni

  function random_int_number(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
  }

//generazione di contatti

  var orari_accesso = [ '12:50', '18:42', '15:30', '10:59', '14:02']
  var contatto = {
    'numero' : 7,
    'nome' : ['Guido', 'Franco', 'Francesco', 'Cecilia', 'Andrea', 'Riccardo', 'Anna'],
    'testi' : ['Ciao, come va?', 'Domani a che ora ci troviamo?', 'Buonasera', 'Buonanotte', 'Posso chiamarti? :)', 'Ottimo!!'],
    'immagine' : ["https://images.wallpaperscraft.com/image/mountains_clouds_trees_snow_119169_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_starry_sky_milky_way_night_119973_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_trees_frozen_lake_winter_landscape_93344_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_landscape_mt_rainier_washington_grass_hdr_90605_3840x2160.jpg", "https://images.wallpaperscraft.com/image/mountains_cordillera_sky_sunset_sun_clouds_95556_3840x2160.jpg"],
    'orario' : ['12:50', '18:42', '15:30', '10:59', '14:02'],
    'stato' : ['Online', 'ultimo accesso alle ore ' + orari_accesso[random_int_number(0, 4)], 'Sta scrivendo']
  };
  var num_cont = contatto.numero;
//----------
  var clone_4 = $('.templates .con-item').clone();

  for (var i = 0; i < num_cont; i++) {
    var copy_4 = clone_4.clone();
    $('.conv-list').append(copy_4);
    $('.conv-list .con-item:nth-child(' + (i+1) + ') h3').text(contatto.nome[i])
    $('.conv-list .con-item:nth-child(' + (i+1) + ') h4').text(contatto.testi[i])
    $('.conv-list .con-item:nth-child(' + (i+1) + ') img').attr('src', contatto.immagine[i]);
    $('.conv-list .con-item:nth-child(' + (i+1) + ') p').text(contatto.orario[i]);
  }
//------------
  var clone_5 = $('.templates .conversaz').clone();

  for (var i = 1; i <= num_cont; i++) {
    var copy_5 = clone_5.clone();
    $('.mess-main').append(copy_5);

  }

//hover al con-item

  $('.con-item').mouseenter(function(event) {
    $('.con-item').removeClass('almostwhite')
    $(this).toggleClass('almostwhite');
  });
    $('.con-item').mouseleave(function(event) {
    $('.con-item').removeClass('almostwhite')
  });

//cambia nome contatto selezionato

  var clone_3 = $('.templates .mess-inp-contenitore').clone()

  $('.con-item').click(function(event) {

    //comportamento con contatto active
    $('.con-item').removeClass('lightgrey')
    $(this).addClass('lightgrey');
    //-----
    //nascondo il logo e mostro tutta la parte di destra di whatsapp
    $('.logo-rimpiazzo').addClass('nascondi');
    $('.messages').show();

    //prendo tutti gli elementi del contatto per poi successivamente metterli in alto nella barra
    var nome = $(this).find('h3').text();
    var scritte = $(this).find('h4').text();
    var ora = $(this).find('p').text();
    var immagine_prof = $(this).find('img').attr('src');
    var state = contatto.stato[random_int_number(0, 3)];
    //ora li metto in alto
    $('.messages h3').text(nome);
    $('.messages .text-person p').text(state);
    $('.messages .prof-pic img').attr('src', immagine_prof);
    //ora dovrei mettere nel mio riquadro bianco del messaggio inviato
    //cio che c e scritto nell' anteprima del contatto, oltre all orario.
    //----
    //ricordati di dirgli sempre di appendere cio che e' nel template!!!se no si crea un loop
    //------------
    //questa e' la corrispondenza tra il contatto cliccato e la conversazione relativa a quel contatto.
    var numContatto = $(this).index();
    var thisContainer = $('.mess-main .conversaz').eq(numContatto)
    $(thisContainer).append(clone_3)
    $('.mess-main .conversaz').addClass('nascondi')
    $(thisContainer).removeClass('nascondi')

    var scritte = $(this).find('h4').text();
    var ora = $(this).find('p').text();
    $(thisContainer).find('p').text(scritte);
    $(thisContainer).find('h5').text(ora);


  });




//inserimento messaggi verdi

//--------------------*************** inserisci

//DA QUI IN GIU TUTTO OK--------------------------------

//mostra spunta

  $(document).on('mouseenter', '.mess-input', function() {
    $(this).find('.fa-check').removeClass('nascondi');
  });
  $(document).on('mouseleave', '.mess-input', function() {
    $(this).find('.fa-check').addClass('nascondi');
  });

  $(document).on('mouseenter', '.mess-output', function() {
    $(this).find('.fa-check').removeClass('nascondi');
  });
  $(document).on('mouseleave', '.mess-output', function() {
    $(this).find('.fa-check').addClass('nascondi');
  });


//menu a tendina
  $(document).on('click', '.con-item', function(event) {//cosi ho eliminato la tendina all apertura delcontatto senza dover usare classe nascondi
    $('.tendina_inp').hide();
  });

  $(document).on('click', '.fa_inp', function() {
    $(this).siblings('.tendina_inp').slideToggle('slow');
    // console.log(event.target);
  });
  $(document).on('mouseleave', '.tendina_inp', function() {
    $('.tendina_inp').slideUp('slow');
  });

  //---

  $(document).on('click', '.con-item', function(event) {
    $('.tendina_out').hide();
  });


  $(document).on('click', '.fa_out', function() {
    $(this).siblings('.tendina_out').slideToggle('slow');
    // console.log(event.target);
  });
  $(document).on('mouseleave', '.tendina_out', function() {
    $('.tendina_out').slideUp('slow');
  });

//delete message

  $(document).on('click', '.tendina_inp .delete', function() {
    $(this).parent('.tendina_inp').parent('.mess-input').parent('.mess-inp-contenitore').addClass('nascondi');
  });

//--

  $(document).on('click', '.tendina_out .delete', function() {
    $(this).parent('.tendina_out').parent('.mess-output').parent('.mess-out-contenitore').addClass('nascondi');
  });


//ricerca contatti keyup

  $('.form-control').keyup(function() {
    var count = [];
    $('.con-item').show();
    $('.con-item').each(function() {
      var writtenValue = $('.form-control').val();
      var wVU = writtenValue.toLowerCase();
      var nthContactName = $(this).find('h3').text();
      var nCN = nthContactName.toLowerCase();
      var check = nCN.includes(wVU);

      // console.log(writtenValue);
      // console.log(nthContactName);
      // console.log(check);
      if (check == false) {
        $(this).hide();
        console.log($(this).find('h3').text());
      } else {
        count.push('1');
      }
      console.log(count);
    });
    // if (count.length == 0) {
      //   // console.log('ups');
      //   $('.conv-list').text('Nessun contatto corrispondente').css('font-size', '30px').css('text-align', 'center').css('color', 'grey');
      // }

    console.log($('.form-control').val());
  });

//mic diventa freccia se scrivo testo

 $('.form-control-i').click(function() {
   $('.fa-microphone').hide();
   $('.fa-location-arrow').show();
 });

});
