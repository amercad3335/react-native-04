import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Banner } from './components/Banner';

export default function App() {

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <View style={[styles.container, {flex:1, backgroundColor: 'orange'}]}>
        <Banner name="calculadora"></Banner>
      </View>
      <View style={[styles.container, {flex:5, backgroundColor: 'yellowgreen'}]}>
        <Text style={{fontWeight: 'bold'}}>Calculadora Básica</Text>
        <Text style={{ marginTop: 15 }}>Valor 1</Text>
        <TextInput 
          placeholder='Ingrese el valor 1'
          style={styles.inputs}
          onChangeText={ valor1 => setValor1(valor1) }
          value={ valor1 }
        />

        <Text style={{ marginTop: 15 }}>Valor 2</Text>
        <TextInput 
          placeholder='Ingrese el valor 2'
          style={styles.inputs}
          onChangeText={ setValor2 }
          value={valor2}
        />
        <Text style={{ marginTop: 15 }}>Resultado</Text>
        <Text>sdd</Text>
      </View>
      <View style={[styles.container, {flex:1, backgroundColor: 'gray'}]}>
        <Text value={ resultado }></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  inputs: {
    color: '#555',
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange', 
    width: '60%', 
    textAlign: 'center',
    margin: 10,
    fontSize: 18
  }
});
