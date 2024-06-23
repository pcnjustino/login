import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,SafeAreaView,Pressable} from 'react-native';

export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container,{width:"100%"}]}>
        <TextInput placeholder='EordMAIL OR USERNAME' style={styles.input}/>
        <TextInput 
        autoCorrect={false} 
        placeholder='PASSWORD'
        name="password" 
        autoCapitalize='none'
        secureTextEntry="true"
        style={styles.input}/>
        <Pressable style={styles.button} onPress={()=>{alert("login success")}}>
              <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>  
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
      width:"60%",
      marginTop:20,
      height:56,
      borderWidth:0.5,
      borderRadius:7,
      borderColor:"#777070",
      paddingHorizontal:20,
  },
  button:{
    backgroundColor : "red",
    width:"56%",
    height : 45,
    //borderColor : "gray",
    //borderWidth  : 1,
    borderRadius : 7,
    marginTop:42,
    alignItems : "center",
    justifyContent : "center",
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  
})
