import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList, ImageBackground } from "react-native";
import WeatherCard from './WeatherCard';  // Importamos el componente WeatherCard

// API Key y Ciudad
const API_KEY = "d0a2960f52b73c7ea36662717b1495e3"; // Reemplaza con tu clave real de OpenWeather
const CITY = "Huejutla de Reyes"; // Agrega ",MX" para mayor precisión

// Función para traducir el día
const traducirDia = (fecha: string) => {
  const dias = {
    Sunday: "Domingo",
    Monday: "Lunes",
    Tuesday: "Martes",
    Wednesday: "Miércoles",
    Thursday: "Jueves",
    Friday: "Viernes",
    Saturday: "Sábado",
  };
  const diaIngles = new Date(fecha).toLocaleDateString("en-US", { weekday: "long" });
  return dias[diaIngles as keyof typeof dias] || diaIngles;
};

const WeatherScreen = () => {
  const [weather, setWeather] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric&lang=es`
        );
        const data = await response.json();

        console.log("Respuesta de la API:", data);

        if (data.list) {
          const dailyData: any[] = [];
          const fechasAgregadas = new Set();

          data.list.forEach((entry: any) => {
            const fecha = entry.dt_txt.split(" ")[0]; // Extraemos solo la fecha (YYYY-MM-DD)

            if (!fechasAgregadas.has(fecha)) {
              fechasAgregadas.add(fecha);
              dailyData.push({
                date: fecha,
                dayName: traducirDia(fecha),
                tempMax: entry.main.temp_max,
                tempMin: entry.main.temp_min,
                rainProb: entry.pop * 100, // Probabilidad de lluvia
                condition: entry.weather[0].description,
              });
            }
          });

          setWeather(dailyData.slice(0, 5)); // Solo los próximos 5 días
        } else {
          console.error("No se obtuvieron datos de pronóstico.");
        }
      } catch (error) {
        console.error("Error al obtener el clima:", error);
      }
      setLoading(false);
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <ImageBackground 
      source={{ uri: "https://example.com/your-background-image.jpg" }} // Reemplaza con una URL de imagen adecuada
      style={styles.container}
    >
      <Text style={styles.title}>Clima en {CITY}</Text>

      {weather.length === 0 ? (
        <Text style={styles.error}>No hay datos disponibles</Text>
      ) : (
        <FlatList
          data={weather}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <WeatherCard
              dayName={item.dayName}
              date={item.date}
              tempMax={item.tempMax}
              tempMin={item.tempMin}
              rainProb={item.rainProb}
              condition={item.condition}
            />
          )}
          horizontal={false}  // Asegúrate de que esté vertical
          contentContainerStyle={styles.flatListContainer}  // Ajustamos el espaciado entre tarjetas
          showsVerticalScrollIndicator={false} // Desactivar el indicador de desplazamiento vertical
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  error: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
  flatListContainer: {
    paddingBottom: 100, // Espacio en la parte inferior para evitar que las tarjetas queden pegadas al borde
    paddingTop: 20,  // Añadir espacio superior también
    paddingHorizontal: 10,  // Añadir márgenes horizontales para las tarjetas
    
  },
});

export default WeatherScreen;