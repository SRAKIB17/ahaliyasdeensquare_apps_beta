import AsyncStorage from "@react-native-async-storage/async-storage";
export async function ref_token() {
    const ref_tkn: any = await AsyncStorage.getItem('ref_tkn')
    return ref_tkn
}