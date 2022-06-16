import {StyleSheet} from 'react-native';
import COLOR from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.black,
    flex: 1,
  },
  mainView: {
    marginTop: 30,
    padding: 20,
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
    width: 328,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  buttonInvalid: {
    backgroundColor: '#282828',
    borderRadius: 5,
    height: 48,
    width: 328,
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
    color: '#595959',
    fontWeight: '900',
    fontStyle: 'italic',
  },
  warning: {
    fontSize: 12,
    color: 'red',
    marginLeft: 20,
  },
  forgot: {
    color: COLOR.sky,
    fontSize: 16,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
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
    width: '95%',
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

    width: '95%',
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
    bottom: 30,
    position: 'absolute',
    right: 30,
  },
  glogo: {
    width: 20,
    height: 20,
    marginRight: 7,
  },
  passBox: {justifyContent: 'space-between'},
});
export default styles;
