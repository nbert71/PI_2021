import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import Torch from 'react-native-torch'

class Search extends React.Component{
    render(){
        return (
            <View style={{marginTop:20}}>
                <Button title='Switch On/Off' color='green' onPress={() => changer_etat_lampe()}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#ff0000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

let etat_lampe=false;

const changer_etat_lampe= () => {
    if (etat_lampe) {
        Torch.switchState(false);
        etat_lampe=false;
    } else {
        Torch.switchState(true);
        etat_lampe=true;
    }
}

export default Search