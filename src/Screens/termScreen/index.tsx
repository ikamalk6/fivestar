import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Terms() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.headView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Image
            style={styles.image}
            source={require('../../assets/image/lefta.png')}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>{'Terms of Use'}</Text>
      </View>
      <Text numberOfLines={12} style={styles.terms1}>
        {
          'The Fivestar Mobile Application (“App”) and all services provided through the App (collectively, “Services”) are made available by Fivestar App, Inc. (“Fivestar,” “us,” “our,” and/or “we”). Certain features of the App and Services may be subject to additional guidelines, terms, or rules, which will be posted through the App or Services in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into this Agreement. References to “you” and “your” refer to you, a user of our App and/or Services.'
        }
      </Text>
      <Text numberOfLines={25} style={styles.terms2}>
        {
          'THESE TERMS OF USE (“AGREEMENT”) SET FORTH THE LEGALLY BINDING TERMS FOR YOUR USE OF THE APP AND SERVICES. BY ACCESSING OR USING THE APP OR SERVICES, YOU ARE ACCEPTING THIS AGREEMENT AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THIS AGREEMENT. YOU MAY NOT ACCESS OR USE THE APP OR SERVICES OR ACCEPT THE AGREEMENT IF YOU DO NOT HAVE THE CAPACITY TO ENTER INTO THIS AGREEMENT. IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF THIS AGREEMENT, DO NOT ACCESS AND/OR USE THE APP OR SERVICES. IF YOU ARE USING THE APP OR SERVICES ON BEHALF OF A COMPANY, ENTITY, OR ORGANIZATION, YOU REPRESENT AND WARRANT THAT YOU ARE AN AUTHORIZED REPRESENTATIVE OF SUCH COMPANY, ENTITY, OR ORGANIZATION WITH THE AUTHORITY TO BIND IT TO THIS AGREEMENT.'
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 20,
  },
  headView: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  heading: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: 22,
    fontStyle: 'italic',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // textAlign: 'center',
    marginLeft: 40,
  },
  terms1: {
    color: '#ffffff',
    fontSize: 15,
  },
  terms2: {
    color: '#ffffff',
    fontSize: 16,
  },
  image: {
    height: 20,
    width: 20,
  },
});
