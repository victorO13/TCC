import { StyleSheet } from 'react-native'


import colors from './Colors/Colors'

const styles = StyleSheet.create({
    container
        : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundView,
    },
    txt:
    {
        color: colors.primary,
        fontSize: 16,
        paddingLeft: 10
    },

    icon2
        : {
        right: 53
    },
    txtIcon:
    {
        bottom: 45
    },
    ViwInput
        : {
        width: 310,
        bottom: 30
    },
    imput
        : {
        height: 25,
        borderColor: colors.primary,
        color: colors.colorText,
        borderBottomWidth: 2,
        marginBottom: 20,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        fontSize: 15,
        paddingLeft: 10,
        textAlign: 'left'
    },
    itemEdit
        : {
        left: 135,
        bottom: 10

    }
});

export default styles