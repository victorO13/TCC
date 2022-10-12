import React, { useState, useEffect } from 'react'
import {
  View,
  FlatList,
  RefreshControl
} from 'react-native'

//STYLES
import styleReservas from '../Styles/styleReservas'
import styleGlobal from '../Styles/styleGlobal'
import colors from '../Styles/Colors/Colors'


import dateFormat from '../Util/dateFormat'

//COMPONENTES
import PageName from '../Components/PageName'
import ItemListReserva from '../Components/ItemListReservas'

import reservaService from '../Services/reservaService'


export default function ReservasScreen({ route, navigation }) {

  const [listaReserva, setListaReserva] = useState([])
  const [listaReservaUpdate, setListaReservaUpdate] = useState(true)


  async function loadDados() {
    if (listaReservaUpdate) {
      await reservaService.findByRestaurante(route.params.restaurante_codigo)
        .then((r) => {

          setListaReserva(r.reservas)
        })
        .catch((error) => { })
        .then(() => { setListaReservaUpdate(false) })
    }


  }

  useEffect(() => {
    loadDados()
  }, [listaReservaUpdate])



  return (
    <View style={[styleReservas.container]}>

      <PageName name='Lista de Reservas' />

      <FlatList
        style={[styleGlobal.list, styleReservas.list]}
        data={listaReserva}
        keyExtractor={item => item.reserva_codigo.toString()}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={listaReservaUpdate}
            onRefresh={() => { setListaReservaUpdate(true) }}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>

          <ItemListReserva
            key={item.reserva_codigo}
            mes={dateFormat.getMont(item.reserva_data)}
            dia={dateFormat.getDayDateNoBrString(item.reserva_data)}
            hora={dateFormat.getHoraMin(item.reserva_data)}
            nomePessoa={item.cliente_nome}
            qtdPessoa={item.reserva_qtd_pessoas}
            reserva_codigo={item.reserva_codigo}
            nav={() => navigation.navigate('reservaMaisDetalhes', item)}
          >
          </ItemListReserva>
        }
      />

    </View>
  )
}