import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Banner3 = (props) => {
    var accountNumber = "******3203";
    var amount = "35";
    var transactionNumber = "UTR:906960771227";
    return (
        <View>
            
            <View style={styles.banner}>
                <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Debited from</Text>
                <View style={{flex:1, flexDirection: 'row', marginBottom: 50}}>
                    <View style={{flex:1}}>
                        {/* <Text style={{fontWeight: 'bold', fontSize: 16, flex: 1}}>img</Text> */}
                        <Image style={styles.bankImage} source={props.bankImage}  />
                    </View>
                    <View style={{flex: 9}}>
                        <View style={{ flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, flex: 8}}>{accountNumber}</Text>
                            <Text style={{fontWeight: 'bold', textAlign: 'right', fontSize: 16, flex: 2}}>{'\u20B9'}{amount}</Text>
                        </View>
                        <Text style={{marginBottom: 5}}>{transactionNumber}</Text>
                    </View>
                </View>
            </View>
        </View>
   
)};

const styles = StyleSheet.create({
    banner:{
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        height: 100,
    },
    bankImage: {
        height: 20,
        width: 20
    }
})

export default Banner3;