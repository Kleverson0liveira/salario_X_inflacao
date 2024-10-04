import React from "react";
import { View,Text,ScrollView, ImageBackground } from "react-native";
//importando dados
import dados from '../../dados/dados';
//stylos
import styles from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Salarioinflacao(){
    return (
        <ScrollView>
            <View  style={styles.container}>
                <View style={[styles.colunas,styles.even]}>
                <Text style={styles.coluna}>Ano</Text>
                <Text style={styles.coluna}>Salario</Text>
                <Text style={styles.coluna}>Cresc. Salarial</Text>
                <Text style={styles.coluna}>Inflação</Text>
                <Text style={styles.coluna}>Status Salarial</Text>
                </View>
            </View>

            <View style={styles.container}>
               {dados.map((obj,ind) => (
               
                          
               <View style={[ind % 2 === 1 ? styles.even : styles.odd, styles.colunas ]}>    
                    <Text style={styles.coluna}>{obj.ano}</Text> 
                    <Text style={styles.coluna}>{obj.salario}</Text>
                    <Text style={styles.coluna}>{obj.crescimento_salarial}</Text>   
                    <Text style={styles.coluna}>{obj.inflacao}</Text>   
                    <View style={styles.coluna}>
                    {(obj.status_salarial !== "cima") ? (<AntDesign name="arrowdown" size={24} color="red" />) : (<AntDesign name="arrowup" size={24} color="green" />)} 
                    </View>   
                </View>
              
                ))}
            </View>
        </ScrollView>
    )
}