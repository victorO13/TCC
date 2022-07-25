import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'

//ICONS
import { Octicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

//STYLES
import styleEscolherMesa from '../Styles/styleEscolherMesa'
import styleGlobal from '../Styles/styleGlobal'
import colors from '../Styles/Colors/Colors'

//COMPONENTES
import ItemListReservasMesa from '../Components/ItemListReservasEscolherMesa'
import PageName from '../Components/PageName'

//SERVICES
import mesaService from '../Services/mesaService'

//UTIL
import dateFormat from '../Util/dateFormat'

export default function RestauranteScreen({ route, navigation }) {

  const [qtdPessoa, setQtdPessoa] = useState(0)

  const params = route.params
  const restaurante = params.restaurante
  const cliente = params.cliente


  const [listaMesa, setListaMesa] = useState([])
  const [listaMesaUpdate, setListaMesaUpdate] = useState(true)

  async function loadDados() {

    if (listaMesaUpdate) {
      await mesaService.findByRestauranteDisponivelFilterQtdPessoa(restaurante.restaurante_codigo, qtdPessoa)
        .then((r) => {
          setListaMesa(r.mesas)
        })
        .catch((error) => { })
        .then(() => { setListaMesaUpdate(false) })

    }
  }

  useEffect(() => {
    loadDados()
  }, [listaMesaUpdate])

  async function downQtdPessoa() {
    if (qtdPessoa > 0) {
      setQtdPessoa(qtdPessoa - 1)
    }
    setListaMesaUpdate(true)
  }
  async function upQtdPessoa() {
    setQtdPessoa(qtdPessoa + 1)
    setListaMesaUpdate(true)
  }


  return (
    <View style={styleEscolherMesa.container}>

      <PageName name='ESCOLHER MESA' />


      <View style={styleEscolherMesa.box}>
        <Text style={styleEscolherMesa.txt}>NÚMERO MÁXIMO DE PESSOAS</Text>
        <Text style={styleEscolherMesa.descricao}>(COM MAIS DE 4 ANOS)</Text>
        <View style={{ flexDirection: 'row-reverse', alignSelf: 'center' }}>
          <TouchableOpacity zIndex={0} onPress={() => upQtdPessoa()}>
            <Octicons name="diff-added" size={35} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styleEscolherMesa.quant}>{qtdPessoa} {<FontAwesome name="user" size={30} color={colors.primary} />}</Text>

          <TouchableOpacity zIndex={-1} onPress={() => downQtdPessoa()} >
            <Octicons name="diff-removed" size={35} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={[styleGlobal.list]}
        data={listaMesa}
        keyExtractor={item => { return item.mesa_codigo + '' }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={listaMesaUpdate}
            onRefresh={() => { setListaMesaUpdate(true) }}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>
          <ItemListReservasMesa
            key={item.mesa_codigo}
            hora={dateFormat.getHoraMin(item.mesa_data_hora)}
            mes={dateFormat.getMont(item.mesa_data_hora)}
            dia={dateFormat.getDayDateNoBrString(item.mesa_data_hora)}
            quantMesa={item.mesa_quant_mesas}
            quantPessoa={item.mesa_quant_pessoas}
            func={() => { navigation.navigate('escolherPratos', { restaurante, cliente, item }) }}
          />
        }
      />



    </View>
  )
}

