import React, { Fragment } from 'react';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Styles } from './styles';


const SettingsIcon = (props) => (
    <Icon {...props} name='settings' />
);

export const Header = () => {
    const renderSettingsAction = () => (
        <TopNavigationAction icon={SettingsIcon}  style={Styles.Logo}/>
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

