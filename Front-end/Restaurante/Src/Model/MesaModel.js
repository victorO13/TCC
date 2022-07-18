module.exports = class MesaModel {

    constructor(mesa_data,mesa_hora,mesa_quant_pessoas,
        mesa_quant_mesas,mesa_restaurante_codigo,mesa_user,mesa_codigo = null){
        
        this.mesa_hora = mesa_hora
        this.mesa_data = mesa_data
        this.mesa_quant_pessoas = mesa_quant_pessoas
        this.mesa_quant_mesas = mesa_quant_mesas
        this.mesa_restaurante_codigo= mesa_restaurante_codigo
        this.mesa_user = mesa_user
        this.mesa_codigo = mesa_codigo
    }

    getCodigo(){
        return this.restaurante_codigo
    }
    
    getRestaurante(){
        return this.mesa_restaurante_codigo
    }

    getHora(){
       return this.mesa_hora
    }

    getData(){
       return this.mesa_data
    }

    getPessoa(){
        return this.mesa_quant_pessoas
    }

    getMesa(){
        return this.mesa_quant_mesas
    }
}