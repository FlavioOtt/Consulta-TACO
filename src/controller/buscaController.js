const buscaModel = require("../model/buscaModel");

const taco = require("../taco.json");

exports.get = async (alimento) => {
    let res = await buscarAlimentos(alimento);
    return res;
}

exports.especifico = async (params) => {
    let res = await buscaModel.especifico(params.id, params.unidade, params.quantidade);
    return res;
}

async function buscarAlimentos(nome){

    let res = false;

    if (nome){
        nome = nome[0].toUpperCase() + nome.substring(1);
    }
    
    res = await taco.filter(i => i.description.includes(nome));

    return res;
}

