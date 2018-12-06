
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

  var clone_4 = $('.con-item').clone();
  // console.log(conversazione);

  for (var i = 1; i <= num_cont; i++) {
    var copy_4 = clone_4.clone();//qui devo fare cosi perche cosi ogni volta ho un modello vuoto: conversazione e' il mio modello vuoto copiato dal template, poi a ogni ciclo lo copio per riempirlo
   $('.conv-list').append(copy_4);
   $('.conv-list .con-item:nth-child(' + i + ') h3').text(contatto.nome[i])
   $('.conv-list .con-item:nth-child(' + i + ') h4').text(contatto.testi[i])
   $('.conv-list .con-item:nth-child(' + i + ') img').attr('src', contatto.immagine[i]);
   $('.conv-list .con-item:nth-child(' + i + ') p').text(contatto.orario[i]);
  }
//in alternativa posso usare each() di jquery. E' come un ciclo for.

  // console.log($('.con-item').last().text());


  //hover e active al con-item
  $('.con-item').mouseenter(function(event) {
    $('.con-item').removeClass('almostwhite')
    $(this).toggleClass('almostwhite');
  });
  $('.con-item').mouseleave(function(event) {
    $('.con-item').removeClass('almostwhite')
  });

//cambia nome contatto selezionato

  var clone_3 = $('.mess-inp-contenitore').clone()

  $('.con-item').click(function(event) {


    $('.con-item').removeClass('lightgrey')
    $(this).addClass('lightgrey');

    $('.mess-inp-contenitore').hide();
    $('.mess-out-contenitore').hide();


    //questo e' MOLTO IMPORTANTE: mi serve per prendere la posizione del contatto cliccato
    //e andare ad agire sull equivaente posizione di conversazione.
    // var numContatto = $(this).index();
    // console.log(numContatto);
    // var thisContainer = $('.mess-out-contenitore').eq(numContatto)
    // console.log(thisContainer);
    //
    //
    // thisContainer.show();

    // $('.mess-inp-contenitore').remove()//reinizializza i messaggi ricevuti cancellandoli
    // $('.mess-out-contenitore').remove();//reinizializza i messaggi scritti cancellandoli
    // $('.mess-inp-contenitore .con-item').show();//reinizializza i messaggi cancellati permettendo nuovamente di vederli


    var copy_3 = $(clone_3).clone()//anche qui devo fare cosi perche cosi ogni volta ho un modello vuoto: e' il mio modello vuoto copiato dal template, poi a ogni azione(click,mouseenter..) lo copio per poi riempirlo
    $('.mess-main').append(copy_3);
    console.log(copy_3);

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
    $(copy_3).find('p').text(scritte);
    $(copy_3).find('h5').text(ora);
    $('.messages .text-person p').text(state);
    $('.messages .prof-pic img').attr('src', immagine_prof);


//in alternativa posso usare il metodo clear template, ovvero appendere il div template vuoto alla fine. Penso sia analogo
//ricorda di aggiungere il div clear(vuoto) nel template

    // $('.mess-main').append(clone_3);
    //
    // $('.messages').show();
    // $('.logo-rimpiazzo').hide();
    // var nome = $(this).find('h3').text();
    // var scritte = $(this).find('h4').text();
    // var ora = $(this).find('p').text();
    // var immagine_prof = $(this).find('img').attr('src');
    // var state = contatto.stato[random_int_number(0, 3)];
    //
    // // console.log(nome);
    // // console.log(scritte);
    // $('.messages h3').text(nome);
    // $(clone_3).find('p').text(scritte);
    // $(clone_3).find('h5').text(ora);
    // $('.messages .text-person p').text(state);
    // $('.messages .prof-pic img').attr('src', immagine_prof);
    //
    // var clearTemplate = $('.template .cl-t').clone();
    // $('.mess-main').append(clearTemplate);

  });

//mic diventa freccia se scrivo testo

 $('.form-control-i').click(function() {
   $('.fa-microphone').hide();
   $('.fa-location-arrow').show();
 });

