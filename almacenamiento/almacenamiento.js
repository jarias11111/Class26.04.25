import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const almacenamiento = () => {
  const [newStudent, setNewStudent] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    curso: ''
  });
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    curso: ''
  });

  const addStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ nombre: '', apellido: '', edad: '', curso: '' });
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const editStudent = (index) => {
    setEditingIndex(index);
    const studentToEdit = students[index];
    setEditedStudent({ ...studentToEdit });
  };

  const saveEditedStudent = () => {
    const updatedStudents = [...students];
    updatedStudents[editingIndex] = editedStudent;
    setStudents(updatedStudents);
    setEditingIndex(null);
    setEditedStudent({ nombre: '', apellido: '', edad: '', curso: '' });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={newStudent.nombre}
          onChangeText={(text) => setNewStudent({ ...newStudent, nombre: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={newStudent.apellido}
          onChangeText={(text) => setNewStudent({ ...newStudent, apellido: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={newStudent.edad}
          onChangeText={(text) => setNewStudent({ ...newStudent, edad: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Curso"
          value={newStudent.curso}
          onChangeText={(text) => setNewStudent({ ...newStudent, curso: text })}
        />
        <Button title="Agregar" onPress={addStudent} />
      </View>
      {editingIndex !== null && (
        <View style={styles.editForm}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={editedStudent.nombre}
              onChangeText={(text) => setEditedStudent({ ...editedStudent, nombre: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              value={editedStudent.apellido}
              onChangeText={(text) => setEditedStudent({ ...editedStudent, apellido: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Edad"
              value={editedStudent.edad}
              onChangeText={(text) => setEditedStudent({ ...editedStudent, edad: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Curso"
              value={editedStudent.curso}
              onChangeText={(text) => setEditedStudent({ ...editedStudent, curso: text })}
            />
          </View>
          <Button title="Guardar" onPress={saveEditedStudent} />
        </View>
      )}
      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.studentItem}>
            <Text style={styles.studentInfo}>{`Nombre: ${item.nombre}`}</Text>
            <Text style={styles.studentInfo}>{`Apellido: ${item.apellido}`}</Text>
            <Text style={styles.studentInfo}>{`Edad: ${item.edad}`}</Text>
            <Text style={styles.studentInfo}>{`Curso: ${item.curso}`}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => editStudent(index)}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => deleteStudent(index)}>
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30, // Aumenté el espacio vertical
    backgroundColor: 'lightblue'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30, // Aumenté el espacio horizontal
    backgroundColor: 'lightgreen'
  },
  input: {
    width: '80%', // Reduje el ancho del input
    padding: 15, // Aumenté el relleno
    marginBottom: 20, // Aumenté el espacio inferior
    borderWidth: 2, // Aumenté el ancho del borde
    borderColor: 'blue', // Cambié el color del borde
    borderRadius: 10, // Aumenté el radio de borde
    backgroundColor: 'lightyellow',
  },
  studentItem: {
    marginBottom: 20, // Aumenté el espacio inferior
    padding: 20, // Aumenté el relleno
    borderWidth: 2, // Aumenté el ancho del borde
    borderColor: 'blue', // Cambié el color del borde
    borderRadius: 10, // Aumenté el radio de borde
    backgroundColor: 'lightpink',
  },
  studentInfo: {
    fontSize: 18, // Aumenté el tamaño de fuente
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centré los botones horizontalmente
    marginTop: 20,
  },
  button: {
    paddingVertical: 15, // Aumenté el relleno vertical
    paddingHorizontal: 30, // Aumenté el relleno horizontal
    backgroundColor: 'orange', // Cambié el color de fondo
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18, // Aumenté el tamaño de fuente
    fontWeight: 'bold', // Hice el texto en negrita
    color: 'white',
  },
  editForm: {
    width: '80%', // Reduje el ancho del formulario de edición
    borderWidth: 2, // Aumenté el ancho del borde
    borderColor: 'blue', // Cambié el color del borde
    borderRadius: 10, // Aumenté el radio de borde
    padding: 20, // Aumenté el relleno
    marginTop: 20, // Aumenté el espacio superior
    backgroundColor: 'lightgrey',
  },
  inputContainer: {
    marginBottom: 20,
  },
});

export default almacenamiento;