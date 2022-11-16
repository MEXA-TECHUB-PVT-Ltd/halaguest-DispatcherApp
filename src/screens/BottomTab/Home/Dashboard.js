import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView, FlatList, StatusBar, ImageBackground,BackHandler,
    ScrollView,
    Image, View, Text, TouchableOpacity, TextInput,ActivityIndicator
} from 'react-native';

////////////////////app pakages//////////////
import { Checkbox } from 'react-native-paper';

//////////////////app icons////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

//////////////////////app components///////////////
import DashboardHeader from '../../../components/Header/DashboardHeade';
import ViewAll from '../../../components/ViewAll/ViewAll';
import GuestCards from '../../../components/CustomCards/GuestCards/GuestCards';
import OrdersCards from '../../../components/CustomCards/OrderCards/Orders';
import CustomCards from '../../../components/CustomCards/CustomCards';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../../../redux/actions';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import TopTabstyles from '../../../styles/GlobalStyles/TopTabstyles';
import Inputstyles from '../../../styles/GlobalStyles/Inputstyles';

/////////////////app images///////////
import { appImages } from '../../../constant/images';

const Orderss = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd9556-145571e29d72',
        title: 'Third Item',
      },
  ];
  const Guestss = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd9556-145571e29d72',
        title: 'Third Item',
      },
  ];

const Home = ({ navigation }) => {

    //Modal States
    const [modalVisible, setModalVisible] = useState(false);

    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    /////////////main menu status states/////////////
    const [Guests, setGuests] = useState('')

    const GetGuests = async () => {

        axios({
            method: 'GET',
            url: BASE_URL + 'api/guest/allGuests',
        })
            .then(async function (response) {
                console.log("list data here ", response.data)
                setGuests(response.data)
            })
            .catch(function (error) {
                console.log("error", error)
            })
        }

            /////////////main menu status states/////////////
    const [Orders, setOrders] = useState('')
        const GetOrders = async () => {

            axios({
                method: 'GET',
                url: BASE_URL + 'api/Order/allOrders',
            })
                .then(async function (response) {
                    console.log("list data here ", response.data)
                    setOrders(response.data)
                })
                .catch(function (error) {
                    console.log("error", error)
                })
            }
    

    useEffect(() => {
        GetGuests()
        GetOrders()
      
    }, []);
//     useEffect(() => {
//         // back handle exit app
//         BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
//         return () => {
//             BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
//         };
//     }, []);
// let backHandlerClickCount = 0;
//     const backButtonHandler = () => {
//         const shortToast = message => {
//             Toast.show(message, {
//                 duration: Toast.durations.LONG,
//                 position: Toast.positions.BOTTOM,
//             });
//         }
//         let backHandlerClickCount;
//         backHandlerClickCount += 1;
//         if ((backHandlerClickCount < 2)) {
//             shortToast('Press again to quit the application');
//         } else {
//             BackHandler.exitApp();
//         }

//         // timeout for fade and exit
//         setTimeout(() => {
//             backHandlerClickCount = 0;
//         }, 1000);
        
//         return true;
//     }
    return (
<SafeAreaView style={styles.container}>
    <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle="light-content" />
            <DashboardHeader
                headerlabel={'Username'}
                iconPress={() => { navigation.toggleDrawer() }}
                icon={'menu'}
                onpresseacrh={() => onSearch()}
            />
                        <ViewAll
                headerlabel={'Divers'}
                onpress={() =>navigation.navigate('DriverList')}
            />
{ Guestss === ''?null:
Guestss.slice(0, 3).map((item, key) => (
    <GuestCards
                                        // guestlogo={item.img}
                                        // guestname={item.name}
                                        // guestemail={item.email}
                                        // guestgender={item.gender}
                                        //guestlogo={item.img}
                                        guestname={'Drivers name here'}
                                        guestemail={'Email here'}
                                        guestgender={'Gender Here'}
                                    />
))

}

<ViewAll
                headerlabel={'Transaction History'}
                onpress={() =>navigation.navigate('OrderDetail')}
            />
{Orderss === ''?null:

Orderss.slice(0, 3).map((item, key) => (
    <GuestCards
                                        // guestlogo={item.img}
                                        // guestname={item.name}
                                        // guestemail={item.email}
                                        // guestgender={item.gender}
                                        //guestlogo={item.img}
                                        guestname={'Drivers name here'}
                                        guestemail={'Email here'}
                                        guestgender={'Gender Here'}
                                    />
))}


</ScrollView>

</SafeAreaView>

    )
};

export default Home;