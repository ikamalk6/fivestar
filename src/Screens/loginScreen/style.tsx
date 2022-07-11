import {Platform, StyleSheet} from 'react-native';
import COLOR from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.black,
    flex: 1,
  },
  mainView: {
    marginTop: Platform.OS === 'ios' ? normalize(35) : normalize(10),
    padding: normalize(18),
  },
  heading: {
    color: COLOR.white,
    fontSize: 26,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: normalize(20),
    paddingHorizontal: normalize(8),
  },

  buttonValid: {
    backgroundColor: COLOR.sky,
    borderRadius: 5,
    height: vh(48),
    width: vw(328),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(50),
  },
  buttonInvalid: {
    backgroundColor: COLOR.mud,
    borderRadius: 5,
    height: 48,
    width: vw(328),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(50),
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
    marginLeft: normalize(8),
    marginBottom: normalize(5),
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
    fontWeight: '600',
    color: 'grey',
    alignSelf: 'center',
  },
  orStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(40),
    marginBottom: 10,
    marginHorizontal: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flex: 1,
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
    margin: normalize(20),
    width: vw(328),
    height: vh(48),
    alignSelf: 'center',
    borderRadius: 5,
  },
  apple: {
    margin: normalize(20),
    width: vw(328),
    height: vh(48),
    alignSelf: 'center',
    borderRadius: 5,
  },
  gText: {
    fontSize: 16,
  },
  eyeBttn: {
    height: normalize(15),
    width: normalize(20),
    bottom: normalize(28),
    position: 'absolute',
    right: normalize(28),
    zIndex: 100,
  },
  eye: {
    height: vh(15),
    width: vw(20),
    resizeMode: 'contain',
  },
  glogo: {
    width: normalize(328),
    height: normalize(48),
    borderRadius: normalize(5),
    resizeMode: 'contain',
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
