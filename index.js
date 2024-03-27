

let inventory = new Object;



    inventory.id = "8745",
    inventory.name = "Deluxe",
    inventory.quantity = "8"



document.getElementById("resultsbtn").onclick = function(){
if(sch_in === inventory.id){
    document.getElementById("results").textContent = inventory.id ;
}
}


document.getElementById("displaytest").innerHTML = inventory.id +"   "+ inventory.name +"   "+ inventory.quantity ;








