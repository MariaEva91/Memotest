
//Intro: pedir nombre y validarlo. Sino introduce nombre, tira cartel de error

var nombreJugador = $('#inputNombre').val();

//nivel facil

$('#botonFacil').on('click',function(){
    
    var nivel = 'facil';
    console.log(nivel);
var nombreJugador = $('#inputNombre').val();
     if( nombreJugador == ''){
        $('#botonError').addClass('appear');
     $('#botonError p').removeClass('hidden');
     // funcioncita que me muestre el cartel de error por determinado tiempo
     setTimeout(function(){
        $('#botonError p').addClass('hidden')
        $('#botonError').removeClass('appear')
    },3000)
     }
    else{
       // console.log(nombreJugador);
        $('#saludarJugador').append('<span> ' + nombreJugador + '</span>');
        //funcion para ocultar cartel de intro y hacer aparecer el tablero
        $('#main-container').addClass('hidden');
       $('#board').removeClass('hidden');
       $('#cantidadIntentos').html('18');
       $('#nivelElegido').html('FACIL');
    }
    //el array de las cartas

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

 //Funcion ramdom para reordenar las cartas

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

 //Cargar las cartas dadas vueltas, y que al hacer click se me muestren y giren.
    

    var imgsLength = $('.tapadas').length
    for (var i = 0; i < imgsLength; i++) {
    $('.tapadas').eq(i).attr('data-cartas', arr[i])
    }

    $('.tapadas').on('click', function() {
    var visible = $(this).attr('data-cartas')
    $(this).attr('src', visible)
    //agregar clase para que gire.
    $(this).addClass('girar');
    })

//Comparar las cartas al hacerles click

var clicks = 0;
var primerClick
var intentos = 0;
var pares = 0;

//funcion para volver a jugar

$('#volverAjugar').on('click',function(){
    console.log('11');
    location.reload();
});
$('#perdiste').on('click',function(){
    console.log('11');
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
           // console.log('iguales')
            $('#'+ primerClick.id).addClass('filter');
            $(this).addClass('filter');
            intentos = intentos + 1;
            $('#intentos').html('<span>' + intentos + '</span>')
          //  console.log('son la misma carta');
           pares = pares + 1
        //   console.log(pares)
        } else {
           // console.log('distintas')
            console.log('son dos cartas distintas')
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
    //nivel facil. Para decir si ganaste o perdiste

    if( pares == 6 && intentos < 19){
       // console.log('ganaste')
        $('.ranking').removeClass('hidden');
        $('#board').addClass('opacity');
        $('#intentosGanadores').html(intentos)
        //guardar partida en ranking(local storage)
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
                console.log(datosGuardados);

                var ranking = datosGuardados.length
                if(ranking > 3){
                    ranking = 3
                };

                for(var i = 0; i < ranking; i++){
                    console.log(ranking);
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
             console.log('perdiste')
             $('#board').addClass('opacity');
             $('.lose').removeClass('hidden');
         } 
        });

    });

//nivel intermedio

$('#botonIntermedio').on('click', function(){
    var nivel = 'intermedio';
    console.log(nivel);
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
       $('#saludarJugador').append('<span> ' + nombreJugador + '</span>');
       $('#main-container').addClass('hidden');
       $('#board').removeClass('hidden');
       $('#cantidadIntentos').html('12');
       $('#nivelElegido').html('INTERMEDIO');
   }
   //el array de las cartas

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

//Funcion ramdom para reordenar las cartas

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

//Cargar las cartas dadas vueltas, y que al hacer click se me muestren y giren
   

   var imgsLength = $('.tapadas').length
   for (var i = 0; i < imgsLength; i++) {
   $('.tapadas').eq(i).attr('data-cartas', arr[i])
   }

   $('.tapadas').on('click', function() {
   var visible = $(this).attr('data-cartas')
   $(this).attr('src', visible)
    //agregar clase para que gire.
    $(this).addClass('girar');
   })

//Comparar las cartas al hacerles click

$('#volverAjugar').on('click',function(){
    console.log('11');
    location.reload();
});
$('#perdiste').on('click',function(){
    console.log('11');
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
           //console.log('son dos cartas distintas')
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
         //nivel intermedio. Ganar o perder.

    if(pares == 6 && intentos < 13){
        console.log('ganaste')
        $('.ranking').removeClass('hidden');
        $('#board').addClass('opacity');
        $('#intentosGanadores').html(intentos)
          //guardar partida en ranking
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
              console.log(datosGuardados);

              var ranking = datosGuardados.length
              if(ranking > 3){
                  ranking = 3
              };

              for(var i = 0; i < ranking; i++){
                console.log(ranking);
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
        console.log('perdiste');
        $('#board').addClass('opacity');
        $('.lose').removeClass('hidden');
    }

    });
   
});

//nivel experto

$('#botonExperto').on('click',function(){
    var nivel = 'experto';
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
        console.log(nombreJugador);
        $('#saludarJugador').append('<span> ' + nombreJugador + '</span>');
        $('#main-container').addClass('hidden');
        $('#board').removeClass('hidden');
        $('#cantidadIntentos').html('9');
        $('#nivelElegido').html('EXPERTO');
    }
    //el array de las cartas

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

    //Funcion ramdom para reordenar las cartas

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

    //Cargar las cartas dadas vueltas, y que al hacer click se me muestren y giren
    

    var imgsLength = $('.tapadas').length
    for (var i = 0; i < imgsLength; i++) {
    $('.tapadas').eq(i).attr('data-cartas', arr[i])
    }

    $('.tapadas').on('click', function() {
    var visible = $(this).attr('data-cartas')
    $(this).attr('src', visible);
     //agregar clase para que gire.
     $(this).addClass('girar');
    })
         //Comparar las cartas al hacerles click

    $('#volverAjugar').on('click',function(){
        console.log('11');
        location.reload();
    });
    $('#perdiste').on('click',function(){
        console.log('11');
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

     //nivel experto. Ganar o perder.
    
     if(pares == 6 && intentos < 10){
            console.log('ganaste')
            $('.ranking').removeClass('hidden');
            $('#board').addClass('opacity');
            $('#intentosGanadores').html(intentos)
              //guardar partida en ranking
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
                  console.log(datosGuardados);
  
                  var ranking = datosGuardados.length
                  if(ranking > 3){
                      ranking = 3
                  };
  
                  for(var i = 0; i < ranking; i++){
                    console.log(ranking);
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
            console.log('perdiste');
            $('#board').addClass('opacity');
            $('.lose').removeClass('hidden');
        
        }
    
    });
     
});




