import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, Button } from '@ui-kitten/components';
//import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
//import { signInRequest } from '../../store/modules/actions/AuthActions';
import { Styles } from './styles';

function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  //const dispatch = useDispatch();
  const navigation = useNavigation();

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  function handleRegister(e) {
    e.preventDefault();
    //dispatch(signInRequest(email, password));
    navigation.navigate('LoginScreen');
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
      />
      <Input
        style={Styles.Input}
        label='Email'
        placeholder='email@email.com'
        value={email}
        onChangeText={nextValue => setEmail(nextValue)}
      />      
      <Input
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
