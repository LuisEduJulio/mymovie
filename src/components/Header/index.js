import React, { Fragment } from 'react';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Firebase from '../../Services/Firebase';
import { Styles } from './styles';

const SettingsIcon = (props) => (
    <Ionicons {...props} name='ios-settings' color='#FFF' size={25} />
);
const LogoutIcon = (props) => (
    <MaterialCommunityIcons name="logout" size={24} color="#FFF" />
);

export const Header = () => {
    const navigation = useNavigation();

    function handlePerfil() {
        navigation.navigate('PerfilScreen')
    }
    
    function handleLogout() {
        Firebase.logout();
        navigation.navigate('AuthContainer')
    }

    const renderSettingsAction = () => (
        <Fragment>
            <TopNavigationAction icon={SettingsIcon} onPress={handlePerfil} />
            <TopNavigationAction icon={LogoutIcon} onPress={handleLogout} />
        </Fragment>
    );

    return (
        <Fragment>
            <TopNavigation
                accessoryRight={renderSettingsAction}
                style={Styles.container}
            />
        </Fragment>
    );
};

