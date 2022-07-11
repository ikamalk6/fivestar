// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';

// import {useSelector} from 'react-redux';
// import {normalize, vh, vw} from '../../utils/dimensions';
// import {STRINGNAME} from '../../utils/string';
// import COLOR from '../../utils/colors';
// import GoBack from '../../components/goBackBtn';

// export default function SportsLogoScr() {
//   const {sports} = useSelector((store: any) => store.ComProfReducer);
//   console.log('SPORTS________________', sports);

//   const renderItem = ({item}: any) => {
//     return (
//       <TouchableOpacity style={styles.logoContainer}>
//         <Image style={styles.logoStyle} source={{uri: item?.sportImg}} />
//         <Text style={styles.sportName}>{item?.sportName}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.mainView}>
//       {/* <GoBack /> */}
//       <Text style={styles.header}>{STRINGNAME.WHAT_SPORTS_DO_YOU_LIKE}</Text>
//       <View style={styles.searchBar}>
//         <Text style={styles.searchTxt}>{STRINGNAME.SEARCH_SPORTS}</Text>
//       </View>
//       <FlatList
//         data={sports}
//         renderItem={renderItem}
//         numColumns={3}
//         showsVerticalScrollIndicator={false}
//         bounces={false}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     backgroundColor: COLOR.black,
//     paddingLeft: normalize(1),
//     paddingRight: normalize(19),
//   },
//   header: {
//     fontSize: normalize(24),
//     fontStyle: 'italic',
//     fontWeight: '900',
//     marginVertical: normalize(5),
//     color: COLOR.white,
//   },
//   searchBar: {
//     height: vh(40),
//     width: vw(330),
//     borderColor: COLOR.white,
//     borderWidth: normalize(1),
//     opacity: normalize(0.5),
//     borderRadius: normalize(5),
//     marginVertical: normalize(10),
//     marginLeft: normalize(26),
//     // marginRight: normalize(19),
//   },
//   searchTxt: {
//     color: COLOR.white,
//     fontSize: 16,
//     paddingTop: 7,
//     paddingLeft: 10,
//   },
//   logoContainer: {
//     height: normalize(112),
//     width: normalize(104),
//     backgroundColor: COLOR.light_Black,
//     borderRadius: normalize(5),
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: normalize(5),
//   },
//   logoStyle: {
//     height: normalize(45),
//     width: normalize(45),
//     resizeMode: 'contain',
//     marginVertical: normalize(5),
//   },
//   sportName: {
//     color: COLOR.white,
//   },
// });

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {vh, vw, normalize} from '../../utils/dimensions';
import {IMAGE} from '../../utils/images';
import COLOR from '../../utils/colors';
import GoBack from '../../components/goBackBtn';
import {STRINGNAME} from '../../utils/string';

const SportsLogoScr = () => {
  const {sports} = useSelector((store: any) => store.ComProfReducer);

  const [checked, setChecked] = useState<boolean>(false);

  const toggleCheckedItem = () => {
    setChecked(!checked);
  };

  const renderItem = ({item}: any) => {
    return (
      <View>
        <TouchableOpacity
          onPress={toggleCheckedItem}
          style={!checked ? styles.SportsViewStyle : styles.ActiveViewStyle}>
          <Image
            style={
              !checked ? styles.SportsImageStyle : styles.SportsActiveImageStyle
            }
            source={{uri: item?.sportImg}}
          />
          <Text
            style={
              !checked ? styles.SportsNameStyle : styles.SportsActiveNameStyle
            }>
            {item.sportName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{flex: 1, backgroundColor: 'black', paddingTop: normalize(40)}}>
      <GoBack />
      <Text style={styles.header}>{STRINGNAME.WHAT_SPORTS_DO_YOU_LIKE}</Text>
      <View style={styles.searchBar}>
        <Text style={styles.searchTxt}>{STRINGNAME.SEARCH_SPORTS}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.FlatListViewStyle}
        data={sports}
        renderItem={renderItem}
        numColumns={3}
      />
      {checked ? (
        <Image style={{height: 30, width: 330}} source={IMAGE.saveEnable} />
      ) : (
        <Image style={{height: 30, width: 330}} source={IMAGE.saveDisable} />
      )}
    </View>
  );
};

export default SportsLogoScr;

const styles = StyleSheet.create({
  SportsImageStyle: {
    height: vh(45),
    width: vw(45),
    resizeMode: 'contain',
  },
  SportsActiveImageStyle: {
    height: vh(45),
    width: vw(45),
    resizeMode: 'contain',
    tintColor: 'black',
  },
  SportsNameStyle: {
    color: COLOR.white,
    marginTop: normalize(12),
    textAlign: 'center',
  },
  SportsActiveNameStyle: {
    color: COLOR.black,
    marginTop: normalize(12),
    textAlign: 'center',
  },
  SportsViewStyle: {
    height: vh(112),
    width: vw(104),
    margin: normalize(8),
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  ActiveViewStyle: {
    height: vh(112),
    width: vw(104),
    margin: normalize(8),
    backgroundColor: COLOR.sky,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  FlatListViewStyle: {
    marginHorizontal: normalize(4),
  },
  backImageStyle: {
    height: vh(20),
    width: vw(12),
    marginLeft: normalize(24),
  },
  header: {
    fontSize: normalize(24),
    fontStyle: 'italic',
    fontWeight: '900',
    marginVertical: normalize(5),
    color: COLOR.white,
  },
  searchBar: {
    height: normalize(40),
    width: normalize(330),
    borderColor: COLOR.white,
    borderWidth: normalize(1),
    opacity: normalize(0.5),
    borderRadius: normalize(5),
    marginVertical: normalize(10),
  },
  searchTxt: {
    color: COLOR.white,
    fontSize: 16,
    paddingTop: 7,
    paddingLeft: 10,
  },
});
