import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Nav = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Camara" onPress={() => navigation.navigate('Camara')} />
      <Button title="Llamada" onPress={() => navigation.navigate('Comunicacion', { formType: 'call' })} />
      <Button title="Mensaje" onPress={() => navigation.navigate('Comunicacion', { formType: 'message' })} />
      <Button title="Correo" onPress={() => navigation.navigate('Comunicacion', { formType: 'email' })} />
      <Button title="Geolocalizacion" onPress={() => navigation.navigate('Geolocalizacion')} />
      <Button title="Almacenamiento" onPress={() => navigation.navigate('Alumnos')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#4aeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 4,
    borderColor: '#90912a',
    borderRadius: 6,
    backgroundColor: '#919afb',
    color: '#90292a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Nav;
