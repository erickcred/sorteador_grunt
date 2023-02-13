
document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();

        let inputNumber = document.getElementById("numero-maximo").value;
        inputNumber = parseInt(inputNumber);
        let numeroAleatorio = Math.floor((Math.random() * inputNumber) + 1);

        document.querySelector(".resultado").style.display = "block";        
        document.querySelector(".resultado span").innerText = numeroAleatorio;
    });

});

