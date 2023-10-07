import { useContext } from "react";
import CartScreen from "../screen/cart/CartScreen";
import HomeScreen from "../screen/home/HomeScreen";
import { NavigationProvider, navigationInterface } from "./NavigationContainer";
import ProfileScreen from "../screen/profile/ProfileScreen";
import { assets_images } from "../assets/assets_images";
import NavbarTitleBackButton from "../components/shared/Navbar/NavbarTitleBackButton";
import OrderScreen from "../screen/order/OrderScreen";
import SettingsScreen from "../screen/settings/SettingsScreen";
import { WishlistScreen } from "../screen/wishlist/WishlistScreen";
import NotificationsScreen from "../screen/notifications/NotificationsScreen";
import AccountInformation from "../screen/account_information/AccountInformation";
import ShippingAddressScreen from "../screen/shipping_address/ShippingAddressScreen";
import SignInScreen from "../screen/auth/signin/SignInScreen";
import SignUpScreen from "../screen/auth/signup/SignUpScreen";
import PrivacyPolicyScreen from "../screen/static/PrivacyPolicyScreen";
import TermsConditionScreen from "../screen/static/TermsConditionScreen";


export default function Router(props: navigationInterface) {
    const { translate, navigation: { pathname, params }, navigate_link } = props
    console.log(params)
    const {
        my_carts,
        my_profile,
        my_wishlists,
        settings,
        account_information,
        my_orders,
        shipping_address,
        notifications,

        privacy_policy,
        terms,

        sign_in,
        sign_up,
    } = translate

    const router = [
        // /home
        {
            title: "Home",
            component: HomeScreen,
            link: navigate_link.home,
        },
        // privacy-policy
        {
            title: "Privacy Policy",
            component: PrivacyPolicyScreen,
            navbar: <NavbarTitleBackButton
                title={privacy_policy}
                key="privacy_policy_nav"
                backward={navigate_link.sign_up}
            />,
            link: navigate_link.privacy_policy,
        },
        // terms-condition
        {
            title: "Terms Condition",
            component: TermsConditionScreen,
            navbar: <NavbarTitleBackButton
                title={terms}
                key="terms_condition_nav"
                backward={navigate_link.sign_up}
            />,
            link: navigate_link.terms_condition,
        },
        // sign-in
        {
            title: "Sign In",
            navbar: <NavbarTitleBackButton
                title={sign_in}
                key="sign_in_nav"
                backward={navigate_link.profile}
            />,
            component: SignInScreen,
            link: navigate_link.sign_in,
        },
        // sign-up
        {
            title: "Sign Up",
            navbar: <NavbarTitleBackButton
                title={sign_up}
                key="sign_up_nav"
                backward={navigate_link.sign_in}
            />,
            component: SignUpScreen,
            link: navigate_link.sign_up,
        },
        // /profile
        {
            title: "Profile",
            link: navigate_link.profile,
            navbar: <NavbarTitleBackButton
                title={my_profile}
                key="profile_nav"
                backward={navigate_link.home}
            />,
            component: ProfileScreen
        },
        // /account-information
        {
            title: "Account information",
            link: navigate_link.account_information,
            navbar: <NavbarTitleBackButton
                title={account_information}
                key="profile_information_nav"
                backward={navigate_link.profile}
            />,
            component: AccountInformation
        },

        // wishlists
        {
            title: "Favorite",
            link: navigate_link.wishlists,
            navbar: <NavbarTitleBackButton
                title={my_wishlists}
                key="wishlist_nav"
                backward="/profile"
            />,
            component: WishlistScreen,
        },

        // wishlists
        {
            title: "Shipping Address",
            link: navigate_link.shipping_address,
            navbar: <NavbarTitleBackButton
                title={shipping_address}
                key="shipping_address_nav"
                backward="/profile"
            />,
            component: ShippingAddressScreen,
        },

        // carts
        {
            title: "Cart",
            link: navigate_link.carts,
            navbar: <NavbarTitleBackButton
                title={my_carts}
                key="my_carts_nav"
                backward="/profile"
            />,
            component: CartScreen
        },

        // orders
        {
            title: "Orders",
            link: navigate_link.orders,
            navbar: <NavbarTitleBackButton
                title={my_orders}
                key="my_orders_nav"
                backward="/profile"
            />,
            component: OrderScreen
        },

        // notifications
        {
            title: "Notifications",
            link: navigate_link.notifications,
            navbar: <NavbarTitleBackButton
                title={notifications}
                key="notifications_nav"
                backward="/profile"
            />,
            component: NotificationsScreen
        },

        // settings
        {
            title: "Settings",
            link: navigate_link.settings,
            navbar: <NavbarTitleBackButton
                title={settings}
                key="settings_nav"
                backward="/profile"
            />,
            component: SettingsScreen
        },
    ];

    return router.find(component => component.link == pathname)
}