import React, {useEffect, useState, useRef} from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import CustomTopTabs from '../../../components/TopTabs/CustomTopTabs';
import AccountDetail from '../../../components/CreateAcount/AcountDetail';
import PaymentDetail from '../../../components/CreateAcount/PaymentDetail';

////////////////////redux////////////
import {useSelector, useDispatch} from 'react-redux';
import { setNavPlace,setTopTabDocument,setTopTabDriver,setTopTabPayment,setTopTabVehicle } from '../../../redux/actions';

/////////////////////height width pakage/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import TopTabstyles from '../../../styles/GlobalStyles/TopTabstyles';

/////////////////app images///////////
import {appImages} from '../../../constant/images';

const CreateAccount = ({navigation, route}) => {
  console.log('previous data:', route.params);

  ////////////prevous data States///////////////
  const [predata] = useState(route.params);

  /////////////////////////redux///////////////////

  const {top_tab_dispatcher,top_tab_dispatcher_payment} =
    useSelector(state => state.userReducer);
  const dispatch = useDispatch();


  /////////////top tab status states/////////////
  const [Driver, setDriver] = useState(true);
  const [Vehicle, setVehicle] = useState(false);
  const [Payment, setPayment] = useState(false);
  const [Documents, setDocuments] = useState(false);

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {}, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'black'} barStyle="light-content" />
        <CustomHeader
          headerlabel={'Create Account'}
          iconPress={() => {
            navigation.goBack();
          }}
          icon={'chevron-back'}
          // searchicon={'search'}
          //type={'crypto'}
          onpresseacrh={() => onSearch()}
        />
        <View style={[TopTabstyles.TopTabView,{paddingHorizontal:wp(12)}]}>
            <CustomTopTabs title={'Transport Detail'} width={'30%'} state={!top_tab_dispatcher} />
            <CustomTopTabs title={'Payment Details'} width={'30%'} 
            //state={!top_tab_dispatcher_payment} 
            />
        </View>
        {top_tab_dispatcher  ? (
 <AccountDetail/>
        ) : top_tab_dispatcher_payment ? (
    <PaymentDetail
    nav={navigation}
    />
        ) 
        : null}


      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateAccount;
