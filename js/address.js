'use strict';

const preencherFormalario = (address) => {
    document.getElementById('address').value = address.logradouro;
    document .getElementById('neighborhood').value = address.bairro;
    document.getElementById('city').value = address.localidade;
    document.getElementById('state').value = address.uf;
}

const pesquisarCep = async () => {
    const cep = document.getElementById('zipcode').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const address = await dados.json();
    preencherFormalario(address);
}

document.getElementById('zipcode')
        .addEventListener('focusout', pesquisarCep);