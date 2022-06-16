import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000000',
  },
  inner: {
    marginTop: 44,
    margin: 20,
  },
  inputText: {
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  create: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: 24,
    fontStyle: 'italic',
    marginVertical: 10,
  },
  started: {
    color: '#ffffff',
    marginBottom: 15,
  },
  box: {
    height: 22,
    width: 22,
  },
  terms: {
    marginTop: 15,
    flexDirection: 'row',
  },
  termText: {
    paddingLeft: 10,
    color: '#ffffff',
    fontSize: 13,
  },
  toe: {
    color: '#44C2E3',
    lineHeight: 18,
    fontWeight: 'bold',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#44C2E3',
    borderRadius: 5,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: '#282828',
    borderRadius: 5,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonTextDisabled: {
    fontSize: 16,
    textAlign: 'center',
    color: '#595959',
    fontWeight: '900',
    fontStyle: 'italic',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
    fontStyle: 'italic',
  },
  warning: {
    fontSize: 12,
    color: 'red',
    bottom: 3,
    // marginLeft: 20,
  },
  orStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: 155,
  },
  orButton: {
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
    alignSelf: 'center',
    // padding: 10,
    // margin: 20,
  },
  google: {
    // margin: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
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

    backgroundColor: '#ffffff',

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
  glogo: {
    width: 20,
    height: 20,
    marginRight: 7,
  },
  passBox: {
    justifyContent: 'space-between',
  },
  eye: {
    height: 12,
    width: 20,
    position: 'absolute',
    resizeMode: 'contain',
    // marginTop: 35,
    right: 30,
    bottom: 24,
  },
  signIn: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  already: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sign: {
    fontSize: 16,
    color: '#44C2E3',
    fontStyle: 'italic',
    fontWeight: '900',
  },
  arrow: {
    height: 20,
    width: 20,
  },
});
export default styles;
