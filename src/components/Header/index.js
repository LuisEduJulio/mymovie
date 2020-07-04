import React, { Fragment } from 'react';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';

const SettingsIcon = (props) => (
    <Ionicons {...props} name='ios-settings' color='#FFF' size={25} />
);

export const Header = () => {
    const navigation = useNavigation();

    function handlePerfil() {
        navigation.navigate('Perfil')
    }
    const renderSettingsAction = () => (
        <TopNavigationAction icon={SettingsIcon} onPress={handlePerfil} />
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

