import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Banner } from './components/Banner';

export default function App() {

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);
  const [esValido, setEsValido] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const calcular = (operador) => {
    setEsValido(true);
    let resultado = 0;
    if (valor1 != "" && valor2 != "") {
      switch (operador) {
        case "+":
          resultado = parseFloat(valor1) + parseFloat(valor2);
          break;
        case "-":
          resultado = parseFloat(valor1) - parseFloat(valor2);
          break;
        case "*":
          resultado = parseFloat(valor1) * parseFloat(valor2);
          break;
        case "/":
          resultado = parseFloat(valor1) / parseFloat(valor2);
          break;
      }
      setResultado(resultado)
      setMensaje('Calculo realizado correctamenete!')
      return;
    }
    setMensaje('Debe ingresar los 2 valores...')
    setEsValido(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.container, {flex:1, backgroundColor: 'crimson'}]}>
        {/* <Banner name="calculadora"></Banner> */}
      </View>
      <View style={[styles.container, {flex:5, backgroundColor: 'yellow'}]}>
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
        <Text style={[styles.inputs, {width: '60%', height: 40}]}>{ resultado.toFixed(1) }</Text>

        <View style={[styles.container, {flexDirection: 'row', gap: 5}]}>
          <TouchableOpacity
            style={[{ backgroundColor: 'green'}, styles.btn]}
            onPress={ () => calcular('+') }
          >
            <Text style={styles.textBtn}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: 'red'}, styles.btn]}
            onPress={ () => calcular('-') }
          >
            <Text style={styles.textBtn}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: 'orange'}, styles.btn]}
            onPress={ () => calcular('*') }
          >
            <Text style={styles.textBtn}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: 'purple'}, styles.btn]}
            onPress={ () => calcular('/') }
          >
            <Text style={styles.textBtn}>/</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={[{ backgroundColor: 'black', marginTop: 20}, styles.btn, styles.btnWidth]}
          >
            <Text style={styles.textBtn}>c</Text>
          </TouchableOpacity>
          <Text
          style={{ color: esValido ? 'green' : 'red' }}
          >{mensaje}</Text>
      </View>
      <View style={[styles.container, {flex:1, backgroundColor: 'green'}]}>
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
  },
  btn: {
    borderRadius: 10,
    padding: 10, width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnWidth: {
    width: '26.8%'
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold'
  }
});
