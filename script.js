 var numero = 0

    function Adicionar() {
        numero++
        mostrarNaTela()
    }

    function Diminuir() {
        numero--
        mostrarNaTela()
    }

    function Zerar() {
        numero = 0
        mostrarNaTela()
    }

    function mostrarNaTela(){
        const p = document.querySelector("#result")
        p.innerHTML = numero
    }

    mostrarNaTela()  