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
        marginVertical: 10,
    },
    viewData: {
        flex: 1,
        borderRightColor: colors.primary,
        borderRightWidth: 2,
        justifyContent: 'center',//

    },
    viewBody: {
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
    viewRodape: {
        flexDirection: 'row',
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
        fontSize: 24,
        textAlign: 'center',
    },
    data_dia: {
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },
    data_hora: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    txtDisponibilidade: {
        marginVertical: 8,
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    IconPessoa: {
        fontSize: 18,
        backgroundColor: colors.primary,
        borderRadius: 18,
        flexDirection: 'row',
        width: '35%',
        justifyContent: 'center',
        padding: 4,
    },
    txtIcon: {
        paddingHorizontal: 8,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.fontColorPrimary,
    },
    buttonsFunc: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: '35%'


    },
    btnFun: {
        paddingHorizontal: 2,
    },



})

export default styles 