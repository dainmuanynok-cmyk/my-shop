import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function App() {
  const products = [
    { id: 1, name: "Chelsea"},
    { id: 2, name: "Manchester City"},
    { id: 3, name: "Manchester United"},
    { id: 4, name: "AC Milan"},
    { id: 5, name: "Inter Milan"},
    { id: 6, name: "FC Barcelona"},
    { id: 7, name: "Southampton"},
    { id: 8, name: "Tottenham Hotspur"},
    { id: 9, name: "Newcastle United"},
    { id: 10, name: "Borussia Dortmund"},
    { id: 11, name: "Bayern Munich"},
    { id: 12, name: "Napoli"},
    { id: 13, name: "Arsenal"},
    { id: 14, name: "Thailand"},
    { id: 15, name: "England"},
    { id: 16, name: "Everton"},
    { id: 17, name: "Leicester City"},
    { id: 18, name: "Urawa Red Diamonds"},
    { id: 19, name: "Real Madrid"},
    { id: 20, name: "Aston Villa"},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>แนะนำอาหารไทย</Text>
        <Text style={styles.discription}>( 20 รายการ และราคาโดยประมาณ )</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {products.map((p) => (
          <View style={styles.card} key={p.id}>
            <Text style={styles.index}># {p.id}</Text>
            <Text style={styles.title}>{p.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#5f2ce0ff",
  },
  topic: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: 8,
    textAlign: "center",
  },
  discription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  body: {
    backgroundColor: "#8d67eeff",
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    justifyContent: "center",
    minHeight: "100%",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  index: {
    fontSize: 18,
    fontWeight: "800",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#3a3a3dff",
  },
  price: {
    fontSize: 16,
    color: "#68686bff",
  },
});