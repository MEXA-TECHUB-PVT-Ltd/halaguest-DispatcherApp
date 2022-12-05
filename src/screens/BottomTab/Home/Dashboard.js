import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground,
  BackHandler,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';

////////////////////app pakages//////////////
import {Checkbox} from 'react-native-paper';

//////////////////app icons////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

//////////////////////app components///////////////
import DashboardHeader from '../../../components/Header/DashboardHeade';
import ViewAll from '../../../components/ViewAll/ViewAll';
import GuestCards from '../../../components/CustomCards/GuestCards/GuestCards';

////////////////////redux////////////
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge} from '../../../redux/actions';

////////////////api////////////////
import axios from 'axios';
import {BASE_URL} from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';

/////////////////app images///////////
import {appImages} from '../../../constant/images';

const Home = ({navigation}) => {

///////////////redux////////////////////////
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  /////////////main menu status states/////////////
  const [Drivers, setDrivers] = useState('');

  const GetDrivers = async () => {
    var user = await AsyncStorage.getItem('Userid');
    axios({
      method: 'GET',
      url: BASE_URL + 'api/driver/getDispacherDriver/' + user,
    })
      .then(async function (response) {
        //console.log("list data here ", response.data)
        setDrivers(response.data);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  useEffect(() => {
    GetDrivers();
    GetAcountDetail();
  }, []);
  ///////////////data states////////////////////
  const [username, setUserName] = React.useState();
  const [userimage, setUserImage] = React.useState();
  const GetAcountDetail = async () => {
    var user = await AsyncStorage.getItem('Userid');
    await axios({
      method: 'GET',
      url: BASE_URL + 'api/dispacher/specificDispacher/' + user,
    })
      .then(function (response) {
        //console.log("response get here dispatcher", JSON.stringify(response.data))
        setUserImage(response.data[0].img);
        setUserName(response.data[0].name_of_company);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <StatusBar backgroundColor={'black'} barStyle="light-content" />
        <DashboardHeader
          headerlabel={username}
          headerimage={BASE_URL + userimage}
          iconPress={() => {
            navigation.toggleDrawer();
          }}
          icon={'menu'}
          onpresseacrh={() => onSearch()}
        />
        <ViewAll
          headerlabel={'Divers'}
          onpress={() => navigation.navigate('DriverList')}
        />
        {Drivers === ''
          ? null
          : Drivers.slice(0, 3).map((item, key) => (
              <GuestCards
                guestlogo={BASE_URL + item.img}
                guestname={item.name}
                guestemail={item.email}
                guestgender={item.gender}
              />
            ))}

        <ViewAll
          headerlabel={'Trips'}
          onpress={() => navigation.navigate('Orders')}
        />
        {Drivers === ''
          ? null
          : Drivers.slice(0, 3).map((item, key) => (
              <GuestCards
                guestlogo={BASE_URL + item.img}
                guestname={item.name}
                guestemail={item.email}
                guestgender={item.gender}
              />
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
