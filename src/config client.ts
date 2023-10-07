const api = 'http://localhost:8081'
// const api = 'http://192.168.0.116:8081'
const client_url = 'http://localhost:3000';
// const client_url = 'http://localhost:3001';
// const client_url = 'https://ahaliyasdeensquare.com';
// const client_url = 'http://192.168.120.96:3000';
const products_api = `${client_url}/api/products`;
const reviews_api = `${client_url}/api/products/reviews`;
const questions_api = `${client_url}/api/products/questions`;

const categories_api = `${client_url}/api/categories`;
const subcategories_api = `${client_url}/api/categories/subcategories`;
const upload_api_client = `${client_url}/api/upload`;

const settings_api = `${client_url}/api/settings/subcategories`;
const privacy_policy_api = `${client_url}/api/sites-info/privacy-policy`;
const about_us_api = `${client_url}/api/sites-info/about-us`;
const terms_and_condition_api = `${client_url}/api/sites-info/terms-condition`;
const return_policy_api = `${client_url}/api/sites-info/return-policy`;

const site_title = 'AHALIYAS DEEN SQUARE'

const shops_api = `${client_url}/api/shops`;
// const api = 'https://ahaliyasdeensquare.onrender.com';
// const upload_api = 'http://localhost:8080'
const upload_api = client_url;
// const upload_api = 'https://static-ahaliyasdeensquare.onrender.com'

const file_upload_api = `${upload_api}/v1/files/upload/image`;

// const categories_api = `${api}/v1/products/categories`
// const subcategories_api = `${api}/v1/products/categories/subcategories`

const signup_api = `${client_url}/api/account/auth/signup`
// const signup_api = `${api}/v1/account/signup`
const signin_api = `${client_url}/api/account/auth/signin`
// const signin_api = `${api}/v1/account/signin`
// const refresh_api = `${api}/v1/account/refresh`
const refresh_api = `${client_url}/api/account/auth/refresh`


const carts_api = `${client_url}/api/account/carts`;
const checkout_api = `${client_url}/api/account/checkout`;
const user_profile_api = `${client_url}/api/account/profile`;
const address_api = `${client_url}/api/account/shipping-address`;
const wishlist_api = `${client_url}/api/account/wishlist`;
const notifications_api = `${client_url}/api/account/notifications`;
const products_question_api = `${client_url}/api/products/questions`;
const products_reviews_api = `${client_url}/api/products/reviews`;
const order_api = `${client_url}/api/account/orders`;

// done
// const products_api = `${api}/v1/products`
// const shopping_api = `${api}/v1/products/shopping`

const banner_api = `${api}/v1/products/banner`
// const flashSale_api = `${api}/v1/products`


// const wishlist_api = `${api}/v1/account/user/wishlist`;

// const notifications_api = `${api}/v1/account/user/notifications`;


// const carts_api = `${api}/v1/account/user/carts`;

// const checkout_api = `${api}/v1/account/user/checkout`;

// const order_api = `${api}/v1/account/user/orders`;

// const address_api = `${api}/v1/account/user/shipping-address`;

// const user_profile_api = `${api}/v1/account/user/profile`;

// const products_question_api = `${api}/v1/products/questions`;
// const products_reviews_api = `${api}/v1/products/reviews`;

// const reward_coins_api = `${api}/v1/reward-coins`;

// const vendors_api = `${api}/v1/vendors`;
// const settings_api = `${api}/v1/settings`;

// const privacy_policy_api = `${api}/v1/sites-info/privacy-policy`;
// const about_us_api = `${api}/v1/sites-info/about-us`;
// const terms_and_condition_api = `${api}/v1/sites-info/terms-and-condition`;
// const return_policy_api = `${api}/v1/sites-info/return-policy`;

export {
    upload_api_client,
    questions_api,
    products_api,
    categories_api,
    subcategories_api,
    settings_api,
    reviews_api,

    privacy_policy_api,
    about_us_api,
    terms_and_condition_api,
    return_policy_api,


    shops_api,
    client_url,
    banner_api,
    // return_policy_api,
    // terms_and_condition_api,
    // privacy_policy_api,
    // about_us_api,
    upload_api,
    // settings_api,
    // shopping_api,
    // categories_api,
    // vendors_api,
    signin_api,
    signup_api,
    // reward_coins_api,
    api,
    refresh_api,
    // products_api,
    // flashSale_api,
    wishlist_api,
    notifications_api,
    carts_api,
    address_api,
    user_profile_api,
    checkout_api,
    order_api,
    products_question_api,
    file_upload_api,
    // subcategories_api,
    products_reviews_api,
    site_title
}

