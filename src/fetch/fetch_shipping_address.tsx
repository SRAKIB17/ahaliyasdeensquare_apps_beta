import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { address_api } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage'

const fetchShippingAddress = async () => {
    try {
        const ref_tkn: any = await AsyncStorage.getItem('ref_tkn')
        const res = await fetch(address_api, {
            headers: {
                "ref_tkn": ref_tkn
            },
            method: "GET",
            cache: 'no-cache'
        })
        const data = await res.json()
        return data
    }
    catch {
        return {}
    }
}


const fetchShippingAddressSpecific = async (id: string) => {
    try {
        const ref_tkn: any = await AsyncStorage.getItem('ref_tkn')
        const { data } = await axios.get(`${address_api}/${id}`, {
            headers: {
                "ref_tkn": ref_tkn
            }
        })
        return data
    }
    catch {
        return {}
    }
}



export { fetchShippingAddress, fetchShippingAddressSpecific }