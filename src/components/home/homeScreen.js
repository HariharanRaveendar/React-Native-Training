import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import {AuthContext} from '../../Authentication/AuthProvider';


const  HomeScreen = ({navigation})=>{
  const {user, logout} = useContext(AuthContext);
  return(
    <View style={styles.container}>
    <Text style={styles.logo}>NewAPP</Text>
    <Text>
      Welcome ! {user.email}
    </Text>
    <TouchableOpacity style={styles.loginBtn} onPress={() => logout('asda')}>
          <Text style={styles.loginText}>LogOut</Text>
        </TouchableOpacity>
  </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#0000ff",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});