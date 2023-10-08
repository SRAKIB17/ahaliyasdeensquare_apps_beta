import axios from 'axios'
import { wishlist_api } from '../config'
import { ref_token } from '../hooks/ref_token'

const fetchWishlist = async () => {
    try {
        const { data } = await axios.get(wishlist_api, {
            headers: {
                "ref_tkn": await ref_token(),
            }
        })
        return data
    }
    catch {
        return {}
    }
}

export { fetchWishlist }