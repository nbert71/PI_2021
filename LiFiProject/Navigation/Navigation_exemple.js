
import 'react-native-gesture-handler'
import  React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {Image, StyleSheet, Text} from 'react-native'
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";
import Favorites from "../Components/favorites";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Entypo from "react-native-vector-icons/Entypo";

const Stack_Search=createStackNavigator();
const Tab=createBottomTabNavigator();
const Stack_Favoris=createStackNavigator();

class SearchStackNavigation extends React.Component{

    render(){
        return (
            <Stack_Search.Navigator initialRouteName="Rechercher">
                <Stack_Search.Screen name="Rechercher" component={Search} />
                <Stack_Search.Screen name="FilmDetail" component={FilmDetail} />
            </Stack_Search.Navigator>
        )
    }
}

class FavorisStackNavigation extends React.Component{
    render(){
        return(
            <Stack_Favoris.Navigator initialRouteName="Favoris">
                <Stack_Favoris.Screen name="Favoris" component={Favorites}/>
                <Stack_Search.Screen name="FilmDetail" component={FilmDetail} />
            </Stack_Favoris.Navigator>
        )
    }
}

class MoviesTabNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#ff6347',
                        inactiveTintColor: 'gray',
                        activeBackgroundColor: '#dddddd', // Couleur d'arrière-plan de l'onglet sélectionné
                        inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
                        showLabel: false
                    }}
                >
                    <Tab.Screen
                        name="Recherche"
                        component={SearchStackNavigation}
                        options={{
                            tabBarLabel: 'Rechercher',
                            tabBarIcon: ({ color, size }) => (
                                <Entypo name="magnifying-glass" color={color} size={size+10} />
                            ),
                        }}

                    />
                    <Tab.Screen
                        name="Favoris"
                        component={FavorisStackNavigation}
                        options={{
                            tabBarLabel: 'Favoris',
                            tabBarIcon: ({ color, size }) => (
                                <Entypo name="heart" color={color} size={size+10} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default MoviesTabNavigator