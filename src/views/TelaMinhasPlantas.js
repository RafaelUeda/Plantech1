import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Icon, ListItem, Text, Avatar } from 'react-native-elements';
import PlantasContext from '../context/PlantaContext';
import plantas from '../data/plantas'
import { ListItemSubtitle } from '@rneui/base/dist/ListItem/ListItem.Subtitle';

export default props => {


    console.log(plantas)
    const { state } = useContext(PlantasContext)

    /*function getActions(planta) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('Cadastrar Planta', planta)}
                    type='clear'
                    icon={<Icon name="edit" size={25} color="green"/>}
                />
            </>
        )
    }*/

    const getPlantaItem = ({ item: planta }) => (
        //return <Text>{planta.nome}</Text>


        plantas.map((planta) => (
            <ListItem key={planta.id} bottomDivider onPress={() => props.navigation.navigate('TelaPlanta', planta)}>
                <Avatar source={{ uri: planta.iconUrl }} />

                <ListItem.Content>
                    <ListItem.Title>{planta.nome}</ListItem.Title>
                    <ListItemSubtitle>{planta.tipo}</ListItemSubtitle>
                    <ListItemSubtitle>{planta.status}</ListItemSubtitle>

                </ListItem.Content>
            </ListItem>

        ))


        /*<ListItem
        
        //leftAvatar={{ source: { uri: planta.iconUrl } }}
        //key={planta.id}
        //title={planta.nome}
        //subtitle={planta.tipo}
        //bottomDivider
        //rightElement={getActions(planta)}
        //onPress={() => props.navigation.navigate('TelaPlanta', planta)}
        />
        //<Avatar source={{ uri: user.avatarUrl }} /> */
    )



    return (
        <View>
            <FlatList
                keyExtractor={planta => planta.id.toString()}
                data={plantas}
                renderItem={getPlantaItem}
            />
        </View>
    )
}