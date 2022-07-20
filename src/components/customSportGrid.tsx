import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {normalize} from '../utils/dimensions';
import COLOR from '../utils/colors';
import {IMAGE} from '../utils/images';

export default function CustomSportSelection({img, imgText, helper}: any) {
  const [choose, setChoose] = useState<any>(false);

  const selectedItems = () => {
    helper(imgText);
    setChoose(!choose);
  };

  return (
    <TouchableOpacity style={[styles.renderContainer]} onPress={selectedItems}>
      <View
        style={[
          styles.gridView,
          {backgroundColor: choose ? COLOR.sky : COLOR.light_Black2},
        ]}>
        {choose && <Image style={styles.rightCheck} source={IMAGE.blackTick} />}
        <Image
          source={{uri: img}}
          style={choose ? styles.gridimgActive : styles.gridimg}
        />
        <Text
          // style={[
          //   styles.imgTextStyle,
          //   // {
          //   //   color: choose ? COLOR.black : COLOR.white,
          //   //   fontWeight: choose ? '900' : '400',
          //   // },
          // ]}
          style={choose ? styles.imgTextStyle2 : styles.imgTextStyle}>
          {imgText}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridimg: {
    height: normalize(45),
    width: normalize(45),
    resizeMode: 'contain',
  },
  gridimgActive: {
    height: normalize(45),
    width: normalize(45),
    resizeMode: 'contain',
    tintColor: COLOR.black,
  },
  gridView: {
    height: normalize(112),
    width: normalize(104),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(6),
  },
  imgTextStyle: {
    fontSize: 15,
    marginTop: normalize(5),
    fontStyle: 'italic',
    color: COLOR.grey,
    fontWeight: '400',
  },
  imgTextStyle2: {
    fontSize: 15,
    marginTop: normalize(5),
    fontStyle: 'italic',
    color: COLOR.black,
    fontWeight: '400',
  },
  rightCheck: {
    height: normalize(16),
    width: normalize(16),
    resizeMode: 'contain',
    left: normalize(40),
    bottom: 10,
  },
  renderContainer: {
    height: normalize(112),
    width: normalize(104),
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 5,
    marginTop: normalize(20),
    marginLeft: normalize(15),
  },
});

// import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import React, {useState} from 'react';

// import {IMAGE} from '../utils/images';
// import {normalize, vh, vw} from '../utils/dimensions';
// import COLOR from '../utils/colors';

// const CustomSportSelection = ({img, imgText, helper}: any) => {
//   const [checked, setChecked] = useState<boolean>(false);
//   const toggleCheckedItem = () => {
//     helper(imgText);
//     setChecked(!checked);
//   };

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={toggleCheckedItem}
//         style={!checked ? styles.SportsViewStyle : styles.ActiveViewStyle}>
//         {checked && (
//           <Image source={IMAGE.blueCross} style={styles.tickImgaeStyle} />
//         )}
//         <Image
//           style={
//             !checked ? styles.SportsImageStyle : styles.SportsActiveImageStyle
//           }
//           source={{uri: img}}
//         />
//         <Text
//           style={
//             !checked ? styles.SportsNameStyle : styles.SportsActiveNameStyle
//           }>
//           {imgText}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CustomSportSelection;

// const styles = StyleSheet.create({
//   SportsImageStyle: {
//     height: vh(45),
//     width: vw(45),
//     resizeMode: 'contain',
//   },
//   SportsActiveImageStyle: {
//     height: vh(45),
//     width: vw(45),
//     resizeMode: 'contain',
//     tintColor: COLOR.black,
//   },
//   SportsNameStyle: {
//     color: COLOR.white,
//     marginTop: normalize(12),
//     textAlign: 'center',
//   },
//   SportsActiveNameStyle: {
//     color: COLOR.black,
//     marginTop: normalize(12),
//     textAlign: 'center',
//   },
//   SportsViewStyle: {
//     height: vh(112),
//     width: vw(104),
//     margin: normalize(8),
//     backgroundColor: '#121212',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   tickImgaeStyle: {
//     height: vh(16),
//     width: vw(16),
//     left: normalize(35),
//   },
//   ActiveViewStyle: {
//     height: vh(112),
//     width: vw(104),
//     margin: normalize(8),
//     borderRadius: 5,
//     backgroundColor: COLOR.sky,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   FlatListViewStyle: {
//     marginHorizontal: normalize(4),
//   },
//   backImageStyle: {
//     height: vh(20),
//     width: vw(12),
//     marginLeft: normalize(24),
//     marginTop: normalize(8),
//   },
//   DisabledButtonStyle: {
//     marginHorizontal: normalize(14),
//   },
// });
