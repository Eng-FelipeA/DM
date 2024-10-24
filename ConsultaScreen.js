import { Button, Text, View } from "react-native";
import React from "react";

export default function InicialScreen({ navigation }){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="<-" onPress={navigation.navigate('Inicial')}></Button>
            <Text>Consulta de usuário</Text>
            <Button title="CONSULTAR"></Button>
        </View>
    )
}