//inserisci messaggi verdi

  var clone = $('.mess-out-contenitore').clone()
  var clone_2 = $('.mess-inp-contenitore').clone()


  $('.invio').click(function() {
    var copy = $(clone).clone()//anche qui devo fare cosi perche cosi ogni volta ho un modello vuoto
    $('.mess-main').append(copy);



    var mio_mex = $('.form-control-i').val();
    // console.log(mio_mex);
    $(copy).find('p').text(mio_mex);
    $('.form-control-i').val('');
    $('.tendina_out').hide();//cosi ho eliminato la tendina all apertura delcontatto senza dover usare classe nascondi

    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    // console.log(n);
    if (m >= 10) {
      $('.messages .mess-output h5').text(n + ':' + m);
    } else if (m < 10) {
      $('.messages .mess-output h5').text(n + ':0' + m);
    }

//risposta CPU

    var copy_2 = $(clone_2).clone()

    var intervallo = setTimeout(function () {
      $('.mess-main').append(copy_2);


      $(copy_2).find('p').text('ok');
      $('.form-control-i').val('');
      // console.log($(copy_2).find('p').text('ok'));

      var d = new Date();
      var n = d.getHours();
      var m = d.getMinutes();
      // console.log(m);
      if (m >= 10) {
        $('.messages .mess-input h5').text(n + ':' + m);
      } else if (m < 10) {
        $('.messages .mess-input h5').text(n + ':0' + m);
      }
      $('.tendina_inp').hide();//cosi ho eliminato la tendina all apertura delcontatto senza dover usare classe nascondi
    }, 1000);


  });

//inserisci tramite tasto invio


 $('.form-mex').keypress(function(event) {
   if (event.which == 13) {
     var copy = $(clone).clone()
     $('.mess-main').append(copy);

     var mio_mex = $('.form-control-i').val();
     // console.log(mio_mex);
     $(copy).find('p').text(mio_mex);
     $('.form-control-i').val('');
     $('.tendina_out').hide();//cosi ho eliminato la tendina all apertura delcontatto senza dover usare classe nascondi


     var d = new Date();
     var n = d.getHours();
     var m = d.getMinutes();
     // console.log(m);
     if (m >= 10) {
       $('.messages .mess-output h5').text(n + ':' + m);
     } else if (m < 10) {
       $('.messages .mess-output h5').text(n + ':0' + m);
     }

//risposta CPU


     var intervallo = setTimeout(function () {
       var copy_2 = $(clone_2).clone()
       $('.mess-main').append(copy_2);


       $(copy_2).find('p').text('ok');
       $('.form-control-i').val('');
       // console.log($(copy_2).find('p').text('ok'));

       var d = new Date();
       var n = d.getHours();
       var m = d.getMinutes();
       // console.log(n);
       if (m >= 10) {
         $('.messages .mess-input h5').text(n + ':' + m);
       } else if (m < 10) {
         $('.messages .mess-input h5').text(n + ':0' + m);
       }
       $('.tendina_inp').hide();//cosi ho eliminato la tendina all apertura delcontatto senza dover usare classe nascondi
     }, 1000);


//----------------


     var intervallo_2 = setTimeout(function () {
       $(copy).find('.fa-check-double').css('color', 'rgb(25, 131, 179)');
      }, 2000);
    }
    // console.log(event.which);
  });

//mostra spunta
// quando appendi qualcosa e poi vuoi farci qualcosa dentro ( es appeno un div e poi a quel div voglio far apparire qualcosa dentro al click)
// non posso usare il semplice $().click ma $(document).on(‘click’,’div’, function(){})




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
    $(this).parent('.tendina_inp').parent('.mess-input').parent('.mess-inp-contenitore').hide();
  });

//--

  $(document).on('click', '.tendina_out .delete', function() {
    $(this).parent('.tendina_out').parent('.mess-output').parent('.mess-out-contenitore').hide();
  });


//ricerca contatti (each() mi cicla su tutti i con-item)



  // $('.fa-search').click(function() {
  //   var count = [];
  //   $('.con-item').show();
  //   $('.con-item').each(function() {
  //     var writtenValue = $('.form-control').val();
  //     var wVU = writtenValue.toUpperCase();
  //     var nthContactName = $(this).find('h3').text();
  //     var nCN = nthContactName.toUpperCase();
  //     var check = nCN.includes(wVU);
  //
  //     console.log(writtenValue);
  //     console.log(nthContactName);
  //     console.log(check);
  //     if (check == false) {
  //       $(this).hide();
  //       console.log($(this).find('h3').text());
  //     } else {
  //       count.push('1');
  //     }
  //     console.log(count);
  //   });
  //   if (count.length == 0) {
  //     // console.log('ups');
  //     $('.conv-list').text('Nessun contatto corrispondente').css('font-size', '30px').css('text-align', 'center').css('color', 'grey');
  //   }
  //   // console.log($('.form-control').val());
  // });

//in alternativa posso dirgli di applicare le mie regole al keyup

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

});
