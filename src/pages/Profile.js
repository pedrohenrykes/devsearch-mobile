import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation })
{
    const gitHubUser = navigation.getParam('github_user');

    return <WebView source={{ uri: `https://github.com/${gitHubUser}` }} style={{ flex: 1 }} />
}

export default Profile;