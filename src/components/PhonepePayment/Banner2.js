import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Banner2 = (props) => {
    var name = "Abhinav";
    var amount = "35";
    var phoneNumber = "9161513537";
    var kycName = "Abhinav Kushwaha";
    return (
        <View>
            <View style={styles.banner}>
                <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Paid to</Text>
                <View style={{flex:1, flexDirection: 'row', marginBottom: 50}}>
                    <View style={{flex:1}}>
                        <Image style={styles.avatarImage} source={props.avatarImage}  />
                    </View>
                    <View style={{flex: 9, marginLeft: 20 }}>
                        <View style={{ flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, flex: 8}}>{name}</Text>
                            <Text style={{fontWeight: 'bold', textAlign: 'right', fontSize: 16, flex: 2}}>{'\u20B9'}{amount}</Text>
                        </View>
                        <Text style={{marginBottom: 5}}>{phoneNumber}</Text>
                        {/* <Text>{kycName}</Text> */}
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}} >
                    <Text style={{flex:3}}></Text>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 12, textAlign:'right', color:'purple'}}>SEND AGAIN</Text>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 12, textAlign:'right', color:'purple'}}>SHARE</Text>
                </View>
            </View>
        </View>
   
)};

const styles = StyleSheet.create({
    banner:{
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        height: 160,
    },
    avatarImage: {
        height: 40,
        width: 40
    }
})

export default Banner2;