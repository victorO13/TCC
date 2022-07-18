module.exports = class MesaModel {

    constructor(prato_nome, prato_categoria, prato_quantidade, prato_preco,
        prato_descricao, prato_restaurante_codigo, prato_user,prato_codigo=null){
            this.prato_nome = prato_nome,
            this.prato_categoria = prato_categoria
            this.prato_quantidade = prato_quantidade,
            this.prato_preco = prato_preco,
            this.prato_descricao = prato_descricao,
            this.prato_restaurante_codigo = prato_restaurante_codigo,
            this.prato_user = prato_user,
            this.prato_codigo = prato_codigo
    }

}