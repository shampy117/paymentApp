import React, {Component} from 'react';
import { View, Text,  StyleSheet, Image } from 'react-native';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Banner4 from './Banner4';
import sbi from '../../assets/sbi.png'
import { tsPropertySignature } from '@babel/types';


export default class PhonepePayment extends Component {
    render() {

        var time = "8:29 PM ";
        var on = "on"
        var date = " 10 Mar 2019";
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        
                        <Image source={this.props.backImage}  />
                        <View style={{flexDirection:'column'}}>
                        <Text style={styles.subHeader1}>
                            Transaction Successful
                        </Text>
                        <Text style={styles.subHeader2}>
                            {time}{on}{date}
                        </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.banner}>
                    <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Transaction ID</Text>
                    <View style={styles.copy}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, flex: 8}}>P1903102029406837769545</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 12, flex: 2, color:'purple', textAlign: 'right'}}>COPY</Text>
                    </View>
                </View>

                <Banner2 avatarImage={this.props.avatarImage} style={{marginBottom: 10}}/>
                <Banner3 bankImage={this.props.bankImage} style={{marginBottom: 10}}/>
                <Banner4 signImage={this.props.signImage} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#5CAB45',
    },
    header: {
        backgroundColor: "#5CAB45",
        height: 40,
        flexDirection: 'row',
    },
    subHeader1: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    subHeader2: {
        color: 'white',
        fontSize: 13
    },
    banner: {
        padding: 10,
        backgroundColor: 'white',
        height: 80,
    },
    copy: {
        flexDirection: 'row'
    }
})