import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import comunicacion from './comunicaciones/comunicacion';
import geolocal from './geolocalizacion/geolocalizacion';
import camara from './camara/camara';
import app from './navigation/navigator';
import almacenamiento from './almacenamiento/almacenamiento';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={app} options={{ title: 'Home' }} />
        <Stack.Screen name="Comunicacion" component={comunicacion} options={{ title: 'Comunicaciones' }} />
        <Stack.Screen name="Geolocalizacion" component={geolocal} options={{ title: 'Geolocalizacion' }} />
        <Stack.Screen name="Camara" component={camara} options={{ title: 'Camara' }} />
        <Stack.Screen name="Almacenamiento" component={almacenamiento} options={{ title: 'Almacenamiento' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
