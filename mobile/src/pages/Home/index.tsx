import React, { useState } from 'react';
import  { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants';

import {  } from 'react-native';

import { View, 
        ImageBackground, 
        Text, 
        Image, 
        StyleSheet, 
        TextInput, 
        KeyboardAvoidingView, 
        Platform} 
        from 
        'react-native';

const Home = () => {

  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();
  
  function handleNavigateToPoints(){
    navigation.navigate('Points', {
      uf, city
    });
  }


    return ( 

      
        <KeyboardAvoidingView 
        
        style={{ flex: 1}} 
>
          
          <ImageBackground 
          source={require('../../assets/home-background.png')} 
          style={styles.container} 
          imageStyle={{ width: 274, height: 368}}>
             
              <View style={styles.main} >

              <Image style={styles.logoImg} source={require('../../assets/logo.png')} />                 
                  
                  <View>

                    <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                    <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>

                  </View> 

              </View>        

              <View style={styles.footer}>
               
                <TextInput 
                style={styles.input} 
                placeholder="UF" 
                value={uf} 
                onChangeText={setUf} 
                maxLength={2} 
                autoCorrect={false} 
                autoCapitalize="characters" />
                
                <TextInput 
                style={styles.input} 
                placeholder="Cidade" 
                value={city} 
                onChangeText={setCity} 
                autoCorrect={false} />

                <RectButton 
                style={styles.button} 
                onPress={handleNavigateToPoints}> 
                
                  <View style={styles.buttonIcon}>
                      
                    <Text >
                        <Icon name="arrow-right" color="#FFF" size={24} />
                    </Text>
                      
                  </View>

                  <Text style={styles.buttonText}>
                      Entrar
                  </Text>

                </RectButton>
                  
              </View>
              
          </ImageBackground>  


      </KeyboardAvoidingView>
        
      
    );
   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  logoImg: {
   marginTop: Constants.statusBarHeight - 50, // pra sumir a logo e evitar a sobreposição na statusbar
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20, // pra sumir a logo e evitar a sobreposição na statusbar
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});
export default Home; 

