import {Platform, StyleSheet} from 'react-native';
import COLOR from '../../utils/colors';
import {normalize} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.black,
    flex: 1,
  },
  mainView: {
    marginTop: Platform.OS === 'ios' ? normalize(35) : 0,
    padding: normalize(18),
  },
  heading: {
    color: COLOR.white,
    fontSize: 26,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  inputStyle: {
    padding: 18,
    marginBottom: 10,
    marginVertical: 15,
    borderRadius: 5,
    margin: 10,
    color: COLOR.sky,
    fontWeight: '900',
    backgroundColor: COLOR.black,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  buttonValid: {
    backgroundColor: COLOR.sky,
    borderRadius: 5,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  buttonInvalid: {
    backgroundColor: COLOR.mud,
    borderRadius: 5,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
    fontStyle: 'italic',
  },
  buttonTextInvalid: {
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.grey,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  warning: {
    fontSize: 12,
    color: COLOR.dullRed,
    marginLeft: 10,
  },
  forgot: {
    color: COLOR.sky,
    fontSize: 16,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
  },
  orButton: {
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
    alignSelf: 'center',
  },
  orStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 15,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: 155,
  },

  newUser: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  newUserT: {
    color: COLOR.white,
    fontSize: 16,
  },
  google: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: COLOR.white,
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  apple: {
    margin: 20,
    flexDirection: 'row',

    backgroundColor: COLOR.white,

    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  gText: {
    fontSize: 16,
  },
  eye: {
    height: 15,
    width: 20,
    resizeMode: 'contain',
    bottom: 24,
    position: 'absolute',
    right: 30,
  },
  glogo: {
    width: 20,
    height: 20,
    marginRight: 7,
  },
  passBox: {justifyContent: 'space-between'},
  signUptxt: {
    color: COLOR.sky,
    fontStyle: 'italic',
    fontWeight: '900',
    fontSize: 18,
  },
});
export default styles;
