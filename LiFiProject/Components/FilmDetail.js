// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView , Image, TouchableOpacity} from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'
import { getImageFromApi} from "../API/TMDBApi"
import moment from 'moment'
import numeral from 'numeral'
import {connect} from "react-redux";

class FilmDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        let indice_ds_favo=this.props.favoritesFilm.findIndex(item => item.id === this.props.route.params.idFilm)
        if (indice_ds_favo!== -1){
            console.log("Recupéré ds favoris")
            this.setState({
                film: this.props.favoritesFilm[indice_ds_favo],
                isLoading:false
            })
        }
        else{
            console.log("Recupéré ds API")
            getFilmDetailFromApi(this.props.route.params.idFilm).then(data => {
                this.setState({
                    film: data,
                    isLoading: false
                })
            })
        }
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _languageTitle(){
        if (this.state.film.title != this.state.film.original_title){
            return (
                <Text style={styles.titre_original}> Titre original : {this.state.film.original_title} </Text>
            )
        }

    }

    _toggleFavorite(){
        const action={type:'TOGGLE_FAVORITE', value:this.state.film}
        this.props.dispatch(action)
    }

    _displayFavoriteImage() {
        var sourceImage = require('../Images/ic_favorite_border.png')
        if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
            // Film dans nos favoris
            sourceImage = require('../Images/ic_favorite.png')
        }
        return (
            <Image
                style={styles.favorite_image}
                source={sourceImage}
            />
        )
    }

    _displayFilm() {
        const film=this.state.film
        if (film != undefined) {
            return (
                <ScrollView style={styles.scrollview_container}>

                    <Image
                        style={styles.image}
                        source={{uri: getImageFromApi(film.backdrop_path)}}/>

                    <View style={{alignItems:'center'}}>
                        <Text style={styles.titre}> {film.title} </Text>
                        {this._languageTitle()}
                    </View>
                    <TouchableOpacity
                        style={styles.favorite_container}
                        onPress={() => this._toggleFavorite()}>
                        {this._displayFavoriteImage()}
                    </TouchableOpacity>
                    <Text style={styles.description}> {film.overview} </Text>
                    <Text style={styles.info}> Sorti le : {moment(new Date(film.release_date)).format('D/M/YYYY')}</Text>
                    <Text style={styles.info}> Note : {film.vote_average} /10 </Text>
                    <Text style={styles.info}> Budget : {numeral(film.budget).format('0,0[.]00 $')} </Text>
                    <Text style={styles.info}>Genre(s) : {film.genres.map(function(genre){
                        return genre.name;
                    }).join(" / ")}
                    </Text>
                    <Text style={styles.info}>Companie(s) : {film.production_companies.map(function(company){
                        return company.name;
                    }).join(" / ")}
                    </Text>

                </ScrollView>
            )
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayFilm()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image:{
        height:169,
        margin:5
    },
    titre :{
        fontSize : 30,
        fontWeight : 'bold',
        color:'#000000',
        textAlign:'center'
    },
    titre_original:{
        fontSize:10,
        fontStyle:'italic',
        color:'#4a4a4a',
        textAlign:'center'
    },
    description :{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        marginBottom:20
    },
    info:{
        margin:5
    },
    favorite_container: {
        alignItems: 'center'
    },
    favorite_image: {
        width: 40,
        height: 40
    }
})

const mapStateToProps = (state) => {
    return {
        favoritesFilm:state.favoritesFilm
    }
}

export default connect(mapStateToProps)(FilmDetail)