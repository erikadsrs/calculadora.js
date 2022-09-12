<!DOCTYPE html>
<html lang="pt-br">
    <header>
        <meta charset="UTF-8">
        <h1>Calculadora</h1><br>
        
    </header>
    <body>
        <h1>Vamos lá!</h1>
        <p>Insira os valores abaixo</p><br>
        <input id= number1 type= number  label= entrada1 ><br>
        <input id= number2 type= number label= entrada2 ><br>
        <button onclick= "somarInput();" > Somar </button>  
        <button onclick= "subtrairInput();" > Subtrair </button>  
        <button onclick= "multiplicarInput();" > Multiplicar </button>  
        <button onclick= "dividirInput();" > Dividir </button>
        <p>O Resultado é: <bold></bold> </p><br>

        <script>
            var n1 = document.querySelector('#number1');

            var n2 = document.querySelector('#number2');

            var resultado = document.querySelector('bold');
            
            function somarInput(){
                resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
            }

            function subtrairInput(){
                resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
            }

            function multiplicarInput(){
                resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
            }

            function dividirInput(){
                resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
            }
        </script>
        <p>Parabéns este é o seu primeiro projeto!</p><br>
    </body>
</html>
