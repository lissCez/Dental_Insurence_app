import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

interface Patient {
    nome: string;
    sexo: string;
    naturalidade: string;
    localNascimento: string;
    dataNascimento: string;
}

const PATIENT_COLLECTION = 'patients';

export const addPatient = async (patient: Patient) => {
    try {
        const docRef = await addDoc(collection(db, PATIENT_COLLECTION), patient);
        console.log('Paciente cadastrado com ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Erro ao cadastrar paciente:', error);
        throw error;
    }
};

export const fetchPatients = async (): Promise<Patient[]> => {
    try {
        const snapshot = await getDocs(collection(db, PATIENT_COLLECTION));
        const patients: Patient[] = [];
        snapshot.forEach((doc) => {
            patients.push(doc.data() as Patient);
        });
        return patients;
    } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
        throw error;
    }
};