
# Consulta a TACO

Esta simples API foi feita para consultar os dados da tabela TACO, que está em um JSON interno, seu diferencial é que você pode enviar a quantidade e a unidade de medida, sendo gramas ou kilos.




## Documentação da API

### Alimentos relacionados
Retorna todos os alimentos relacionados ao parametro passado.

```http
  GET /geral
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `alimento` | `string` | **Obrigatório**. O nome parcial do alimento que deseja buscar |

### Retorna um alimento e seus macros

```http
  GET /especifico
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id_alimento`      | `number` | **Obrigatório**. O ID do alimento que você quer. |
| `quantidade`      | `number` | A quantidade do alimento que você quer. |
| `unidade`      | `string` | A unidade de medida do alimento que você quer, pode ser gramas ou kilos. |



## Instalação

Instale com npm, inicie o cmd na raiz e use

```bash
  npm install 
```
    
## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm start
```

