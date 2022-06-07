import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password)
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            //const { idToken } = await GoogleSignin.signIn();
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            //const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // Sign-in the user with the credential
            console.log("Dsadass",auth().signInWithCredential(googleCredential));
            await auth().signInWithCredential(googleCredential);
            
          } catch(error) {
            console.log("error",{error});
          }
        },
        register: async (email, password,name,role) => {
          try {
            await auth().createUserWithEmailAndPassword(email,password)
            .then(() => {
              firestore().collection('users').doc(auth().currentUser.uid)
              .set({
                  Name: name,
                  role:role,
                  email: email,
                  createdAt: firestore.Timestamp.fromDate(new Date()),
                  userImg: null,
              })
              .catch(error => {
                  console.log('Something went wrong with added user to firestore: ', error);
              })
            })
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });
          }catch (e) {
            console.log(e);
          }
        },
        logout: async (val) => {
          try {
            console.log(val)
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};