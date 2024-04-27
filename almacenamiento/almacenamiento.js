import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


class Almacenamiento extends Component {
  state = {
    alumnos: [
      { nombre: 'Jorge Edgar', apellido: 'Rojas', edad: 25, curso: '5to Semestre' },
      { nombre: 'Ernestina', apellido: 'Caldez', edad: 22, curso: '3er Semestre' }
    ],
    nuevoAlumno: {
      nombre: '',
      apellido: '',
      edad: '',
      curso: ''
    },
    alumnoEditar: null
  };


  agregarAlumno = () => {
    const { alumnos, nuevoAlumno } = this.state;
    this.setState({
      alumnos: [...alumnos, nuevoAlumno],
      nuevoAlumno: { nombre: '', apellido: '', edad: '', curso: '' }
    });
  };

  editarAlumno = (index) => {
    const { alumnos } = this.state;
    const alumnoEditar = { ...alumnos[index] };
    this.setState({ alumnoEditar });
  };

  guardarCambios = () => {
    const { alumnos, alumnoEditar } = this.state;
    const alumnosModificados = alumnos.map((alumno) => {
      if (alumno.nombre === alumnoEditar.nombre && alumno.apellido === alumnoEditar.apellido) {
        return alumnoEditar;
      }
      return alumno;
    });
    this.setState({ alumnos: alumnosModificados, alumnoEditar: null });
  };

  borrarAlumno = (index) => {
    const { alumnos } = this.state;
    const alumnosRestantes = alumnos.filter((_, i) => i !== index);
    this.setState({ alumnos: alumnosRestantes });
  };

  render() {
    const { alumnos, nuevoAlumno, alumnoEditar } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nuevoAlumno.nombre}
          onChangeText={(text) => this.setState({ nuevoAlumno: { ...nuevoAlumno, nombre: text } })}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={nuevoAlumno.apellido}
          onChangeText={(text) => this.setState({ nuevoAlumno: { ...nuevoAlumno, apellido: text } })}
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={nuevoAlumno.edad}
          onChangeText={(text) => this.setState({ nuevoAlumno: { ...nuevoAlumno, edad: text } })}
        />
        <TextInput
          style={styles.input}
          placeholder="Curso"
          value={nuevoAlumno.curso}
          onChangeText={(text) => this.setState({ nuevoAlumno: { ...nuevoAlumno, curso: text } })}
        />
        <Button title="Agregar" onPress={agregarAlumno} />
       
        {alumnoEditar !==null && (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={alumnoEditar.nombre}
              onChangeText={(text) => this.setState({ alumnoEditar: { ...alumnoEditar, nombre: text } })}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              value={alumnoEditar.apellido}
              onChangeText={(text) => this.setState({ alumnoEditar: { ...alumnoEditar, apellido: text } })}
            />
            <TextInput
              style={styles.input}
              placeholder="Edad"
              value={alumnoEditar.edad.toString()}
              onChangeText={(text) => this.setState({ alumnoEditar: { ...alumnoEditar, edad: parseInt(text) } })}
            />
            <TextInput
              style={styles.input}
              placeholder="Curso"
              value={alumnoEditar.curso}
              onChangeText={(text) => this.setState({ alumnoEditar: { ...alumnoEditar, curso: text } })}
            />
            <Button title="Guardar cambios" onPress={this.guardarCambios} />
          </View>
        )}

        {alumnos.map((alumno, index) => (
          <View key={index} style={styles.alumno}>
            <Text>{`${alumno.nombre} ${alumno.apellido}`}</Text>
            <Button title="Editar" onPress={() => this.editarAlumno(index)} />
            <Button title="Borrar" onPress={() => this.borrarAlumno(index)} />
          </View>
        ))}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  },
  alumno: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  }
});


export default Almacenamiento;