import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Función para determinar el color de fondo según la temperatura
const getBackgroundColor = (tempMax: number) => {
  if (tempMax < 20) return "#ADD8E6"; // Azul
  if (tempMax >= 21 && tempMax <= 30) return "#FFD700"; // Amarillo
  return "#FF8C00"; // Naranja
};

// Componente reutilizable para mostrar un solo día de pronóstico
const WeatherCard = ({ dayName, date, tempMax, tempMin, rainProb, condition }: any) => {
  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor(tempMax) }]}>
      <Text style={styles.day}>{dayName}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.temperature}>🌡 Máx: {tempMax}°C | Mín: {tempMin}°C</Text>
      <Text style={styles.rainProb}>🌧 Prob. lluvia: {rainProb.toFixed(1)}%</Text>
      <Text style={styles.condition}>🌤 {condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,  // Cambié marginHorizontal a marginVertical para diseño vertical
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    width: '90%',  // Aumenté el ancho para una mejor visualización en vista vertical
  },
  day: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  date: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
  },
  temperature: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
  },
  rainProb: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
  },
  condition: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#fff",
    marginVertical: 5,
  },
});

export default WeatherCard;