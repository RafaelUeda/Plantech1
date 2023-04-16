import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'
import { ScreenContainer } from 'react-native-screens'


var lux = 0;


fetch("192.168.43.205")
   .then(response => {
     console.log(response);
     lux = response.lux;
     return response.json();
   })
   .then(responseJson => {
     this.setState({ data: responseJson });
   });

export default ({ route, navigation }) => {
    const [planta] = useState(route.params ? route.params : {})
    return (
        <><View style={style.form}>
            <Text style={style.titulo}> {planta.nome} </Text>

        </View>

            <View style={style.container}>
                <Text style={style.rega}> Última Rega:   DD/MM/AA - 00:00 </Text>
                <Text style={style.rega}> Próxima Rega:   DD/MM/AA - 00:00 </Text>
            </View>

            <View style={style.form}>
                <Text style={style.titulo2}> Dados Dos Sensores </Text>

            <View style={style.form}>
                <Text style={style.sensores}> Umidade:     </Text>
                <Text style={style.sensores}> Luz:     </Text>
                <Text style={style.sensores}> pH:     </Text>

            </View>
                
        </View></>


    )
}

const style = StyleSheet.create({
    form: {
        marginTop: 20,
    },

    titulo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },

    container: {
        marginTop: 20,
        backgroundColor: "green",
        width: 250,
        left: 80,
       
        
    },

    rega: {
        marginTop: 5,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'left',
        
    },

    titulo2: {
        marginTop: 200,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    sensores: {
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'left',
        left: 80,
    },

    //Url Gota: https://cdn-icons-png.flaticon.com/512/31/31823.png
    //Url Sol: https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-sun-icon-png-image_384061.jpg
    //Url Sol2: https://cdn-icons-png.flaticon.com/512/3428/3428687.png
    //Url Ph: https://cdn-icons-png.flaticon.com/512/1260/1260771.png
})
