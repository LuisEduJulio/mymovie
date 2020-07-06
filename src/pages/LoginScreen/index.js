import React, { useState, useRef } from 'react';
import { View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { Icon, Input, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import Firebase from '../../Services/Firebase';
import { Styles } from './styles';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [captionText, setCaptionText] = useState('');
  const navigation = useNavigation();

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  async function handleSingIn(e) {
    e.preventDefault();
    setLoading(true)

    if (email === '' || password === '') {
      setCaptionText('Informe seu email e senha!');
      setLoading(false);
    } else if (password.length <= 5) {
      setCaptionText('A Senha deve conter mais de 6 digitos!');
      setLoading(false);
    } else {
      setCaptionText('');

      try {
        await Firebase.login(email, password);
        setTimeout(() => setLoading(false), 6000);

        navigation.navigate('DefaultContainer');
      } catch (err) {
        console.log(err);
        setCaptionText('Dados Incorretos!');
        setLoading(false)
      }
    }

  }

  return (
    <View style={Styles.Container}>
      <Text style={Styles.Text}>Login</Text>
      {loading && <ActivityIndicator size='large' color='#FFF' />}
      <Input
        style={Styles.Input}
        label='Email'
        placeholder='email@email.com'
        value={email}
        onChangeText={value => setEmail(value)}
        returnKeyType='next'
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <Input
        style={Styles.Input}
        ref={passwordRef}
        value={password}
        label='Senha'
        placeholder='******'
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={value => setPassword(value)}
      />
      {<Text style={Styles.Caption}>{captionText}</Text>}
      <Button style={Styles.Button} appearance='outline' status='control' onPress={handleSingIn}>
        Entrar
      </Button>
      <View style={Styles.ContainerButton}>
        <Button appearance='ghost' status='control' onPress={() => navigation.navigate('RegisterScreen')}>
          Cadastre-se
      </Button>
      </View>
    </View>
  );
}

export default LoginScreen;
