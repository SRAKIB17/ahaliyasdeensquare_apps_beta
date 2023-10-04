import React, { useContext, useRef, useEffect } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Banner from './components/banner/Banner';
import { categories } from './components/Categories';
import CategorySection from './components/CategorySection';
import TextInputExample from '../../components/input/InputSearch';
import ProfileScreen from '../profile/ProfileScreen';
import { navigationInterface } from '../../navigators/NavigationContainer';
import SignInScreen from '../auth/signin/SignInScreen';


export default function HomeScreen(props: navigationInterface) {

    return (
        <SafeAreaView style={{ flex: 1, }}>

            <View>
                <Banner />
            </View>
            <View>
                <TextInputExample
                // onChangeText={() => { }}
                // placeholder={'fsdlf'} value={534}
                />
            </View>

            <SignInScreen />

            {/* {
                categories?.map(item => {
                    return (
                        <CategorySection
                            key={item.name}
                            name={item.name}
                            bg={item.bg}
                        // data={products}
                        // navigation={navigation}
                        />
                    )
                })
            } */}
            <View>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eveniet quidem similique fugit dolor totam qui atque ad. Quos ad explicabo earum eos tempora assumenda fugit est alias, blanditiis et.
                    Fuga, quas. Accusantium non aspernatur doloribus, recusandae aut eligendi nulla ex repellendus asperiores ad quas animi porro. Vitae at nisi, suscipit et veniam illo earum aspernatur impedit necessitatibus a deserunt?
                    Cum dicta excepturi voluptatem obcaecati modi? Et cumque id vel quam earum obcaecati numquam dolor magnam amet voluptate, pariatur rem magni, ab reiciendis unde veritatis? Tenetur, saepe! Quibusdam, ratione. Eligendi.
                    Dolore nostrum accusantium voluptates deleniti fuga possimus ea enim similique iste! Consequuntur voluptatem non mollitia? Magnam deserunt harum, id eos, laborum praesentium dolorem architecto perferendis omnis neque eligendi nihil? Quia!
                    Atque obcaecati voluptatum est et itaque reiciendis? Officiis aliquid autem vel nulla ipsa, sint nisi ut minus inventore maxime, ad repudiandae veritatis similique ratione assumenda alias facere a repellat voluptatem.
                    Similique perspiciatis iure aliquam quidem in. Quis quibusdam molestias accusantium? Labore maxime ipsum nesciunt omnis eos debitis quasi, explicabo corporis sequi dolor error cupiditate ipsam nisi blanditiis velit aliquam fuga?
                </Text>
            </View>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
