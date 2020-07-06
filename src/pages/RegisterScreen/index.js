import React, { useState, useRef } from 'react';
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { Icon, Input, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import Firebase from '../../Services/Firebase';
import { Styles } from './styles';

function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigation = useNavigation();

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  async function handleRegister(e) {

    if (email === '' || password === '' || name === '') {
      Alert.alert('Erro!', 'Entre com os dados corretos')
    } else {
      try {
        await Firebase.register(name, email, password);

        navigation.navigate('LoginScreen');

      } catch (err) {
        console.log(err);
        Alert.alert('Falha!', 'Cadastre corretamente!');
      }
    }
  }

  return (
    <View style={Styles.Container}>
      <Text style={Styles.Text}>Cadastre-se</Text>
      <Input
        style={Styles.Input}
        label='Nome'
        placeholder='Joe Doe'
        value={name}
        onChangeText={nextValue => setName(nextValue)}
        returnKeyType='next'
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <Input
        ref={emailRef}
        style={Styles.Input}
        label='Email'
        placeholder='email@email.com'
        keyboardType='email-address'
        value={email}
        onChangeText={nextValue => setEmail(nextValue)}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <Input
        ref={passwordRef}
        style={Styles.Input}
        value={password}
        label='Senha'
        placeholder='******'
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPassword(nextValue)}
      />
      <Button style={Styles.Button} appearance='outline' status='control' onPress={handleRegister}>
        Registrar
      </Button>
      <View style={Styles.ContainerButton}>
        <Button appearance='ghost' status='control' onPress={() => navigation.goBack()}>
          Cancelar
      </Button>
      </View>
    </View>
  );
}

export default RegisterScreen;
