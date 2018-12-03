
$(document).ready(function() {

  var contatto = {
    'numero' : 4,
    'nome' : ['', 'Guido', 'Giulia', 'Francesco', 'Cecilia', 'Andrea', 'Riccardo'],
    'testi' : ['', 'Ciao, come va?', 'Domani a che ora ci troviamo?', 'Buonasera', 'Buonanotte', 'Posso chiamarti? :)'],
    'immagine' : 0
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
  }
//metti copia h3 e copia h4

});
