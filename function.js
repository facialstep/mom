Object.defineProperty(window, "home", {
    get: function () {
        console.log("https://jackokeeffe.xyz/")
    }
  }); 

var count = 0


function popup(){
    if (count == 0){
        document.getElementById("popup").style.display = "block";
        count++;
    } else {
        document.getElementById("popup").style.display = "none";
        count--;
    }
   
}