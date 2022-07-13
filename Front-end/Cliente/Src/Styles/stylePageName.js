import { StyleSheet } from 'react-native'


import colors from './Colors/Colors'

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    icon
        : {
        width: 70,
        height: 70
    },
    text: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
});

export default styles