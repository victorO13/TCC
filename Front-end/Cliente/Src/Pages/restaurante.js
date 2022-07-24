import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native'

//STYLES
import styleGlobal from '../Styles/styleGlobal'
import styleRestaurante from '../Styles/styleRestaurante'
import colors from '../Styles/Colors/Colors'


//COMPONENTES
import ItemListRestaurante from '../Components/ItemListRestaurante'
import PageName from '../Components/PageName'

//SERVICES
import restauranteService from '../Services/restauranteService'

export default function RestauranteScreen({ route, navigation }) {

  const [listaRestaurante, setListaRestaurante] = useState([])
  const [listaRestauranteUpdate, setListaRestauranteUpdate] = useState(true)

  const cliente = route.params


  async function loadDados() {

    if (listaRestauranteUpdate) {
      await restauranteService.all().then((r) => {
        setListaRestaurante(r.restaurantes)
      })
        .catch((error) => { })
        .then(() => { setListaRestauranteUpdate(false) })
    }
  }

  useEffect(() => {
    loadDados()
  }, [listaRestauranteUpdate])



  function openReservas(restaurante) {
    //console.log(item)
    navigation.navigate('escolherMesa', { restaurante, cliente })
  }


  return (
    <View style={styleRestaurante.container}>
      <PageName name='RESTAURANTES' />
      <FlatList
        style={[styleGlobal.list]}
        data={listaRestaurante}
        keyExtractor={item => { return item.restaurante_codigo + '' }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={listaRestauranteUpdate}
            onRefresh={() => { setListaRestauranteUpdate(true) }}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>
          <ItemListRestaurante key={item.restaurante_codigo}
            nome={item.restaurante_fantasia}
            descricao={item.restaurante_descricao}
            star={3}
            func={() => { openReservas(item) }}
          />

        }
      />


    </View>
  )
}

