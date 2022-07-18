module.exports = class RestauranteModel {

    constructor(restaurante_nome, restaurante_email,
        restaurante_cnpj, restaurante_telefone, restaurante_fantasia,
        restaurante_regiao, restaurante_descricao, restaurante_codigo = null) {
        this.restaurante_codigo = restaurante_codigo
        this.restaurante_nome = restaurante_nome
        this.restaurante_email = restaurante_email
        this.restaurante_cnpj = restaurante_cnpj
        this.restaurante_telefone = restaurante_telefone
        this.restaurante_fantasia = restaurante_fantasia
        this.restaurante_regiao = restaurante_regiao
        this.restaurante_descricao = restaurante_descricao
    }

    get getCodigo() {
        return this.restaurante_codigo
    }

    get getNome() {
        return this.restaurante_nome
    }

    get getEmail() {
        return this.restaurante_email
    }

    get getCnpj() {
        return this.restaurante_cnpj
    }

    get getTelefone() {
        return this.restaurante_telefone
    }

    get getFantasia() {
        return this.restaurante_fantasia
    }

    get getRegiao() {
        return this.restaurante_regiao
    }

    get getDescricao() {
        return this.restaurante_descricao
    }
}