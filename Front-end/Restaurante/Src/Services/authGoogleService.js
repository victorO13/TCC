import * as Google from 'expo-google-app-auth'
import restauranteService from './restauranteService'

const autenticacao = {

    async auth(navigation) {

        const { type, accessToken, user } = await Google.logInAsync({
            iosClientId: '179926731713-1ldueco2s1u4d39fd1mccv21f5gon68k.apps.googleusercontent.com',
            androidClientId: '179926731713-7rm5fqi9vvifepskvjd9d317p5ehpofl.apps.googleusercontent.com'
        })

        if (type === 'success') {
            //consulta no banco e ve o email
            restauranteService.findByEmail(user.email)
            .then((result)=>{
                if(result.notExist){
                    navigation.navigate('finalizarCadastroRestaurante', { user })
                }else if(typeof result.restaurante != "undefined" ){
                    navigation.navigate('main', result.restaurante )
                }
            })
        } else {
            return { status: false }
        }
    },

}


export default autenticacao