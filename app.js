//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    console.log("Valor", input)
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor insira um nome válido');
        return;
    }

    amigos.push(nome);
    input.value = '';
    
    const lista = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    lista.appendChild(novoItem);
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione pelo menos um participante');
        return;
    }

    document.getElementById('listaAmigos').innerHTML = '';
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    document.getElementById('resultado').innerHTML = `
        <li>
            O amigo secreto sorteado é: 
            <span class="destaque">${amigos[indiceSorteado]}</span>
        </li>
    `;
}