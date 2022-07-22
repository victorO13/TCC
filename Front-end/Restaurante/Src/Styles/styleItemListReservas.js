import { StyleSheet } from 'react-native'

import colors from './Colors/Colors'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        margin: 4,
        width: '90%',
        flex: 1,
        backgroundColor: colors.backgroundItemList,
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: colors.primary,
        top: 10,
        flexDirection: 'row',
        marginVertical: 10

    },
    viewData: {
        flex: 1,
        borderRightColor: colors.primary,
        borderRightWidth: 2,
        justifyContent: 'center',//

    },
    viewHora: {
        flex: 3,
        padding: 10,
    },
    viewTopo: {
        flexDirection: 'row',
        flex: 1,

    },
    viewDetalhes: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 5,
        width: '100%',
    },
    viewItemDetalhe: {
        marginHorizontal: 10,
    },
    data_mes: {
        textAlign: 'center',
        borderRadius: 12,
        backgroundColor: colors.primary,
        color: colors.fontColorPrimary,
        padding: 2,
        marginVertical: 10,
        marginHorizontal: 15,
        overflow: 'hidden',
        fontWeight: 'bold',
        fontSize: 15,
    },
    data_nome_dia: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    data_dia: {
        fontWeight: 'bold',
        fontSize: 55,
        textAlign: 'center',
    },
    data_hora: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    nome: {
        marginVertical: 10,
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    txtPratos: {
        marginTop: 10,
        marginBottom: 10,
        color: colors.secondary,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    IconPratos: {
        fontSize: 18,
        backgroundColor: colors.primary,
        borderRadius: 15,
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 4,
        flexDirection: 'row',
        marginHorizontal: 4,
    },
    txtIcon: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingHorizontal: 5,
        color: colors.fontColorPrimary,
    },
    txtMostrarMais: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.secondary,
        marginTop: 5,
        marginHorizontal: 10
    },
    iconDelete: {
        paddingHorizontal: 5,
    },

})

export default styles 