module.exports = class ReservaModel {


    constructor(reserva_cliente_codigo,reserva_mesa_codigo,
        reserva_restaurante_codigo, reserva_data,
        reserva_qtd_pessoas,reserva_pratos,reserva_codigo = null){
        this.reserva_codigo = reserva_codigo
        this.reserva_cliente_codigo = reserva_cliente_codigo
        this.reserva_mesa_codigo = reserva_mesa_codigo
        this.reserva_restaurante_codigo = reserva_restaurante_codigo
        if(reserva_data != null){
            this.reserva_data = reserva_data
        }
        this.reserva_qtd_pessoas = reserva_qtd_pessoas   
        this.reserva_pratos = reserva_pratos     
    }
}
