import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from "expo-mail-composer";

import logoImg from '../../assets/logo.png'

import styles from './styles';

function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.name}. estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.value)}`

    // don't over engeniring this simpliefy things

    //function navigateToIncidents(){
    //    navigation.navigate('Incidents'); 
    //}

    function navigateBack(){
        navigation.goBack();
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather  name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <FlatList 
                data={[1]}
                keyExtractor={detail => String(detail)}
                style={styles.incidentList}
                showsVerticalScrollIndicator={false}
                renderItem = {() => (
                    <View>
                        <View style={styles.incident}>
                            <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                            <Text style={styles.incidentValue}>{incident.name} de {incident.city} - {incident.uf} </Text>
                            
                            <Text style={styles.incidentProperty}>CASO:</Text>
                            <Text style={styles.incidentValue}>{incident.title}</Text>
                            
                            <Text style={styles.incidentProperty}>VALOR:</Text>
                            <Text style={styles.incidentValue}>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency', 
                                    currency:'BRL'
                                }).format(incident.value)}
                            </Text>
                        </View>

                        <View style={styles.contact}>
                            <Text style={styles.contactTitle}>
                                Salve o dia!
                            </Text>
                            <Text style={styles.contactTitle}>
                                Seja o herói desse caso.
                            </Text>
                            <Text style={styles.contactText}>
                                Entre em contato
                            </Text>

                            <View style={styles.buttonBox}>
                                <TouchableOpacity style={styles.contactButton} onPress={sendWhatsapp}>
                                    <Text style={styles.contactButtonText}>
                                        Whatsapp
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton} onPress={sendMail}>
                                    <Text style={styles.contactButtonText}>
                                        E-mail
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>

        
    );
}

export default Detail;