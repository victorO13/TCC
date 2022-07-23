import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Alert
} from 'react-native'

//STYLES
import styleGlobal from '../Styles/styleGlobal'
import stylePratos from '../Styles/stylePratos'
import colors from '../Styles/Colors/Colors'


//SERVICE
import pratoService from '../Services/pratoService'

//COMPONENTES
import ItemListPratos from '../Components/ItemListPratos'
import PageName from '../Components/PageName'

export default function PratosScreen({ route, navigation }) {
  const [listaPratos, setListaPratos] = useState([])
  const [listaPratosUpdate, setListaPratosUpdate] = useState(true)

  async function loadDados() {
    console.log(route.params.restaurante_codigo)
    if (listaPratosUpdate) {
      await pratoService.findByRestaurante(!route.params.restaurante_codigo ? route.params.prato_restaurante_codigo : route.params.restaurante_codigo)
        .then((p) => {
          setListaPratos(p.pratos)
        })
        .catch((error) => { })
        .then(() => { setListaPratosUpdate(false) })
    }
  }

  async function removePrato(prato) {

    Alert.alert(
      "Ops!",
      "Tem certeza que deseja remover este prato?",
      [
        {
          text: "NÃO",
          onPress: () => {
            return
          },
          style: "cancel"
        },
        {
          text: "SIM", onPress: () => {

            pratoService.delete(prato.prato_codigo)
            Alert.alert(
              "Sucesso!",
              "Prato removido com sucesso!",
              [
                { text: "OK", onPress: () => setListaPratosUpdate(true) }
              ],
              { cancelable: false }
            )

          }, style: "destructive"
        }
      ],
      { cancelable: false }
    )
    //navigation.navigate('pratos', prato)
  }

  useEffect(() => {
    loadDados()
  }, [listaPratosUpdate])

  return (
    <View style={stylePratos.container}>

      <PageName
        name='CARDÁPIO'
      />

      <FlatList
        style={styleGlobal.list}
        data={listaPratos}
        keyExtractor={item => item.prato_codigo.toString()}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={listaPratosUpdate}
            onRefresh={() => { setListaPratosUpdate(true) }}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>
          <ItemListPratos
            nome={item.prato_nome}
            descricao={item.prato_descricao}
            categoria={item.prato_categoria}
            quantidade={item.prato_quantidade}
            preco={item.prato_preco}
            funcEdit={() => navigation.navigate('editPratos', item)}
            funcRemove={() => removePrato(item)}
          >
          </ItemListPratos>
        }
      />
      <TouchableOpacity
        style={[styleGlobal.button]}
        onPress={() => navigation.navigate('cadastrarPratos', route.params)}>
        <Text style={styleGlobal.button}>CADASTRAR PRATOS</Text>
      </TouchableOpacity>
    </View>
  )
}