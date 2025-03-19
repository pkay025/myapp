import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView  } from "react-native";
import { Feather } from "@expo/vector-icon/Feather";


const elements = [{
  id: 1,
  title: "Exercise",
  subTitle: '12 Tasks',
  Image: require('./assets/young woman working online.png')
},
{
  id: 2,
  title: 'Study',
  subTitle: '12 Tasks',
  Image: require('./assets/young woman working at desk.png')
},
{
  id: 3,
  title: 'Code',
  subTitle: '5 hours',
  Image: require('./assets/code.jpeg')
},
 {
   id: 4,
  title: 'Eat',
  subTitle: '3 meals/day',
  Image: require('./assets/eating.jpg')
},
  {
    id: 5,
    title: 'Sleep',
    subTitle: '8 hours',
    Image: require('./assets/sleeping.jpeg')
},
{
  id: 6,
  title: 'Work',
  subTitle: '5 hours',
  Image: require('./assets/work.jpeg')
},
{
  id: 7,
  title: 'Cook',
  subTitle: 'Best meal',
  Image: require('./assets/cooking.webp')
},
{
  id: 8,
  title: 'Play',
  subTitle: 'With kids',
  Image: require('./assets/play.jpeg')
}]

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
        <Feather name="search" size={16} color="black" style={styles.searchIcon} />

      <View style={styles.pulse}>
        <Image source={require("./assets/Vector.png")} />
      </View>
      </View>
      <ScrollView>
      <View>
        <Text style={styles.categories}>Categories</Text>
      </View>
      <View> 
        <FlatList 
          data={elements}
          renderItem={({ item }) => (
            <View style={styles.flatcontainer}>
              <View>
                <Text style={styles.head}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
                <Image source={item.Image}  style={styles.woman}/>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
      </View>
      <View>
        <Text style={styles.ongoing}>Ongoing Task</Text>
      </View>
      
      <View style={styles.dev}>
        <Text style={styles.mobile}>Mobile App Development</Text>
      </View>
      <View style={styles.dev}>
        <Text style={styles.mobile}>Web Development</Text>
      </View>
      <View style={styles.dev}>
        <Text style={styles.mobile}>Push Ups</Text>
      </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Ingredients</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Bench Press</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>MCQs</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Gradebook</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Resources</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Maps</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Calender</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Wallet</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Photos</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Library</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Graphic Design</Text>
        </View>
        <View style={styles.dev}>
          <Text style={styles.mobile}>Videography</Text>
        </View>
      </ScrollView>

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
  searchBox: {
    width: 280,
    height: 48,
    backgroundColor: "#FBF9F7",
    borderRadius: 10,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 700,
    fontColor: "#000000",
    paddingLeft: 35,
  },
  pulse: {
    width: 50,
    height: 48,
    backgroundColor: "#F0522F",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    justifyContent: 'space-between',
    marginTop: 14,
  },
  searchIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    position: 'absolute',
    marginLeft: 31,
    paddingTop: 4.5,
  },
  categories: {
    fontSize: 20,
    fontWeight: 700,
    fontColor: '#000000',
    paddingTop: 24,
    marginLeft: 20,
  },
  flatcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    width :186,
    height: 192,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  head: {
    fontSize: 16,
    fontWeight: 700,
    fontColor: '#000000',
    marginLeft: 16,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 400,
    fontColor: '#000000',
    marginLeft: 16,
  },
  woman: {
    width: 151,
    height: 132,
    borderRadius: 15,
    marginLeft: 20,
  },
  ongoing: {
    fontSize: 20,
    fontWeight:700,
    marginLeft: 20,
    paddingTop: 15,
  },
  dev: {
    width: 354,
    height: 128,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 19,
    fontWeight: 'bold',
    fontColor: '#000000',
    backgroundColor: '#FBF9F7',
    borderColor: '#E8D1BA',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
  },
  mobile: {
    marginLeft: 16,
    marginTop: 40,
    fontColor: "black",
  },

});
