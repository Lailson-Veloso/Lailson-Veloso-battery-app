import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Battery from 'expo-battery';

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    // Função para obter o nível inicial da bateria
    const fetchBatteryLevel = async () => {
      const level = await Battery.getBatteryLevelAsync();
      setBatteryLevel(level);
    };

    // Obter o nível da bateria quando o componente for montado
    fetchBatteryLevel();

    // Adicionar um listener para alterações no nível da bateria
    const batterySubscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
    });

    // Limpar o listener quando o componente for desmontado
    return () => batterySubscription.remove();
  }, []);

  // Função para renderizar imagem com base no nível da bateria
  const renderBatteryImage = () => {
    if (batteryLevel !== null) {
      if (batteryLevel >= 0.8) {
        return <Image source={require('../assets/06.png')} style={styles.image6} />;
      } else if (batteryLevel >= 0.6) {
        return <Image source={require('../assets/05.png')} style={styles.image5} />;
      } else if (batteryLevel >= 0.4) {
        return <Image source={require('../assets/04.png')} style={styles.image4} />;
      } else if (batteryLevel >= 0.2) {
        return <Image source={require('../assets/03.png')} style={styles.image3} />;
      } else {
        return <Image source={require('../assets/02.png')} style={styles.image2} />;
      }
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Nível da Bateria: {batteryLevel !== null ? (batteryLevel * 100).toFixed(0) + '%' : 'Carregando...'}
      </Text>
      {renderBatteryImage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc', // cor bege
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  image2: {
    width: 200,
    height: 600,
  },
  image3: {
    width: 400,
    height: 400,
  },
  image4: {
    width: 300,
    height: 450,
  },
  image5: {
    width: 200,
    height: 500,
  },
  image6: {
    width: 300,
    height: 500,
  },
});

export default App;
