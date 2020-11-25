import React from "react";
import { Alert, TextInput, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import * as S from "./styles";


const CadAnfi = () => {
  function handleNext() {
    Alert.alert("Salvo");
  }
  return (
    <S.Container>
   
    <S.ContentImage>
    <S.ButtonPhoto>
<MaterialIcons name="photo-camera" size={30} color= "#FFC249" />
</S.ButtonPhoto>
<Text style={{ fontWeight: 'bold', fontSize: 18 }}>
    Moana da Silva
    </Text>
    </S.ContentImage>

      <S.Detail />

      <S.Content>
        <S.TextInput placeholder={"Sua Cidade"} />
        <S.TextInput placeholder={"Seu email"} />
        <S.TextInput placeholder={"Seu Telefone"}/>
        <S.TextSobre placeholder={"Um pouco sobre você"} />
        <S.ButtonNext onPress={handleNext}>
          <S.ButtonNextText> Salvar </S.ButtonNextText>
        </S.ButtonNext>
      </S.Content>
    </S.Container>
  );
};

export default CadAnfi;
