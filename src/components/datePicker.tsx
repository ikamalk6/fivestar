import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

export default function CustomDatePicker() {
  const [date, setDate] = useState(new Date());
  const [chooseDate, setChooseDate] = useState('Date of Birth');
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={{left: 320, position: 'absolute', top: 160}}
        onPress={() => setOpen(true)}>
        <Image
          source={require('../assets/image/Calendar.png')}
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
    </View>
  );
}

const styles = StyleSheet.create({});
