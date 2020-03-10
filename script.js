//1a llamada a la API 
fetch("./patronus.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    showGame(data)
  });
  //2a llamada a API desde el botón juego nuevo
  $("#new-button").click(function() {
    fetch("./patronus.json")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      showGame(data)
      $(".square").css("background-color", "rgb(86, 93, 148")
    })
  })

  //función general envolvente
  function showGame(data){

    //tablero vacío donde se guardarán los clicks del user
    var steps = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
    ]
    
    //Random para elegir el patrón o dibujo del tablero que se muestra para jugar
    let a = (Object.keys(data));
    let picRandom = Math.floor(Math.random (a)*9);
    let b = a[picRandom]
    console.log(b);
  
    // Bucle para rellenar las pistas en los laterales del tablero 
    for(let i =0; i < data[b].clue.length; i++){
      
      document.getElementById(i).innerHTML = data[b].clue[i].join("")
    }
    
    let comprobar = (()=>{
      //RECORREMOS TODO EL ARRAY vacío que se llenará con los clicks del user
      for(i=0; i < steps.length; i++){
        for(j=0; j < steps[i].length; j++){
          //AJUSTAMOS EL VALOR DE STEPS (2o color vale lo mismo que el color blanco (0) del patron del dibujo)
          let valor = steps[i][j];
          if(valor === 2){
            valor = 0;
          }
          //SI ES DISTINTO QUE EL ORIGNAL NO HAS GANADO TODAVÍA
          if(valor !== data[b].bn[i][j]){
            return false;
          }
        }
      }
      return true;
    })
    
    $('.square').click(function(){
      let id = $(this).attr("id");
     
      
      //PASO 1
      //HAS HECHO CLICK ALGUNA VEZ
      if(steps[id[0]] [id[1]] === 0){
        
        steps[id[0]] [id[1]] = 1;
        
      }else if(steps[id[0]] [id[1]] === 1) {
        steps[id[0]] [id[1]] = 2;
      }else{
        steps[id[0]] [id[1]] = 0;
      }
      //la representación en el tablero de los clicks del user
      if(steps[id[0]] [id[1]] === 1){
        $(this).css("background-color", "black");
      }else if(steps[id[0]] [id[1]] === 2){
        $(this).css("background-color", "#46b967");
      }else{
        $(this).css("background-color", "rgb(86, 93, 148)");
      }
      //Final del juego si lo que devuelve la función comprobar() es true --> se coloriza el patrón en la función colorize()
      if(comprobar() === true){
        colorize();
        setTimeout(()=>{
          $("#finalpartida").click()
        }, 100)
        confetti.start()
        setTimeout(()=>{
          confetti.stop()
        }, 3000)
      }
    });
    function colorize(){
      let patroncl = data[b].color;
      console.log(patroncl.length);
      for(let i=0; i < patroncl.length; i++){
        for(let j=0; j < patroncl[i].length; j++){
          let temporalId = "#" + String(i) + String(j);
          $(temporalId).css("background-color", patroncl[i][j]);
        }
      }
      
    }  
    
  }



