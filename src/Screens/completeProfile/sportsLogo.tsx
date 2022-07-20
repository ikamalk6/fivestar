import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import COLOR from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimensions';
import CustomSportSelection from '../../components/customSportGrid';
import GoBack from '../../components/goBackBtn';
import {DisableButton, EnableButton} from '../../components/customButton';
import {STRINGNAME} from '../../utils/string';
import CustomSearchBar from '../../components/customSearchBar';

export default function SportsLogoScr(props: any) {
  const {callback}: any = useRoute().params;
  const sportsdata = useSelector((store: any) => store.ProfileReducer);
  const newData = sportsdata?.sportsdata;
  const navigation = useNavigation();
  const [selectedSports, setselectedSports] = useState([]);

  useEffect(() => {
    callback(selectedSports);
  }, [selectedSports]);

  const helper = useCallback(
    (item: any) => {
      const index = selectedSports.findIndex(x => x == item);
      console.log('selectedSports index', index);

      if (index == -1) {
        //@ts-ignore
        setselectedSports([...selectedSports, item]);
      } else {
        selectedSports.splice(index, 1);
        setselectedSports([...selectedSports]);
      }
    },
    [selectedSports],
  );
  const renderItems = ({item}: any) => {
    return (
      <CustomSportSelection
        img={item.sportImg}
        imgText={item.sportName}
        helper={helper}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GoBack style={styles.backBtn} />
      <CustomSearchBar
        heading={STRINGNAME.WHAT_SPORTS_DO_YOU_LIKE}
        placeholder={STRINGNAME.SEARCH_SPORTS}
      />
      <FlatList
        data={newData}
        renderItem={renderItems}
        numColumns={3}
        bounces={false}
        showsVerticalScrollIndicator={false}
        // ItemSeparatorComponent={}
      />
      {selectedSports.length > 0 ? (
        <EnableButton
          style={{marginBottom: 20, width: 360}}
          label="CONTINUE"
          onPress={() => navigation.goBack()}
        />
      ) : (
        <DisableButton label="CONTINUE" disabled={true} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    paddingTop: 50,
  },
  body: {
    // marginLeft: normalize(20),
  },
  textInputViewStyle: {
    borderWidth: 1,
    height: normalize(45),
    width: normalize(340),
    borderRadius: normalize(5),
    marginTop: normalize(5),
    borderColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: normalize(19),
  },
  searchImgStyle: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(15),
  },
  textInputStyle: {
    marginHorizontal: normalize(20),
    height: normalize(45),
    fontSize: 14,
    color: COLOR.white,
  },
  sportTextHeader: {
    color: COLOR.white,
    width: normalize(280),
    height: normalize(64),
    fontSize: 24,
    fontWeight: '900',
  },
  renderContainer: {
    marginHorizontal: normalize(5),
    width: normalize(104),
    height: normalize(112),
    marginTop: normalize(20),
    // backgroundColor: '#121212'
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: normalize(15),
  },
  sportsImg: {
    height: normalize(50),
    width: normalize(50),
    resizeMode: 'contain',
  },
  sportText: {
    color: COLOR.white,
    marginTop: normalize(10),
  },
  backBtn: {
    marginLeft: 15,
  },
});
