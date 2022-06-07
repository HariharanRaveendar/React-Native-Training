import {StyleSheet} from 'react-native';
import COLORS from '../const/color';

const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 20},
  input: {
    color: COLORS.dark,
    paddingLeft: 30,
    borderBottomWidth: 2,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: '#000',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20, marginLeft:2,marginRight:5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;
