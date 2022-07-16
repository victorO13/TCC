import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//STYLES
import styleGlobal from '../Styles/styleGlobal'

//import authGoogle from '../services/authGoogleService'

export default function LoginScreen({ navigation }) {
  return (
    <View style={styleGlobal.container}>
      <View style={styleGlobal.view}>
        <Image style={styleGlobal.icon} source={require('../../assets/icon.png')} />
      </View>

      <View style={styleGlobal.view}>
        <TouchableOpacity
          style={styleGlobal.button}
          onPress={() => navigation.navigate('finalizarCadastro')}
        >
          <Text style={styleGlobal.button}>LOGIN COM GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}