import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import comunicacion from './comunicaciones/comunicacion';
import Geolocalizacion from './geolocalizacion/geolocalizacion';
import camara from './camara/camara';
import Nav from './navigation/navigator';
import Almacenamiento from './almacenamiento/almacenamiento';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Nav} options={{ title: 'Home' }} />
        <Stack.Screen name="Comunicacion" component={comunicacion} options={{ title: 'Comunicaciones' }} />
        <Stack.Screen name="Geolocalizacion" component={Geolocalizacion} options={{ title: 'Geolocalizacion' }} />
        <Stack.Screen name="Camara" component={camara} options={{ title: 'Camara' }} />
        <Stack.Screen name="Alumnos" component={Almacenamiento} options={{ title: 'Alumnos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
