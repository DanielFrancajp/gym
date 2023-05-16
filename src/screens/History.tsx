import { useState } from 'react';
import { Heading, VStack, SectionList, Text, Center } from "native-base";


import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCardy } from "@components/HistoryCard";



export function History() {

    const [exercises, setExercises] = useState([
        {
            title: '05.05.2023',
            data: ['Puxada Frontal', 'Remada unilateral']
        },
        {
            title: '04.04.2023',
            data: ['Biceps']
        },
    ]);

 

    return (

        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios" />
            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCardy />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center" >
                        Não há exercícios registrados ainda. {'\n'}
                        Vamos fazer exercícios hoje?
                    </Text>
                )}
            />

        </VStack>
    )
}