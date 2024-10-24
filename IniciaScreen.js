import { Button, Text, View } from "react-native";
import React from "react";

export default function InicialScreen({ navigation }){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Página Inicial</Text>
            <Button title="IR PARA CADASTRO" onPress={()=>navigation.navigate('Cadastro')}></Button>
            <Button title="IR PARA CONSULTA" onPress={()=>navigation.navigate('Consulta')}></Button>
        </View>
    )
}