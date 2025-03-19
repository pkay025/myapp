import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <View style={styles.icon}>
          <Image source={require("./assets/person.png")} />
        </View>
      </View>

      <View style={styles.inputbox}>
        <TextInput style={styles.searchBox}
        placeholder="Search"/>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: 52,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    fontColor: "#000000",
  },
  icon:{
    width: 46,
    height: 45,
    backgroundColor: "white",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tasks: {
    fontSize: 12,
    fontWeight: 500,
    fontColor: "#000000",
  },
  header: {
    display: "flex",
    marginLeft: 20,
    marginRight: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    alighnItems: "center",
  },
  
});
