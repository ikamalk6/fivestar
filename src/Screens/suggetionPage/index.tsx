import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../utils/colors';
import {STRINGNAME} from '../../utils/string';
import GoBack from '../../components/goBackBtn';
import {EnableButton} from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAME} from '../../router/routeNames';
import {useDispatch, useSelector} from 'react-redux';
import {UserContentAction} from '../home/action';

export default function SuggestionPage() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const [loading, setLoading] = useState(false);

  const {userdata} = useSelector((store: any) => store.ValidateOtpReducer);

  const onSubmit = () => {
    setLoading(true);
    dispatch(
      UserContentAction(
        userdata?.authToken,
        (resp: any) => {
          if (resp?.status == 200) {
            setLoading(false);
            navigation.navigate(ROUTE_NAME.BOTTOM_STACK);
          }
        },
        (error: any) => {
          setLoading(false);
          console.log('error', error);
        },
      ),
    );
  };
  return (
    <View style={styles.mainView}>
      <GoBack />
      <Text style={styles.headingTxt}>
        {STRINGNAME.SOME_MOST_FOLLOWED_ATHL}
      </Text>
      {loading && (
        <ActivityIndicator
          size={'large'}
          color={COLOR.sky}
          style={styles.activiyIndicator}
        />
      )}
      <EnableButton onPress={onSubmit} label={'Next'} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.black,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  headingTxt: {
    color: COLOR.white,
    fontWeight: '800',
    fontSize: 26,
    fontStyle: 'italic',
  },
  button: {
    marginTop: 620,
  },
  activiyIndicator: {
    position: 'absolute',
    top: 350,
    left: 180,
  },
});
