//importacao extrutural
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//importacao  de componentes
import Salario from "./componentes/Salario";
import Inflacao from "./componentes/Inflacao";
import Salarioinflacao from "./componentes/SalarioInflacao";
//importacao icones
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
//criacao menu
const Tab = createBottomTabNavigator();


//função que renderiza o menu
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle:{
          fontSize: 13,
          fontWeight: 'bold',
        }
      }}>
        <Tab.Screen name="Salário" component={Salario} options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="dollar" size={20} color={color} />
          )
        }} />
        <Tab.Screen name="Inflação" component={Inflacao} options={{
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="arrow-trend-up" size={20} color={color} />
          )
        }} />
        <Tab.Screen name="Salário x Inflação" component={Salarioinflacao} options={{
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="arrow-right-arrow-left" size={20} color={color} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    );
    }