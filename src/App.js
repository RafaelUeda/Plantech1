import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TelaCadastroPlanta from './views/TelaCadastroPlanta'
import TelaMinhasPlantas from './views/TelaMinhasPlantas'
import { Button, Icon } from 'react-native-elements'
import { PlantasProvider } from './context/PlantaContext'
import TelaPlanta from './views/TelaPlanta'

const Stack = createStackNavigator()

export default props => {
    return (
        <PlantasProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='TelaMinhasPlantas'
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="Minhas Plantas"
                        component={TelaMinhasPlantas}
                        options={({ navigation }) => {
                            return {
                                title: "Minhas Plantas",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("Cadastrar Planta")}
                                        type='clear'
                                        icon={<Icon name="add" size={30} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="Cadastrar Planta"
                        component={TelaCadastroPlanta}
                        options={{
                            title: "Cadastro de Plantas"
                        }}
                    />

                    <Stack.Screen
                        name="TelaPlanta"
                        component={TelaPlanta}
                        options={{
                            title: "Detalhes"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PlantasProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#008000'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',

    }
}