var modal = document.getElementById("sidebar");

function openModal(){
    modal.style.display = "block";
}

function closeSidebar(){
    modal.style.display = "none";
}

function add(value_text){
    let value = parseInt(document.getElementById(value_text).value);
    value++;
    document.getElementById(value_text).value = value;
}

function minus(value_text){
    let value = parseInt(document.getElementById(value_text).value);
    if(value > 0){

        value--;
    }
    document.getElementById(value_text).value = value;
}








function bookNow(buttoned){
    let mars = parseInt(document.getElementById(buttoned).value);
    let tickets = parseInt(document.getElementById('ticket').innerHTML) + mars;
    document.getElementById('ticket').innerHTML=tickets;
 
}

