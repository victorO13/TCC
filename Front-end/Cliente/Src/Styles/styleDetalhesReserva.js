import { StyleSheet } from 'react-native'


import colors from './Colors/Colors'

const styles = StyleSheet.create({
    container
        : {
        paddingTop: 35,
        backgroundColor: colors.backgroundView,
        width: '100%',
        height: '100%',


    },
    box: {
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 15,
        marginHorizontal: '10%',
        marginTop: 15,
        height: '70%',
        alignItems: 'center',
        width: '80%',
    },
    boxBody: {
        width: '100%',
        borderTopWidth: 2,
        borderTopColor: colors.secondary,
    },

    boxNumPessoa: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    boxValorReserva: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    restauranteTitle: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 15,
    },
    txtNumPessoas: {
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 15,
        color: colors.secondary,
    },
    txtNumPessoasValue: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 15,
        color: colors.primary,
        marginHorizontal: 10,
    },

    icon: {
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    txtValorReserva: {
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 15,
        color: colors.secondary,
    },
    txtValorReservaValue: {
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 15,
        color: colors.primary,
        marginHorizontal: 10,
    },
    txtItensReservaTitle: {
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 15,
        color: colors.secondary,
    },
    txtItensReservaItem: {
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 2,
        color: colors.primary,
    },
    txtItensReservaItemValor: {
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 2,
        color: colors.secondary,
    },


})

export default styles