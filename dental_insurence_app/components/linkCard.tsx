import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, iconName }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={iconName as any} size={32} color="white" />
        </View>
        <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: '#03a1fc',
    alignItems: 'center',
    paddingVertical: 20,
  },
  content: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
    color: '#444',
  },
});

export default FeatureCard;
