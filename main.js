const form = document.querySelector('form')

form.addEventListener('submit',() => {
  
  var cadastro =  JSON.parse(localStorage.getItem('cadastro')) || [] //Cria um array para guardar os dados

  var name = document.querySelector('input#name').value
  var email = document.querySelector('input#email').value
  var product = document.querySelector('select#product').value

  var dados = {
    name,
    email,
    product
  }

  cadastro.push(dados) // Adiciona os dados ao array
  
  localStorage.setItem('cadastro', JSON.stringify(cadastro)) // JSON.stringify converte os dados de 'cadastro' que estão como string para o tipo JSON
})

