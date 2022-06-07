import React from 'react';
import  {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { wDP, hDP } from '../const/utils';
import { Ionicons } from '@react-native';
export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state={
          name:'',
        }
      }
    //   componentDidMount = async () => {
    //     AsyncStorage.getItem('firstname').then(firstname=>{
    //         this.setState({name:firstname})
    //       }).then(()=>{
    //         console.log(this.state.name)
    //       })
    // }
    render() {   
        return (
            <View>
                <View style={styles.Outboxbody}>
                    <View style={styles.box}>
                        <View style={styles.icon}>
                        <TouchableOpacity><Ionicons name="ios-menu" style={styles.icon1} size={35}  colors={"black"} /></TouchableOpacity>
                        <View>
                            <Text style={styles.text}> Welcome {this.state.name}!</Text>
                        </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
   
    Outboxbody: {
        flex: 1,
        flexDirection: 'row',
        marginTop:hDP('0%')
    },
    box: {
        height: hDP('7%'),
        width: wDP('99.8%'),
        backgroundColor: "#fff",
        shadowColor: 'black',
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 18,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        padding:wDP('2%')

    },
    icon:{
      
        flex:1,
        marginTop:0,
        flexDirection:"row",


    },
    plus:{
        height: hDP('7.2%'),
        width: wDP('24.8%'),
        backgroundColor:'white',
        borderRadius:50,
        shadowColor: 'black',
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 10,
        padding:wDP('4.5%'),
        marginRight:wDP('0%'),
        marginTop:wDP('2%')  
    },
    text:{
        marginTop:2,
        fontWeight:'bold',
        textShadowColor: 'gray',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 5,
        color:'#ed2f5f',
        fontSize:20,
       
    }
});





