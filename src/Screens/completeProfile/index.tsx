import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../../components/customTextInput';
const rightComponent = backgroundColor => {
  return (
    <View
      style={{
        height: 20,
        width: 20,
        backgroundColor: backgroundColor,
        left: 320,
        bottom: 40,
      }}
    />
  );
};
export default function CompleteProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>{'Hi John! \nTell us about yourself'}</Text>
      <ScrollView>
        <View style={{marginBottom: 50}}>
          <Image
            style={{
              height: 220,
              width: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/image/Cover.png')}
          />
          <View
            style={{
              position: 'absolute',
              height: 265,
              justifyContent: 'flex-end',
              zIndex: 1,
            }}>
            <Image
              style={{height: 90, width: 120, resizeMode: 'contain'}}
              source={require('../../assets/image/profile.png')}
            />
          </View>
        </View>
        <View>
          <CustomTextInput
            // rightComponent={() => rightComponent('red')}
            label={'Change your Username'}
          />
          <CustomTextInput
            // rightComponent={() => rightComponent('green')}
            label={'Select Your Identity'}
          />
          <CustomTextInput label={'DOB'} />
          <CustomTextInput label={'ZipCode*'} />
          <CustomTextInput label={'Bio'} />
          <CustomTextInput label={'Referral Code'} />
          <CustomTextInput label={'Sports I Watch'} />
        </View>
      </ScrollView>
      <TouchableOpacity style={{borderRadius: 7}}>
        <Image
          style={{width: '100%', height: 40}}
          source={require('../../assets/image/ButtonOn.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000000',
    flex: 1,
  },
  head: {
    color: '#ffffff',
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
    paddingBottom: 20,
    paddingTop: 40,
  },
});
