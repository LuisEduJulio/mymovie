import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, Button, Spinner } from '@ui-kitten/components';
import { Styles } from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

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
        value={Password}
        label='Senha'
        placeholder='******'
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPassword(nextValue)}
      />
      <Button style={Styles.Button} appearance='outline' status='control'>
        Entrar
      </Button>
      <View style={Styles.ContainerButton}>
        <Button appearance='ghost' status='control'>
          Esqueceu a senha?
      </Button>
        <Button appearance='ghost' status='control'>
          Cadastre-se
      </Button>
      </View>
    </View>
  );
}

export default Login;
