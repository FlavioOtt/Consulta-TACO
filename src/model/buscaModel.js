const taco = require("../taco.json");

async function especifico(id_alimento, unidade, quantidade){

    let res = false;

    if (id_alimento && unidade && quantidade){

        let alimento = await taco.find(i => i.id == id_alimento);

        if (alimento) {
            let gramas = await isGramas(unidade);
            let kg = await isKg(unidade);

            if (quantidade == 0) return { message: "Quantidade não informada", error: true };

            if (quantidade == 100 && (gramas))
                return { message: "Alimento localizado", data: alimento, error: false };

            for (item in alimento){

                if (typeof(alimento[item]) == "number" && item != 'id'){

                    let valor = await alimento[item];
                    
                    if (gramas)
                        valor = (valor / 100.00) * parseFloat(quantidade);
                    else if (kg)
                        valor = (valor * 10.00) * parseFloat(quantidade);

                    alimento[item] = parseFloat(valor.toFixed(2));

                }
                    
            }

            res = { message: "Alimento localizado", data: alimento, error: false };
        }else
            res = { message: "Alimento não encontrado", error: true };

    }

    return res;

}

module.exports = { especifico };

async function isGramas(unidade){
    let res = false;
    
    if ((unidade.toLowerCase().includes("grama")) || (unidade.toLowerCase() == "g") || (unidade.toLowerCase() == "Gramas"))
        res = true;

    return res;
}

async function isKg(unidade){
    let res = false;
    
    if ((unidade.toLowerCase().includes("kilo")) || (unidade.toLowerCase() == "kg"))
        res = true;

    return res;
}
