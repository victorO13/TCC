import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native'

//STYLES
import styleDetalhesReserva from '../Styles/styleDetalhesReserva'
import styleGlobal from '../Styles/styleGlobal'
import colors from '../Styles/Colors/Colors'


//COMPONENTES
import PageName from '../Components/PageName'
//ICON
import { FontAwesome } from '@expo/vector-icons'
//MOEL
import reservaModel from '../Model/reservaModel'
//SERVICE
import reservaService from '../Services/reservaService'

export default function DetalhesReservaScreen({ route, navigation }) {

  const params = route.params
  const mesa = route.params.mesa
  const cliente = route.params.cliente
  const restaurante = route.params.restaurante
  const pratos = route.params.pratos

  const itens = route.params.pratos
  let itensRender = []

  let valorReserva = 0


  for (let i = 0; i < itens.length; i++) {
    valorReserva = valorReserva + itens[i].prato_preco
    itensRender.push(
      <Text key={i} style={styleDetalhesReserva.txtItensReservaItem}>
        {itens[i].prato_nome + ' - '}
        <Text style={styleDetalhesReserva.txtItensReservaItemValor}>
          {itens[i].prato_preco + ' R$'}
        </Text>
      </Text>
    )
  }


  async function finalizarReserva() {
    let reservaModelo = new reservaModel(cliente.cliente_codigo,
      mesa.mesa_codigo, restaurante.restaurante_codigo,
      mesa.mesa_data_hora, mesa.mesa_quant_mesas, mesa.mesa_quant_pessoas, pratos)
    reservaService.reservaAndPratos(reservaModelo)
      .then(result => {
        Alert.alert(
          "Sucesso!",
          "Reserva efetuada com sucesso!",
          [
            { text: "OK", onPress: () => navigation.navigate('main') }
          ],
          { cancelable: false }
        )
        //navigation.navigate('main')
      })

  }


  return (
    <View style={styleDetalhesReserva.container}>

      <PageName name='DETALHES RESERVA' />
      <View style={styleDetalhesReserva.box}>
        <Text style={styleDetalhesReserva.restauranteTitle}>Restaurante do seu Ze</Text>
        <View style={styleDetalhesReserva.boxBody}>
          <Text style={styleDetalhesReserva.txtNumPessoas}>NÚMERO DE PESSOAS</Text>

          <View style={styleDetalhesReserva.boxNumPessoa}>
            <Text style={styleDetalhesReserva.txtNumPessoasValue}>{mesa.mesa_quant_pessoas}</Text>
            <FontAwesome style={styleDetalhesReserva.icon} name="user" size={30} color={colors.primary} />
          </View>
        </View>
        <View style={styleDetalhesReserva.boxBody}>
          <View style={styleDetalhesReserva.boxValorReserva}>
            <Text style={styleDetalhesReserva.txtValorReserva}>VALOR DA RESERVA</Text>
            <Text style={styleDetalhesReserva.txtValorReservaValue}>{valorReserva + ' R$'}</Text>
          </View>
        </View>
        <View style={[styleDetalhesReserva.boxBody, { flex: 1 }]}>
          <Text style={styleDetalhesReserva.txtItensReservaTitle}>ITENS DA RESERVA</Text>
          <ScrollView style={[{ maxHeight: '80%' }]}>
            {itensRender}
          </ScrollView>

        </View>
      </View>
      <TouchableOpacity
        style={[styleGlobal.button, { marginHorizontal: '20%' }]}
        onPress={() => { finalizarReserva() }}
      >
        <Text style={styleGlobal.button}>FINALIZAR</Text>
      </TouchableOpacity>

    </View>
  )
}

