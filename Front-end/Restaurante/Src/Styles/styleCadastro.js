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
    txtIcon:
    {
        bottom: 45
    },
    txt:
    {
        color: colors.primary,
        fontSize: 16,
        paddingLeft: 10
    },
    icon
        : {
        bottom: 12,
        width: 80,
        height: 80
    },
    icon2
        : {
        right: 130,
    },
    Btn
        : {
        top: 33,
        backgroundColor: colors.primary,
        color: colors.backgroundView,
        borderRadius: 16,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        fontSize: 18,
        margin: 10
    },
    ViwInput
        : {
        width: 310,
        bottom: 1
    },
    imput
        : {
        height: 40,
        borderColor: colors.primary,
        color: colors.primary,
        backgroundColor: colors.backgroundInput,
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 5,
        paddingLeft: 10,
        textAlign: 'left'
    },
    dropdown
        : {
        backgroundColor: colors.backgroundInput,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 14

    },
    dropdown_label
        : {
        color: colors.primary
    },
    dropdown_Container
        : {
        height: 40,
        marginBottom: 3
    },
    dropdown_item
        : {
        justifyContent: 'flex-start',
        backgroundColor: colors.backgroundInput,
        marginBottom: 15
    },
    dropdown_style
        : {
        backgroundColor: colors.backgroundInput,
        borderColor: colors.primary,
        borderWidth: 2,

    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: colors.backgroundInput,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 5,

    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: colors.primary
    },
});

export default styles