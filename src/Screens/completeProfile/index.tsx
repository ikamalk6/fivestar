import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';

import CustomTextInput from '../../components/customTextInput';
import {IMAGE} from '../../utils/images';
import COLOR from '../../utils/colors';

export default function CompleteProfile() {
  const [cover, setCover] = useState('');
  const [profile, setProfile] = useState('');
  const [date, setDate] = useState(new Date());
  const [chooseDate, setChooseDate] = useState('Date of Birth');
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head}>{'Hi John! \nTell us about yourself'}</Text>
      <ScrollView>
        <View style={styles.innerView}>
          <TouchableOpacity
            onPress={() =>
              ImagePicker.openPicker({
                cropping: true,
              })
                .then(image => {
                  setCover(image.path);
                  console.log('image path', image.path);
                })
                .catch(err => {
                  console.log('ImageErr', err);
                })
            }>
            <Image style={styles.coverStyl} source={{uri: cover}} />
            <Image style={styles.miniC} source={IMAGE.cam} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              height: 265,
              justifyContent: 'flex-end',
              zIndex: 1,
            }}
            onPress={() =>
              ImagePicker.openPicker({
                cropping: true,
              })
                .then(image => {
                  console.log('image path', image.path);
                  setProfile(image.path);
                })
                .catch(err => {
                  console.log('ImageErr', err);
                })
            }>
            <Image style={styles.profStyl} source={{uri: profile}} />
            <Image style={styles.miniCp} source={IMAGE.cam} />
          </TouchableOpacity>
        </View>
        <View>
          <CustomTextInput label={'Change your Username'} />
          <CustomTextInput label={'Select Your Identity'} />
          <CustomTextInput
            label={'DOB'}
            value={chooseDate}
            right={() => (
              <TouchableOpacity
                style={{left: 320, position: 'absolute', top: 160}}
                onPress={() => setOpen(true)}>
                <Image
                  source={require('../../assets/image/Calendar.png')}
                  style={{height: 20, width: 20}}
                />
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode="date"
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setChooseDate(
                      [
                        date.getMonth() + 1,
                        '/',
                        date.getDate(),
                        '/',
                        date.getFullYear(),
                      ].join(''),
                    );
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </TouchableOpacity>
            )}
          />
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
    color: COLOR.white,
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
    paddingBottom: 20,
    paddingTop: 40,
  },
  innerView: {marginBottom: 30},
  coverStyl: {
    height: 220,
    width: '100%',
    borderWidth: 1,
    borderColor: COLOR.white,
    borderRadius: 5,
    backgroundColor: '#1B1B1B',
  },
  miniC: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    bottom: 120,
    opacity: 0.6,
  },
  profStyl: {
    height: 90,
    width: 120,
    borderWidth: 1,
    borderColor: COLOR.white,
    left: 20,
    borderRadius: 5,
    top: 20,
    backgroundColor: '#1B1B1B',
  },
  miniCp: {
    height: 20,
    width: 20,
    left: 70,
    bottom: 35,
    opacity: 0.6,
  },
});
