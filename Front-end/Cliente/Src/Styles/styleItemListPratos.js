import { StyleSheet } from 'react-native'
import colors from './Colors/Colors'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        margin: 4,
        padding: 10,
        width: '90%',
        flex: 1,
        backgroundColor: colors.backgroundItemList,
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: colors.primary
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 15,
        marginTop: -30,
        width: '85%',
    },
    descricao: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.secondary,
    },
    categoria: {
        marginTop: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.secondary,
    },
    qtdPessoas: {
        marginTop: 3,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.secondary,
    },
    start: {
        flexDirection: 'row',
        marginTop: 10,
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: -40
    },
})

export default styles