import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import * as ImagePicker from 'expo-image-picker'
import {
    Center,
    ScrollView,
    VStack,
    Skeleton,
    Text,
    Heading
} from "native-base";

const PHOTO_SIZE = 33;

export function Profile() {

    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('https://github.com/DanielFrancajp.png')

    async function handleUserPhotoSelect() {

        try {


            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
            });


            if (photoSelected.canceled) {
                return;
            }

            if (photoSelected.assets[0].uri) {
                setUserPhoto(photoSelected.assets[0].uri)
            }
            setUserPhoto(photoSelected.assets[0].uri)
        } catch (error) {
            console.log(error)
        } finally {
            setPhotoIsLoading(false)
        }
    }

    return (
        <VStack flex={1}>
            <ScreenHeader
                title="Perfil"
            />
            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt={6} px={10}>
                    {
                        photoIsLoading ?
                            < Skeleton
                                w={PHOTO_SIZE}
                                h={PHOTO_SIZE}
                                rounded="full"
                                startColor="gray.500"
                                endColor="gray.400"
                            />
                            :
                            <UserPhoto
                                source={{ uri: userPhoto }}
                                alt="Foto do usuário"
                                size={PHOTO_SIZE}
                            />
                    }

                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar Foto
                        </Text>
                    </TouchableOpacity>

                    <Input
                        bg="gray.600"
                        placeholder="Nome"
                    />
                    <Input
                        bg="gray.600"
                        value="exemplo@gmail.com"
                        isDisabled
                    />
                </Center>

                <VStack px={10} mt={12} mb={9}>
                    <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
                        Alterar Senha
                    </Heading>
                    <Input
                        bg="gray.600"
                        placeholder="Senha antiga"
                        secureTextEntry
                    />
                    <Input
                        bg="gray.600"
                        placeholder="Nova Senha"
                        secureTextEntry
                    />

                    <Input
                        bg="gray.600"
                        placeholder="Confirme a nova senha"
                        secureTextEntry
                    />
                    <Button
                        title="Atualizar"
                        mt={4}
                    />
                </VStack>
            </ScrollView>

        </VStack>
    )
}