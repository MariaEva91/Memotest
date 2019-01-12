
//login and name validation-------------------

//easy level----------------------------------

$('#botonFacil').on('click',function(){
    var nombreJugador = $('#inputNombre').val();
     if( nombreJugador == ''){
        $('#botonError').addClass('appear');
        $('#botonError p').removeClass('hidden');
     // name validation function
     setTimeout(function(){
        $('#botonError p').addClass('hidden')
        $('#botonError').removeClass('appear')
    },3000)
     }
    else{
        var nivel = 'facil';
        var nombreJugador = $('#inputNombre').val();
        $('#saludarJugador').append('<span> ' + nombreJugador + '</span>');
        //hide login modal . //Appear main board
        $('#main-container').addClass('hidden');
       $('#board').removeClass('hidden');
       $('#cantidadIntentos').html('18');
       $('#nivelElegido').html('FACIL');
    }
    //cards Array------------------------------

    var arr = ["imagenes/alce.jpg",
    "imagenes/epelante.jpg",
    "imagenes/nena.jpg",
    "imagenes/peces.jpg",
    "imagenes/unichancho.jpg",
    "imagenes/zapas.jpg",
    "imagenes/alce.jpg",
    "imagenes/nena.jpg",
    "imagenes/epelante.jpg",
    "imagenes/peces.jpg",
    "imagenes/zapas.jpg",
    "imagenes/unichancho.jpg"
    ];

    //ramdom function----------------------------------

    function shuffle(arr) {
        var j
        var x
        var i
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    };

    shuffle(arr)

 //pushing cards and validation
    
    var imgsLength = $('.tapadas').length
    for (var i = 0; i < imgsLength; i++) {
    $('.tapadas').eq(i).attr('data-cartas', arr[i])
    }

    $('.tapadas').on('click', function() {
    var visible = $(this).attr('data-cartas')
    $(this).attr('src', visible)
    //add animation css
    $(this).addClass('girar');
    })

//comparing cards

var clicks = 0;
var primerClick
var intentos = 0;
var pares = 0;

//play again button

$('#volverAjugar').on('click',function(){
    location.reload();
});
$('#perdiste').on('click',function(){
     location.reload();
});

$('.cardsImg').on('click',function(){
    clicks = clicks + 1;
    if(clicks == 1){
        var id = $(this).children().attr('id');
        var img = $(this).children().attr('data-cartas')
        primerClick ={
            id:id,
            img:img
        }
      
    }  else{
            if (primerClick.img == $(this).children().attr('data-cartas') && primerClick.id != $(this).children().attr('id')) {
            $('#'+ primerClick.id).addClass('filter');
            $(this).addClass('filter');
            intentos = intentos + 1;
            $('#intentos').html('<span>' + intentos + '</span>')
           pares = pares + 1
        } else {
            intentos = intentos + 1;
            $('#intentos').html('<span>' + intentos + '</span>')
            var that = this
            setTimeout(function(){
                $('#'+ primerClick.id).attr('src',"imagenes/tapada.jpg").removeClass('girar');
               $(that).children().attr('src', "imagenes/tapada.jpg").removeClass('girar') 
             },2000)

        }
     clicks = 0;
    }
    //if you won/lost--------------------------------

    if( pares == 6 && intentos < 19){
        $('.ranking').removeClass('hidden');
        $('#board').addClass('opacity');
        $('#intentosGanadores').html(intentos)
        //setting and pushing ranking
         var datosGuardados = JSON.parse(localStorage.getItem('jugadores'));
          var jugadores ={
                    name: nombreJugador,
                    level:nivel,
                    attempts: intentos
                }
                if(datosGuardados == null){
                    var datosGuardados = [];
                }
                datosGuardados.push(jugadores);
            
             localStorage.setItem('jugadores', JSON.stringify(datosGuardados));
               var ranking = datosGuardados.length
                if(ranking > 3){
                    ranking = 3
                };

                for(var i = 0; i < ranking; i++){
                    var datos = 
                    ` <div class="valores">
                    <div class="nombres"><p>${datosGuardados[i].name}</p></div><br>
                    <div class="niveles"><p>${datosGuardados[i].level}</p></div><br>
                    <div class="intentos"><p>${datosGuardados[i].attempts}</p></div>
                    </div>`;
                    $('#rankingJugadores').append(datos);
                }
        }   
         else if(pares != 6 && intentos > 18){
             $('#board').addClass('opacity');
             $('.lose').removeClass('hidden');
         } 
        });

    });

