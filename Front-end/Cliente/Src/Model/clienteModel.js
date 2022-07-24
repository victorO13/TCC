module.exports = class ClienteModel {

    constructor(cliente_nome,cliente_email,
        cliente_cpf, cliente_telefone,cliente_sexo,
        cliente_regiao,cliente_codigo = null){
        this.cliente_codigo = cliente_codigo
        this.cliente_nome = cliente_nome
        this.cliente_email = cliente_email
        this.cliente_cpf = cliente_cpf
        this.cliente_telefone = cliente_telefone
        this.cliente_sexo = cliente_sexo
        this.cliente_regiao = cliente_regiao
        
    }

    get getCodigo(){
        return this.cliente_codigo
    }
    
    get getNome(){
        return this.cliente_nome
    }

    get getEmail(){
        return this.cliente_email
    }

    get getCpf(){
        return this.cliente_cpf
    }

    get getTelefone(){
        return this.cliente_telefone
    }

    get getSexo(){
        return this.cliente_sexo
    }

    get getRegiao(){
        return this.cliente_regiao
    }
}