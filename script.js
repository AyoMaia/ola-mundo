 var numero = 0

    function Adicionar() {
        numero = numero +1
        console.log(numero)
        mostrarNaTela()
    }

    function mostrarNaTela(){
        const p = document.querySelector("#result")
        p.innerHTML = numero
    }

    mostrarNaTela()  