import React from "react";
import { View,Text,ScrollView, ImageBackground } from "react-native";
//importando dados
import dados from '../../dados/dados';
//stylos
import styles from "./styles";


export default function Inflacao(){
    return (
        <ScrollView>
            <View  style={styles.container}>
                <View style={[styles.colunas,styles.even]}>
                <Text style={styles.coluna}>Ano</Text>
                <Text style={styles.coluna}>Inflação</Text>
                </View>
            </View>

            <View style={styles.container}>
               {dados.map((obj,ind) => (
               
                          
               <View style={[ind % 2 === 1 ? styles.even : styles.odd, styles.colunas ]}>    
                    <Text style={styles.coluna}>{obj.ano}</Text> 
                    <Text style={styles.coluna}>{obj.inflacao}</Text>    
                </View>
              
                ))}
            </View>
        </ScrollView>
    )
}