import React, {useContext, useState} from 'react';
import {SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import {AuthContext} from '../../Authentication/AuthProvider';

import colors from '../../const/Theme';


const  HomeScreen = ({navigation})=>{
  const {user, logout} = useContext(AuthContext);
  return(
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
            <View style={style.header}>
        <View>
          <Text style={{color: colors.dark, fontSize: 20, fontWeight: 'bold'}}>
            <TouchableOpacity onPress={()=>logout()}>
              <Text>
                Logout
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        {/* <Image
          style={style.profileImage}
          source={require('../../assets/person.jpg')}
        /> */}
      </View>

    </SafeAreaView>

  );
};
export default HomeScreen;

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

});