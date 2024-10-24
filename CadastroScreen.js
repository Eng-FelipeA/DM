import React from "react";
import { Button, TextInput, View } from "react-native";

export default function CadastroScreen({ navigation }){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="<-" onPress={navigation.navigate('Inicial')}></Button>
            <Text>Cadastro de Usuário</Text>
            <TextInput placeholder="Digite seu nome"></TextInput>
            <TextInput placeholder="Digite seu e-mail"></TextInput>
            <TextInput placeholder="Senha"></TextInput>
            <Button title="CADASTRAR"></Button>
        </View>
    )
}