import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import Torch from 'react-native-torch'

class Search extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 300 }}>
                <Button height color="green" title='ON' onPress={() => Torch.switchState(true) } />
                <Button color="red" title='OFF' onPress={() => Torch.switchState(false) } />
            </View>
        )
    }
}


export default Search