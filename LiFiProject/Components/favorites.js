// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from "./FilmList";
import {connect} from "react-redux";

class Favorites extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <FilmList
                    films={this.props.favoritesFilm}
                    navigation={this.props.navigation}
                    type={'FAVORITE'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex:1
    }
})

const mapStateToProps =(state)=>{
    return{
        favoritesFilm : state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorites)