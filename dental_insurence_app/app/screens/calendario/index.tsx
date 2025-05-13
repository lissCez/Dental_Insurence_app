import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Calendario = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [events, setEvents] = useState<{ [key: string]: string[] }>({
        '2025-05-13': ['Consulta com Dr. João - 10:00 AM', 'Consulta com Dr. Ana - 02:00 PM'],
        '2025-05-15': ['Consulta com Dr. Carlos - 11:00 AM'],
    });

    const handleDayPress = (day: any) => {
        const date = day.dateString;
        setSelectedDate(date);
        setModalVisible(true);
    };

    const renderEvents = () => {
        const dayEvents = events[selectedDate] || [];
        if (dayEvents.length === 0) {
            return <Text>No consultations on this day.</Text>;
        }
        return dayEvents.map((event, index) => <Text key={index}>{event}</Text>);
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Calendar
                onDayPress={handleDayPress}
                markedDates={{
                    '2025-05-13': { selected: true, marked: true, selectedColor: 'blue' },
                    '2025-05-15': { selected: true, marked: true, selectedColor: 'blue' },
                }}
                markingType={'custom'}
            />

            <Modal visible={isModalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Consultas em {selectedDate}</Text>
                    {renderEvents()}
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{ color: 'blue', marginTop: 20 }}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Link href="/screens/home" asChild>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkTexto}>⭠ Voltar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default Calendario;

const styles = StyleSheet.create({
    link: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
      width: "80%"
    },
    linkTexto: {
      color: '#03a1fc',
      fontWeight: '600',
    }
  });
  