//Intermediate level

$('#botonIntermedio').on('click', function(){
    var nombreJugador = $('#inputNombre').val();
    if( nombreJugador == ''){
    $('#botonError').addClass('appear');
    $('#botonError p').removeClass('hidden');
    setTimeout(function(){
        $('#botonError p').addClass('hidden')
        $('#botonError').removeClass('appear')
    },3000)
    }
    else{
        var nivel = 'intermedio';
        var nombreJugador = $('#inputNombre').val();
        $('#saludarJugador').append('<span> ' + nombreJugador + '</span>');
        $('#main-container').addClass('hidden');
        $('#board').removeClass('hidden');
        $('#cantidadIntentos').html('12');
        $('#nivelElegido').html('INTERMEDIO');
    }
   //cards Array------------------------------

   var arr = ["imagenes/alce.jpg",
   "imagenes/epelante.jpg",
   "imagenes/nena.jpg",
   "imagenes/peces.jpg",
   "imagenes/unichancho.jpg",
   "imagenes/zapas.jpg",
   "imagenes/alce.jpg",
   "imagenes/nena.jpg",
   "imagenes/epelante.jpg",
   "imagenes/peces.jpg",
   "imagenes/zapas.jpg",
   "imagenes/unichancho.jpg"
   ];

//ramdon function

   function shuffle(arr) {
       var j
       var x
       var i
       for (i = arr.length - 1; i > 0; i--) {
           j = Math.floor(Math.random() * (i + 1));
           x = arr[i];
           arr[i] = arr[j];
           arr[j] = x;
       }
       return arr;
   };

   shuffle(arr)

//pushing cards and validation

   var imgsLength = $('.tapadas').length
   for (var i = 0; i < imgsLength; i++) {
   $('.tapadas').eq(i).attr('data-cartas', arr[i])
   }

   $('.tapadas').on('click', function() {
   var visible = $(this).attr('data-cartas')
   $(this).attr('src', visible);
    $(this).addClass('girar');
   })

//comparing cards

$('#volverAjugar').on('click',function(){
    location.reload();
});
$('#perdiste').on('click',function(){
    location.reload();
});

var clicks = 0;
var primerClick
var intentos = 0;
var pares = 0;
$('.cardsImg').on('click',function(){
   clicks = clicks + 1;

   if(clicks == 1){
       var id = $(this).children().attr('id');
       var img = $(this).children().attr('data-cartas')
       primerClick ={
           id:id,
           img:img
       }
     
   }  else{
           if (primerClick.img == $(this).children().attr('data-cartas') && primerClick.id != $(this).children().attr('id')) {
          $('#'+ primerClick.id).addClass('filter');
           $(this).addClass('filter');
           intentos = intentos + 1;
           $('#intentos').html('<span>' + intentos + '</span>')
          pares = pares + 1;
       } else {
           intentos = intentos + 1;
           $('#intentos').html('<span>' + intentos + '</span>')
           var that = this
           setTimeout(function(){
               $('#'+ primerClick.id).attr('src',"imagenes/tapada.jpg").removeClass('girar');
              $(that).children().attr('src', "imagenes/tapada.jpg").removeClass('girar')
             },2000)
          }
      clicks = 0;
     }
    //if you won/lost

    if(pares == 6 && intentos < 13){
        $('.ranking').removeClass('hidden');
        $('#board').addClass('opacity');
        $('#intentosGanadores').html(intentos);
         
        var datosGuardados = JSON.parse(localStorage.getItem('jugadores'));
         
          var jugadores ={
                  name: nombreJugador,
                  level:nivel,
                  attempts: intentos
              }
              if(datosGuardados == null){
                  var datosGuardados = [];
              }
              datosGuardados.push(jugadores);
          
           localStorage.setItem('jugadores', JSON.stringify(datosGuardados));
             var ranking = datosGuardados.length
              if(ranking > 3){
                  ranking = 3
              };

              for(var i = 0; i < ranking; i++){
                var datos = 
                ` <div class="valores">
                <div class="nombres"><p>${datosGuardados[i].name}</p></div><br>
                <div class="niveles"><p>${datosGuardados[i].level}</p></div><br>
                <div class="intentos"><p>${datosGuardados[i].attempts}</p></div>
                </div>`;
                $('#rankingJugadores').append(datos);
            }
      }   
    else if(pares != 6 && intentos > 12){
        $('#board').addClass('opacity');
        $('.lose').removeClass('hidden');
    }

    });
   
});

