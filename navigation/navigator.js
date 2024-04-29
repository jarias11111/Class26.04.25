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
    paddingVertical: 30, // Aumenté el relleno vertical
    paddingHorizontal: 20, // Ajusté el relleno horizontal
    backgroundColor: '#2a2aff', // Cambié el color de fondo
    justifyContent: 'center', // Centré el contenido verticalmente
    alignItems: 'center',
  },
  title: {
    marginTop: 20, // Aumenté el espacio superior
    paddingVertical: 12, // Aumenté el relleno vertical
    paddingHorizontal: 20, // Aumenté el relleno horizontal
    borderWidth: 3, // Aumenté el ancho del borde
    borderColor: '#ff2a2a', // Cambié el color del borde
    borderRadius: 10, // Aumenté el radio de borde
    backgroundColor: '#ffcc00', // Cambié el color de fondo
    color: '#ff0000', // Cambié el color del texto
    textAlign: 'center', // Centré el texto horizontalmente
    fontSize: 36, // Aumenté el tamaño de fuente
    fontWeight: 'bold',
  },
});

export default Nav;
