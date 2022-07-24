import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native'

//STYLES
import styleGlobal from '../Styles/styleGlobal'
import styleMesas from '../Styles/styleMesas'
import colors from '../Styles/Colors/Colors'

//COMPONENTES
import PageName from '../Components/PageName'
import ItemListMesas from '../Components/ItemListMesas'

//SERVICE
import mesaService from '../Services/mesaService'
//UTIL
import dateFormat from '../Util/dateFormat'


export default function MesaScreen({ route, navigation }) {
  const [listaMesas, setListaMesas] = useState([])
  const [listaMesasUpdate, setListaMesasUpdate] = useState(true)
  console.log('lista ->', route);

  async function loadDados() {
    if (listaMesasUpdate) {
      await mesaService.findByRestaurante(route.params.restaurante_codigo)
        .then((m) => {
          setListaMesas(m.mesas)
        })
        .catch((error) => { })
        .then(() => { setListaMesasUpdate(false) })
    }
  }

  async function removeMesa(mesa) {

    Alert.alert(
      "Ops!",
      "Tem certeza que deseja remover esta mesa?",
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

            mesaService.delete(mesa.mesa_codigo)
            Alert.alert(
              "Sucesso!",
              "Mesa removida com sucesso!",
              [
                { text: "OK", onPress: () => setListaMesasUpdate(true) }
              ],
              { cancelable: false }
            )

          }, style: "destructive"
        }
      ],
      { cancelable: false }
    )
  }

  useEffect(() => {
    loadDados()
  }, [listaMesasUpdate])


  return (
    <View style={[styleMesas.container, { height: '100%' }]}>

      <PageName
        name='MESAS'
      />

      <FlatList
        style={[styleGlobal.list]}
        data={listaMesas}
        keyExtractor={item => item.mesa_codigo.toString()}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={listaMesasUpdate}
            onRefresh={() => { setListaMesasUpdate(true) }}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>
          <ItemListMesas
            hora={dateFormat.getHoraMin(item.mesa_data_hora)}
            mes={dateFormat.getMont(item.mesa_data_hora)}
            dia={dateFormat.getDayDateNoBrString(item.mesa_data_hora)}
            mesa={item.mesa_quant_mesas}
            pessoa={item.mesa_quant_pessoas}
            funcEdit={() => navigation.navigate('editMesas', item)}
            funcDelete={() => removeMesa(item)}
          />

        }
      />

      <TouchableOpacity
        style={[styleGlobal.button]}
        onPress={() => navigation.navigate('cadastrarMesas', route.params)}
      >
        <Text style={styleGlobal.button}>CADASTRAR MESAS</Text>
      </TouchableOpacity>

    </View>
  )
}