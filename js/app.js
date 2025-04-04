let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    // Validação do nome do amigo
    if (!amigo.value || amigo.value.trim() === '') {
        alert("Por favor, insira um nome de amigo válido.");
        return;
    }

    // Validação de nomes repetidos
    if (amigos.includes(amigo.value.trim())) {
        alert("Nome já adicionado!");
        return;
    }

    amigos.push(amigo.value.trim());
    if (lista.textContent == '') {
        lista.textContent = amigo.value.trim();
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value.trim();
    }
    amigo.value = '';
}

function sortear() {
    // Validação da quantidade de amigos
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

// Função para embaralhar o array de amigos usando Fisher-Yates
function embaralha(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';  
}
