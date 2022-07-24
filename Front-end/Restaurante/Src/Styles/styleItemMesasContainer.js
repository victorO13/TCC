import { StyleSheet } from 'react-native'
import { add, color } from 'react-native-reanimated'

import colors from './Colors/Colors'

const styles = StyleSheet.create({
    box: {
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 10,
        padding: 10,
        alignItems: 'center'
    },

    txt: {
        fontSize: 20,
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    descricao: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary,
        padding: 5,
    },
    quant: {
        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        alignSelf: 'center',
    },

})

export default styles