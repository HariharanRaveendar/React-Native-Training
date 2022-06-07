import 'react-native-gesture-handler';
import React, {useContext, useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/color';
import colors from '../../const/Theme';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {AuthContext} from '../../Authentication/AuthProvider';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 40, color: COLORS.dark}}>
            Leave
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 40, color: COLORS.secondary}}>
            App
          </Text>
        </View>

        <View style={{marginTop: 50}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'grey'}}>
            LOG IN
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
            placeholderTextColor="grey"
              placeholder="Email"
              style={STYLES.input}
              onChangeText={email => setEmail(email)}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="grey"
              style={STYLES.input}
              onChangeText={password => setPassword(password)}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={STYLES.btnPrimary}>
            <Text
              style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}
              onPress={() => login(email, password)}>
              Sign In
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold',color:'grey'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent:'space-evenly',
            }}>
            <TouchableOpacity style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16,padding:10 ,color:'grey'}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assests/facebook.png')}
              />
            </TouchableOpacity>
            {/* <View style={{width: 10}}></View> */}
            <TouchableOpacity onPress={() => googleLogin()}>
              <View style={STYLES.btnSecondary}>
                <Text style={{fontWeight: 'bold', fontSize: 16,padding:10,color:'grey'}}>
                  Sign in with
                </Text>
                <Image
                  style={STYLES.btnImage}
                  source={require('../../assests/google.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
