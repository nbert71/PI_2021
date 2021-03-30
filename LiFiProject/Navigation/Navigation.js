import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import Emission from "../Components/Emission";
import Reception from "../Components/Reception";
//import Test from "../Components/Test";

const Tab=createBottomTabNavigator();

class OptionTabNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#065FA4',
                        inactiveTintColor: '#64A0CF',
                        activeBackgroundColor: '#FFAD3F', // Couleur d'arrière-plan de l'onglet sélectionné
                        inactiveBackgroundColor: '#FFD9A6', // Couleur d'arrière-plan des onglets non sélectionnés
                        showLabel: false
                    }}
                >
                    <Tab.Screen
                        name="Emission"
                        component={Emission}
                        options={{
                            tabBarLabel: 'Émission',
                            tabBarIcon: ({ color, size }) => (
                                <Entypo name="flashlight" color={color} size={size+10} />
                            ),
                        }}

                    />
                    <Tab.Screen
                        name="Réception"
                        component={Reception}
                        options={{
                            tabBarLabel: 'Réception',
                            tabBarIcon: ({ color, size }) => (
                                <Entypo name="camera" color={color} size={size+10} />
                            ),
                        }}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default OptionTabNavigator