//expert level-----------------------------------------

$('#botonExperto').on('click',function(){
        if( nombreJugador == ''){
    $('#botonError').addClass('appear');
    $('#botonError p').removeClass('hidden');
    setTimeout(function(){
        $('#botonError p').addClass('hidden')
        $('#botonError').removeClass('appear')
    },3000)
        
        }
    else{
        var nivel = 'experto';
        var nombreJugador = $('#inputNombre').val();
        $('#saludarJugador').append('<span> ' + nombreJugador + '</span>');
        $('#main-container').addClass('hidden');
        $('#board').removeClass('hidden');
        $('#cantidadIntentos').html('9');
        $('#nivelElegido').html('EXPERTO');
    }
    //cards array

    var arr = ["imagenes/alce.jpg",
    "imagenes/epelante.jpg",
    "imagenes/nena.jpg",
    "imagenes/peces.jpg",
    "imagenes/unichancho.jpg",
    "imagenes/zapas.jpg",
    "imagenes/alce.jpg",
    "imagenes/nena.jpg",
    "imagenes/epelante.jpg",
    "imagenes/peces.jpg",
    "imagenes/zapas.jpg",
    "imagenes/unichancho.jpg"
    ];

    //ramdon function-------------------------------------

    function shuffle(arr) {
        var j
        var x
        var i
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    };

    shuffle(arr)

    //pushing cards and validation-------------------------
    
    var imgsLength = $('.tapadas').length
    for (var i = 0; i < imgsLength; i++) {
    $('.tapadas').eq(i).attr('data-cartas', arr[i])
    }

    $('.tapadas').on('click', function() {
    var visible = $(this).attr('data-cartas')
    $(this).attr('src', visible);
     $(this).addClass('girar');
    })

    //comparing cards-------------------------------------

    $('#volverAjugar').on('click',function(){
        location.reload();
    });
    $('#perdiste').on('click',function(){
        location.reload();
    }); 

    var clicks = 0;
    var primerClick
    var intentos = 0;
    var pares = 0;
    $('.cardsImg').on('click',function(){
    clicks = clicks + 1;

    if(clicks == 1){
        var id = $(this).children().attr('id');
        var img = $(this).children().attr('data-cartas')
        primerClick ={
            id:id,
            img:img
        }
        
    }  else{
            if (primerClick.img == $(this).children().attr('data-cartas') && primerClick.id != $(this).children().attr('id')) {
            $('#'+ primerClick.id).addClass('filter'); 
            $(this).addClass('filter');
            intentos = intentos + 1;
            $('#intentos').html('<span>' + intentos + '</span>')
            pares = pares + 1
        } else {
            intentos = intentos + 1;
            $('#intentos').html('<span>' + intentos + '</span>')
            var that = this
            setTimeout(function(){
                $('#'+ primerClick.id).attr('src',"imagenes/tapada.jpg").removeClass('girar');
                $(that).children().attr('src', "imagenes/tapada.jpg").removeClass('girar')
            },2000)
             }
            
        clicks = 0;
            }

     //if you won/lost
    
     if(pares == 6 && intentos < 10){
         $('.ranking').removeClass('hidden');
         $('#board').addClass('opacity');
        $('#intentosGanadores').html(intentos)
          var datosGuardados = JSON.parse(localStorage.getItem('jugadores'));
          var jugadores ={
                  name: nombreJugador,
                  level:nivel,
                  attempts: intentos
                 }
                if(datosGuardados == null){
                 datosGuardados = [];
                  }
                  datosGuardados.push(jugadores);
               localStorage.setItem('jugadores', JSON.stringify(datosGuardados));
                  
               var ranking = datosGuardados.length
                  if(ranking > 3){
                      ranking = 3
                  };
  
                  for(var i = 0; i < ranking; i++){
                    var datos = 
                    ` <div class="valores">
                    <div class="nombres"><p>${datosGuardados[i].name}</p></div><br>
                    <div class="niveles"><p>${datosGuardados[i].level}</p></div><br>
                    <div class="intentos"><p>${datosGuardados[i].attempts}</p></div>
                    </div>`;
                    $('#rankingJugadores').append(datos);
                }
        }
        else if(pares != 6 && intentos > 9){
            $('#board').addClass('opacity');
            $('.lose').removeClass('hidden');
        }
    
    });
     
});




