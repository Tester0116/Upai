import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import QRCode from '../Screens/QRCode';
import Profile from '../Screens/Profile';
import Notification from '../Screens/Notification';
import styles from '../styles';
import {appAxios} from '../api';
import LoginNavigation from './Welcome';

export default function BottomBar() {
  const [Auth, setAuth] = React.useState(true);

  // React.useEffect(() => {
  //   appAxios
  //     .post('user/login')
  //     .then(({data, ...res}) => {
  //       if (data.result === 1) {
  //         setAuth(true);
  //       } else {
  //         setAuth(true);
  //       }
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }, []);
  const img = (
    <Image style={styles.wh20} source={require('../assets/HistoryIcon.png')} />
  );
  const home = (
    <Image style={styles.wh20} source={require('../assets/HomeIcon.png')} />
  );
  const notif = (
    <Image
      style={{width: 18, height: 21}}
      source={require('../assets/NotifIcon.png')}
    />
  );
  const profile = (
    <Image
      style={{width: 15, height: 21}}
      source={require('../assets/ProfileIcon.png')}
    />
  );
  const qr = (
    <View
      style={{
        width: 67,
        height: 67,
        borderRadius: 50,
        top: -40,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#FF6B00',
          width: 62,
          height: 62,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          // top: -30,
          paddingLeft: 1,
        }}>
        <Image
          style={{width: 38, height: 38}}
          source={require('../assets/QRIcon.png')}
        />
      </View>
    </View>
  );

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="??????????????"
      backBehavior="history"
      screenOptions={({route}) => ({
        tabBarStyle: {height: 60},
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          const rn = route.name;

          if (rn === 'QrCode') {
            iconName = qr;
          } else if (rn === '??????????????') {
            iconName = focused ? home : home;
          } else if (rn === '??????????????????????') {
            iconName = focused ? notif : notif;
          } else if (rn === '??????????????') {
            iconName = focused ? img : img;
          } else if (rn === '??????????????') {
            iconName = focused ? profile : profile;
          }
          return iconName;
        },
      })}>
      <Tab.Screen name="??????????????" component={Home} />
      <Tab.Screen name="??????????????????????" component={Notification} />
      <Tab.Screen name="QrCode" component={Profile} />
      <Tab.Screen name="??????????????" component={QRCode} />
      <Tab.Screen name="??????????????" component={Auth ? Profile : LoginNavigation} />
    </Tab.Navigator>
  );
}

// /* <Image resizeMode='contain' source={require('')}/> */
