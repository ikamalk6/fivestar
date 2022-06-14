import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  mainView: {
    marginTop: 30,
    padding: 20,
  },
  heading: {
    color: '#FFFFFF',
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
    color: '#44C2E3',
    fontWeight: '900',
    backgroundColor: '#000000',
    borderColor: 'white',
    borderWidth: 1.5,
  },
  buttonValid: {
    backgroundColor: '#44C2E3',
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
    color: '#44C2E3',
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
    // padding: 10,
    // margin: 20,
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
    color: '#ffffff',
    fontSize: 16,
  },
  google: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
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

    backgroundColor: '#ffffff',

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
    // marginBottom: 30,
    // marginTop: 35,
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