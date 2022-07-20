import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../../utils/colors';
import {normalize} from '../../../utils/dimensions';
import GoBack from '../../../components/goBackBtn';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {zipcodeAction} from './action';
import {STRINGNAME} from '../../../utils/string';

export default function ZipCode({route}: any) {
  const {zipcode} = route.params;
  const {zipCodeData} = useSelector((store: any) => store.ProfileReducer);
  // const data = zipCodeData.result;
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const [text, setText] = useState<any>('');
  const [page, setPage] = useState<any>(1);

  const onEndReached = () => {
    setPage(page + 1);
    dispatch(zipcodeAction(text, page));
  };
  const onChangeText = (txt: any) => {
    setText(txt);
    setPage(1);
    if (txt?.length <= 0) {
      dispatch({type: 'ZIPCODE_SET', payload: []});
    }
    dispatch(zipcodeAction(txt, page));
  };

  useEffect(() => {
    dispatch({type: 'ZIPCODE_SET', payload: []});
  }, []);

  const renderitem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(), zipcode(item.zipcode);
        }}>
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
      <GoBack style={styles.backbtn} />
      {/* <SearchTextinput style={styles.searchView} /> */}
      <Text style={styles.seachTextStyle}>{STRINGNAME.SEARCH_FOR_ZIPCODE}</Text>
      <View style={styles.textInputViewStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="ZipCode"
          placeholderTextColor={COLOR.white}
          onChangeText={onChangeText}
        />
      </View>
      <FlatList
        data={zipCodeData}
        renderItem={renderitem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    height: 65,
    width: '100%',
    borderColor: COLOR.grey,
    top: 20,
    borderBottomWidth: 0.7,

    alignItems: 'center',
    paddingLeft: 25,
  },
  searchView: {
    marginHorizontal: 10,
  },
  backbtn: {
    marginHorizontal: 15,
  },
  txt: {
    color: COLOR.white,
  },
  mainView: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: normalize(40),
  },
  textInputStyle: {
    marginHorizontal: normalize(20),
    height: normalize(45),
    fontSize: 14,
    color: COLOR.white,
  },
  seachTextStyle: {
    color: COLOR.white,
    fontStyle: 'italic',
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 10,
    marginLeft: 10,
  },
  textInputViewStyle: {
    borderWidth: 1,
    height: normalize(45),
    width: normalize(350),
    borderRadius: normalize(5),
    marginTop: normalize(5),
    borderColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: normalize(19),
    marginLeft: normalize(10),
  },
});
