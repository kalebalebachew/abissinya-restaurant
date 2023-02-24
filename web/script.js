function valid(){
    if(document.getElementById("pn").value.length > 10 && document.getElementById("pn").value.length < 10){
    alert("Invalid Phone number")
  }
  if(document.getElementById("fd").value == "top"){
    alert("You must select one food from the list.")
  }
}
function calc(){
    let doro = 120;
    let ketfo = 300;
    let tibs = 270;
    let bur = 300;
    let pizza = 300;
    let shwa = 100;
    if(document.getElementById("fd").value == "doro"){
        document.getElementById("tt").value =  (document.getElementById("it").value * doro)
    }
    if(document.getElementById("fd").value == "kitfo"){
      document.getElementById("tt").value =  (document.getElementById("it").value * ketfo)
      }
      if(document.getElementById("fd").value == "tibs"){
          document.getElementById("tt").value =  (document.getElementById("it").value * tibs)
      }
      if(document.getElementById("fd").value == "humb"){
          document.getElementById("tt").value =  (document.getElementById("it").value * bur)
      }
      if(document.getElementById("fd").value == "pizza"){
          document.getElementById("tt").value =  (document.getElementById("it").value * pizza)
      }
      if(document.getElementById("fd").value == "shawa"){
          document.getElementById("tt").value =  (document.getElementById("it").value * shwa)
      }
      
}
/*HOURS
Monday: Closed
Tuesday-Thursday: 2PM-10PM
Friday-Sunday: 12PM-10PM
OPENED FOR INDOOR DINE IN AND TAKE OUT ONLY!
*Reservations are highly recommended* */