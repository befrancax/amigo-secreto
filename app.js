const resultList = document.getElementById('resultList')
const inputAmigo = document.getElementById('amigo')
const participantes = []

function adicionarParticipante() {
    const nome = inputAmigo.value
    
    if (nome === '') return alert('Campo vazio. Por favor, digite um nome.')
    
    if (participantes.includes(nome)) {
      inputAmigo.value = ''
      return alert('Este amigo já foi adicionado.')
    } 
    participantes.push(nome)
    inputAmigo.value = ''
    atualizarLista()    
}

function atualizarLista() {
    resultList.innerHTML = ''
    participantes.forEach(nome => {
        const item = document.createElement('p');
        const line = document.createElement('p')
        line.textContent = '----------------'
        item.textContent = nome
        resultList.appendChild(item)
        resultList.appendChild(line)
    });
}

document.querySelector('.button-post-user').addEventListener('click', () => {
  (participantes.length === 0) 
  ? alert('Nenhum amigo foi adicionado.')
  : alert(`O amigo sorteado foi: ${participantes[Math.floor(Math.random() * participantes.length)]}`)
})