import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

interface HistoryItem {
    key: string;
    amount: string;
    tipPercent: number;
    tipAmount: string;
    totalAmount: string;
}

const TipCalculator: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [customTip, setCustomTip] = useState<string>('');
    const [selectedTip, setSelectedTip] = useState<number | null>(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);

    const tipOptions: number[] = [10, 15, 20];

    const calculateTip = (percentage: number | null) => {
        const billAmount = parseFloat(amount);
        if (isNaN(billAmount) || billAmount <= 0) return;

        const tipPercent = percentage !== null ? percentage : parseFloat(customTip);
        if (isNaN(tipPercent) || tipPercent <= 0) return;

        const tipAmount = (billAmount * tipPercent) / 100;
        const totalAmount = billAmount + tipAmount;

        const newEntry: HistoryItem = {
            key: Math.random().toString(),
            amount: billAmount.toFixed(2),
            tipPercent,
            tipAmount: tipAmount.toFixed(2),
            totalAmount: totalAmount.toFixed(2),
        };

        setHistory([newEntry, ...history]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de Propinas</Text>

            <Text style={styles.label}>Monto de consumo</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Monto de consumo"
                value={amount}
                onChangeText={setAmount}
            />

            <Text style={styles.label}>Selecciona un porcentaje de propina:</Text>
            <View style={styles.buttonContainer}>
                {tipOptions.map((tip) => (
                    <TouchableOpacity
                        key={tip}
                        style={[styles.tipButton, selectedTip === tip && styles.selectedTipButton]}
                        onPress={() => { setSelectedTip(tip); calculateTip(tip); }}
                    >
                        <Text style={styles.tipButtonText}>{`${tip}%`}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>Propina personalizada %</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Propina personalizada %"
                value={customTip}
                onChangeText={setCustomTip}
            />

            <TouchableOpacity style={styles.calculateButton} onPress={() => calculateTip(null)}>
                <Text style={styles.calculateButtonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>Historial de cálculos:</Text>
            <FlatList
                data={history}
                renderItem={({ item }) => (
                    <View style={styles.historyItem}>
                        <Text style={styles.historyText}>
                            <Text style={styles.historyLabel}>Consumo:</Text> ${item.amount} |{' '}
                            <Text style={styles.historyLabel}>Propina:</Text> {item.tipPercent}% (${item.tipAmount}) |{' '}
                            <Text style={styles.historyLabel}>Total:</Text> ${item.totalAmount}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#e9f5ff', // Suave tono azul claro de fondo
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#004d6a', // Color azul oscuro
        marginTop: 40,
        marginBottom: 30,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        borderColor: '#b0d0dc', // Gris azulado
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    tipButton: {
        backgroundColor: '#6c98c6', // Azul suave
        padding: 12,
        margin: 5,
        borderRadius: 8,
        width: '30%',
        alignItems: 'center',
    },
    selectedTipButton: {
        backgroundColor: '#507da4', // Azul más oscuro cuando está seleccionado
    },
    tipButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    calculateButton: {
        backgroundColor: '#ff8a65', // Color coral suave
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
    },
    calculateButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        marginVertical: 15,
        color: '#004d6a', // Azul oscuro
    },
    historyItem: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    historyText: {
        fontSize: 16,
        color: '#333',
    },
    historyLabel: {
        fontWeight: 'bold',
    },
});

export default TipCalculator;