import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, Button } from '@ui-kitten/components';
//import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
//import { signInRequest } from '../../store/modules/actions/AuthActions';
import { Styles } from './styles';

function LoginScreen() {
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

  function handleSingIn(e) {
    e.preventDefault();
    //dispatch(signInRequest(email, password));
    navigation.navigate('DefaultContainer');
  }

  return (
    <View style={Styles.Container}>
      <Text style={Styles.Text}>Login</Text>
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
      <Button style={Styles.Button} appearance='outline' status='control' onPress={handleSingIn}>
        Entrar
      </Button>
      <View style={Styles.ContainerButton}>
        <Button appearance='ghost' status='control' onPress={() => navigation.navigate('EditPassword')}>
          Esqueceu a senha?
      </Button>
        <Button appearance='ghost' status='control' onPress={() => navigation.navigate('Register')}>
          Cadastre-se
      </Button>
      </View>
    </View>
  );
}

export default LoginScreen;
