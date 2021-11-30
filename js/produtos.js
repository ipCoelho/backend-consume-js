"use strict";

const url = "http://10.107.131.29:8080/produtos";

const getProdutos = async () => {
    const response = await fetch(url);
    return response.json();
}

const postProdutos = (produto) => {
    const options = {
        method: "POST",
        body: JSON.stringify(produto),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(url, options);
}

const deleteProduto = (id) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(`${url}/${id}`, options);
}

const updateProduto = async (id) => {
    const response = await fetch(`${url}/${id}`);
    const json = response.json();
    console.log(json);
    
    // const options = {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }
    // fetch(`${url}/${id}`, options);
}

export { getProdutos, postProdutos, deleteProduto, updateProduto };