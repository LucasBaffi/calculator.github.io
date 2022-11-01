function calculater ()  {
    
    let d1 = document.querySelector('body');
d1.insertAdjacentHTML('afterend', `<div class="container">
<div class="div-container-main">
  <h1>calculator</h1>
  <p>Diferent calculator</p>
  <ol>
    <li>Digite os numeros nos quadrados</li>
    <li>Escolha a operação de que dejesa fazer</li>
    <li>clique no botao e veja o resultado</li>
  </ol>
  <select class="select" name="operação" id="">
  <option value="operation" selected>Escolha a Operação</option>
  <option class="Soma" value="Soma">Soma</option>
  <option value="Subtração">Subtração</option>
  <option value="Multiplicação">Multiplicação</option>
  <option value="Divisão">Divisão</option>
</select>
  <div class="div-container-input">
    <div class="div-input">
      <input class="inputNunber" type="number" />
      <span class="sinal"></span>
      <input class="inputNunber" type="number" />
    </div>
   
    <button class="calculo">Calcular</button>
  </div>
  <p>O resultado da operação é:</p>
  <p class="result"></p>
</div>
</div>`);

return d1
}

calculater()

