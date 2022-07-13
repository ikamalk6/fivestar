import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import SearchTextinput from '../../../components/customSearch';
import {useSelector} from 'react-redux';
import COLOR from '../../../utils/colors';
import {normalize} from '../../../utils/dimensions';
import GoBack from '../../../components/goBackBtn';
import React from 'react';

export default function ZipCode({route}: any) {
  const {zipcode} = route.params;
  const {zipCodeData} = useSelector((store: any) => store.ProfileReducer);
  const data = zipCodeData.result;

  const renderitem = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => zipcode(item.zipcode)}>
        <View style={styles.box}>
          <Text style={styles.txt}>{item.zipcode}, </Text>
          <Text style={styles.txt}>{item.city},</Text>
          <Text style={styles.txt}>{item.state}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainView}>
      <GoBack />
      <SearchTextinput />
      <FlatList data={data} renderItem={renderitem} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    height: 65,
    width: '100%',
    borderColor: COLOR.light_Black,
    top: 20,
    borderWidth: 0.8,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  txt: {
    color: COLOR.white,
  },
  mainView: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: normalize(40),
  },
});
