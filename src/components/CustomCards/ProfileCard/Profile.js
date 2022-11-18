import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

    ////////////app icons////////////
    import Icon from 'react-native-vector-icons/Ionicons';

    //////////////app pakages/////////////
import {
    Avatar,
} from 'react-native-paper';

const ProfileCard = (props) => {
    return (
        <View style={styles.card}>

        <Avatar.Image
       // source={{uri:props.userlogo}}
           source={props.userlogo}
            size={wp(23)}
            style={{backgroundColor:Colors.appgreycolor}}
        />
            <Text style={styles.itemmaintext}>{props.username}
            </Text>
       
            <Text style={styles.itemsubtext}>{props.useremail}
            </Text>

</View>
    )
};

export default ProfileCard;