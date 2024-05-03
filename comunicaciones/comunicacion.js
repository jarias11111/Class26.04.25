import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Linking } from 'react-native';
import Communications from 'react-native-communications';

const Comunicacion = ({ route }) => {
  const { formType } = route.params;
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendSMS = () => {
    Communications.text(phoneNumber, message);
  };

  const handleSendEmail = () => {
    Communications.email([email], null, null, subject, emailBody);
  };

  const handleCall = () => {
    const formattedPhoneNumber = `tel:${phoneNumber}`;
    Linking.openURL(formattedPhoneNumber).catch((err) =>
      console.error('Error al abrir el enlace: ', err)
    );
  };

  return (
    <View style={styles.container}>
      {formType === 'call' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <Button title="Llamar" onPress={handleCall} />
        </View>
      )}
      {formType === 'message' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Mensaje de texto"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />
          <Button title="Enviar SMS" onPress={handleSendSMS} />
        </View>
      )}
      {formType === 'email' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Asunto"
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            style={styles.input}
            placeholder="Contenido del correo"
            value={emailBody}
            onChangeText={setEmailBody}
            multiline
            numberOfLines={4}
          />
          <Button title="Enviar Email" onPress={handleSendEmail} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffe5cc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff9933',
    color: '#663300'
  },
});

export default Comunicacion;
