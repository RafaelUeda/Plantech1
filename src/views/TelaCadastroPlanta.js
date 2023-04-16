import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'


export default ({ route, navigation }) => {
    const [planta, setPlanta] = useState(route.params ? route.params : {})


    return (
        <View style={style.form}>
            <Text>Nome:</Text>
            <TextInput
                style={style.input}
                onChangeText={nome => setPlanta({...planta, nome}) }
                placeholder="Informe o Nome"
                value={planta.nome}
            />
            <Text>Tipo:</Text>
            <TextInput
                style={style.input}
                onChangeText={tipo => setPlanta({...planta, tipo}) }
                placeholder="Informe o Tipo de Planta"
                value={planta.tipo}
            />
            <Text>Data do Plantio:</Text>
            <TextInput
                style={style.input}
                onChangeText={dataP => setPlanta({...planta, dataP}) }
                placeholder="Informe a Data do Plantio"
                value={planta.dataP}
            />
            <Button 
                title="Salvar Planta"
                onPress={() => {
                    navigation.goBack()
            }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 0,
    }
})