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


import colors from '../Styles/Colors/Colors'


//COMPONENTES
import PageName from '../Components/PageName'
import { FontAwesome } from '@expo/vector-icons'

//SERVICES
import reservaHasPratosService from '../Services/reservaHasPratosService'
import restauranteService from '../Services/restauranteService'



export default function ReservaMaisDetalhes({ route, navigation }) {

    const [listaPratosReserva, setListaPratosReserva] = useState([])
    const [listaPratosReservaUpdate, setListaPratosReservaUpdate] = useState(true)

    const [restaurante, setRestaurante] = useState({})
    const [restauranteUpdate, setRestauranteUpdate] = useState(true)

    const [pratoRender, setPratoRender] = useState(true)

    const [pratos, setPratos] = useState([])

    const [valorReserva, setValorReserva] = useState(0)



    const reserva = route.params


    async function loadDados() {
        if (restauranteUpdate) {
            await restauranteService.findByCodigo(reserva.reserva_restaurante_codigo)
                .then((r) => {
                    setRestaurante(r.restaurante)
                })
                .catch((error) => { })
                .then(() => { setRestauranteUpdate(false) })
        }

        if (listaPratosReservaUpdate) {
            await reservaHasPratosService.findByReserva(reserva.reserva_codigo)
                .then((r) => {
                    setPratos(r.reservasHasPratos)
                })
                .catch((error) => { })
                .then(() => {
                    setListaPratosReservaUpdate(false)

                })

        }
    }



    useEffect(() => {
        loadDados()
    }, [listaPratosReservaUpdate])


    useEffect(() => {
        let valor = 0
        let itensRender = []

        pratos.forEach(element => {
            valor = valor + element.prato_preco
            itensRender.push(
                <Text
                    key={element.reserva_has_prato_codigo}
                    style={styleDetalhesReserva.txtItensReservaItem}>
                    {element.prato_nome + ' - '}
                    <Text style={styleDetalhesReserva.txtItensReservaItemValor}>
                        {element.prato_preco + ' R$'}
                    </Text>
                </Text>)
            setValorReserva(valor)
            setPratoRender(itensRender)
        })

    }, [pratos])


    return (
        <View style={styleDetalhesReserva.container}>
            <PageName name='MAIS DETALHES' />
            <View style={styleDetalhesReserva.box}>
                <Text style={styleDetalhesReserva.restauranteTitle}>{restaurante.restaurante_fantasia}</Text>
                <View style={styleDetalhesReserva.boxBody}>
                    <Text style={styleDetalhesReserva.txtNumPessoas} onPress={() => { console.log(pratos) }}>NÚMERO DE PESSOAS</Text>

                    <View style={styleDetalhesReserva.boxNumPessoa}>
                        <Text style={styleDetalhesReserva.txtNumPessoasValue}>{reserva.reserva_qtd_pessoas}</Text>
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
                    <Text style={styleDetalhesReserva.txtItensReservaTitle}>PRATOS DA RESERVA</Text>
                    <ScrollView style={[{ maxHeight: '80%' }]}>
                        {pratoRender}
                    </ScrollView>

                </View>
            </View>

        </View>
    )
}

