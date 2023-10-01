import { useContext } from "react";
import CartScreen from "../screen/cart/CartScreen";
import HomeScreen from "../screen/home/HomeScreen";
import { NavigationProvider } from "./NavigationContainer";
import ProfileScreen from "../screen/profile/ProfileScreen";
import { assets_images } from "../assets/assets_images";
import NavbarTitleBackButton from "../components/shared/Navbar/NavbarTitleBackButton";
import OrderScreen from "../screen/order/OrderScreen";
import SettingsScreen from "../screen/settings/SettingsScreen";
import { WishlistScreen } from "../screen/wishlist/WishlistScreen";
import NotificationsScreen from "../screen/notifications/NotificationsScreen";
import AccountInformation from "../screen/account_information/AccountInformation";

export default function Router(props: any) {
    const { translate, pathname, drawerRef } = useContext(NavigationProvider);

    const {
        my_carts,
        my_profile,
        my_wishlists,
        settings,
        account_information,
        my_orders,
        notifications
    } = translate


    const router = [
        // /home
        {
            light: assets_images.home_light,
            dark: assets_images.home_dark,
            title: "Home",
            component: <HomeScreen  {...props} />,
            link: "/home",
        },

        // /profile
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Profile",
            link: "/profile",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={my_profile}
                key="profile_nav"
                backward="/profile"
            />,
            component: <ProfileScreen {...props} />
        },
        // /account-information
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Account information",
            link: "/account-information",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={account_information}
                key="profile_information_nav"
                backward="/profile"
            />,
            component: <AccountInformation key='my_profile_information' />
        },

        // /wishlists
        {
            light: assets_images.wishlist_light,
            dark: assets_images.wishlist_dark,
            title: "Favorite",
            link: "/wishlists",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={my_wishlists}
                key="wishlist_nav"
                backward="/profile"
            />,
            component: <WishlistScreen key='wishlist' />,
        },

        // /carts
        {
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
            title: "Cart",
            link: "/carts",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={my_carts}
                key="my_carts_nav"
                backward="/profile"
            />,
            component: <CartScreen key='my_carts' />
        },

        // /orders
        {
            light: assets_images.order_light,
            dark: assets_images.order_dark,
            title: "Orders",
            link: "/orders",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={my_orders}
                key="my_orders_nav"
                backward="/profile"
            />,
            component: <OrderScreen key='my_orders' />
        },
        // /notifications
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Notifications",
            link: "/notifications",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={notifications}
                key="notifications_nav"
                backward="/profile"
            />,
            component: <NotificationsScreen key='notifications' />
        },

        // /settings
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Settings",
            link: "/settings",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={settings}
                key="settings_nav"
                backward="/profile"
            />,
            component: <SettingsScreen key='settings' />
        },




    ];

    return router.find(component => component.link == pathname)
}