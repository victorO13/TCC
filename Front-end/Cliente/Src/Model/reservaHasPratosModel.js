module.exports = class ReservaHasPratosModel {

    constructor(reserva_has_prato_quant_prato,reserva_has_prato_reserva_codigo, reserva_data,
        reserva_has_prato_prato_codigo,reserva_has_prato_codigo = null){
            this.reserva_has_prato_quant_prato = reserva_has_prato_quant_prato
            this.reserva_has_prato_reserva_codigo = reserva_has_prato_reserva_codigo
            this.reserva_has_prato_prato_codigo =reserva_has_prato_prato_codigo
            this.reserva_has_prato_codigo = reserva_has_prato_codigo
    }

}
