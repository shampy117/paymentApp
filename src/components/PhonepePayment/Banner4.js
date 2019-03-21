import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Banner4 = (props) => {
    var accountNumber = "******3203";
    var amount = "35";
    var transactionNumber = "UTR:906960771227";
    return (
        <View style={styles.banner}> 
            <View style={{flex: 1, flexDirection: 'row', justifyContents: 'center', alignItems:'center'}}>
                <Image style={styles.signImage} source={props.signImage}  />                
                <Text style={{marginBottom: 10, fontSize: 15, flex: 9, fontWeight: 'bold', }}>Contact PhonePe Support</Text>
            </View>
        </View>
   
)};

const styles = StyleSheet.create({
    banner:{
        alignItems: 'center',
        marginTop: 10,
        padding: 5,
        backgroundColor: 'white',
        height: 50,
    },
    signImage: {
        marginLeft: 10,
        marginTop: -5,
        marginRight: 30,
        height: 18,
        width: 18
    }
})

export default Banner4;