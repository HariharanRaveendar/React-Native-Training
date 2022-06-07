import 'react-native-gesture-handler';
import React ,{useContext, useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../Authentication/AuthProvider';
import firestore from "@react-native-firebase/firestore";


const SignUpScreen = ({navigation}) => {
    const [role, setRole] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpass, setConfirmpass] = useState();

    const {register} = useContext(AuthContext);

    

  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{fontWeight: 'bold', fontSize: 40, color: COLORS.dark}}>
            Simple
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 40, color: COLORS.secondary}}>
            App
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'grey'}}>
            SIGN UP
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput 
                placeholder="Name" 
                placeholderTextColor="grey"
                style={STYLES.input} 
                onChangeText={(name) => setName(name)} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput 
                placeholder="Email" 
                placeholderTextColor="grey"
                style={STYLES.input} 
                onChangeText={(email) => setEmail(email)}/>
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="account-circle"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput 
                placeholder="Role" 
                placeholderTextColor="grey"
                style={STYLES.input}
                onChangeText={(role) => setRole(role)} />
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
              onChangeText={(password) => setPassword(password)}
              secureTextEntry
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
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              style={STYLES.input}
              onChangeText={(confirmpass) => setPassword(confirmpass)}
              secureTextEntry
            />
          </View>
          
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}} onPress={()=>register(email,password,name,role)}>
              Sign Up
            </Text>
          </View>
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
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16,color:'grey'}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assests/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16,color:'grey'}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assests/google.png')}
              />
            </View>
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
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
