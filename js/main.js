"use strict";

import { openModal, closeModal } from "./modal.js";
import { getProdutos, postProdutos, deleteProduto, updateProduto } from "./produtos.js";
import { imagePreview } from "./imagePreview.js";

const criarLinhas = ( {id, nome, preco, categoria, foto} ) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>
            <img src="${foto}" class="produto-image"/>
        </td>
        <td>${nome}</td>
        <td>${preco}</td>
        <td>${categoria}</td>
        <td>
            <button type="button" class="button green" data-idproduto="${id}">editar</button>
            <button type="button" class="button red" data-idproduto="${id}">excluir</button>
        </td>
    `;
    return linha;
}

const loadProducts = async () => {
    const conteiner = document.querySelector('.records tbody');
    const produtos = await getProdutos();
    const linhas = produtos.map(criarLinhas);
    conteiner.replaceChildren(...linhas);
};

const handleFile = () => {
    imagePreview('inputFile', 'imagePreview')
}

const salvarProduto = () => {
    const produto = {
        nome: document.getElementById('product').value,
        preco: document.getElementById('price').value,
        categoria: document.getElementById('category').value,
        foto: document.getElementById('imagePreview').src
    }
    postProdutos(produto);
    closeModal();
    loadProducts();
}

const handleClickTbody = ( {target} ) => {
    if (target.type === 'button') {
        const acaoBotao = target.textContent.trim();

        switch (acaoBotao) {
            case 'excluir':
                deleteProduto(target.dataset.idproduto);
                loadProducts();
            break;

            case 'editar':
                updateProduto(target.dataset.idproduto);
         }
    }
}

loadProducts();






document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('cancel')
    .addEventListener('click', closeModal);

document.getElementById('inputFile')
    .addEventListener('change', handleFile);

document.getElementById('save')
    .addEventListener('click', salvarProduto);

document.querySelector('.records tbody')
    .addEventListener('click', handleClickTbody);