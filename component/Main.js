import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-swiper'
import Drawer from 'react-native-drawer'

const Main = () => {

    const [total, setTotal] = useState(0)
    const [isToast, setToast] = useState(false)
    const [name, setName] = useState('')
    const [drawerOpen, setDrawer] = useState(false)

    const banners = [
        {
            id: 1,
            image: 'https://allgoodtales.com/wp-content/uploads/2018/10/Nike-Header-min.jpg',
            name: 'SLide 1'
        },
        {
            id: 1,
            image: 'https://www.preserveyorbalinda.com/includes/templates/nike%20uk//images/banner.jpg',
            name: 'SLide 2'
        },
        {
            id: 1,
            image: 'https://allgoodtales.com/wp-content/uploads/2018/10/Nike-Header-min.jpg',
            name: 'SLide 3'
        }
    ]

    const items = [
        {
            id: 1,
            image: 'https://static.nike.com/a/images/w_1536,c_limit/9de44154-c8c3-4f77-b47e-d992b7b96379/image.jpg',
            name: 'Nike Joyride'
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/originals/af/10/42/af10421073f3ca918dd3d1f68b532e77.jpg',
            name: 'Revelution 5'
        },
        {
            id: 3,
            image: 'https://s-media-cache-ak0.pinimg.com/736x/4c/5f/c9/4c5fc954feccdde473c3e376b25b127b.jpg',
            name: 'Nike Joyride'
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png',
            name: 'Mark Zawila'
        },

    ]

    function toast(name) {
        setTotal(total + 1)
        setName(name)
        setToast(true)
        setTimeout(() => setToast(false), 3000)
    }

    function openDrawer() {
        setDrawer(!drawerOpen)
    }

    const content = () => {
        return (
            <View style={{ width: "80%", height: '100%', backgroundColor: 'white' }}>
                <View style={styles.Header}>
                    <View style={{ width: '50%' }}>

                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={openDrawer}>
                            <IconMaterial name="clear" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <Drawer
            //ref={drawer}
            type="overlay"
            open={drawerOpen}
            content={content()}
            tapToClose={true}
            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles={drawerStyles}
            tweenHandler={(ratio) => ({
                main: { opacity: (2 - ratio) / 2 }
            })}
        >

            <View style={styles.Container}>
                <View style={styles.background}></View>
                <ScrollView style={styles.Main}>
                    {/* Header */}
                    <View style={styles.Header}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity onPress={() => openDrawer()}>
                                <IconMaterial name="dehaze" size={25} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <IconMaterial name="shopping-cart" size={25} color="black" />
                            <View style={{ width: 20, height: 20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 10, position: 'absolute', top: -10, right: -10 }}>
                                <Text style={{ fontSize: 10, color: 'white' }}>{total}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nike App Store</Text>
                    </View>

                    <View style={{ height: 160, width: '100%' }}>
                        <Swiper >
                            {banners.map((banner, index) =>
                                <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={{ uri: banner.image }} style={{ width: '90%', height: 100, borderRadius: 15 }} />
                                </View>
                            )}
                        </Swiper>
                    </View>

                    <View style={styles.actionContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            {items.map((item, index) =>
                                <View>
                                    <View style={styles.actionCard} key={index}>
                                        <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                                    </View>
                                    <View style={{ height: 30, width: 130, position: 'absolute', marginLeft: 15, marginTop: 170, flexDirection: 'row-reverse', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#636e72', justifyContent: 'center' }}>
                                        <View style={{ width: '60%', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontSize: 12 }}>{item.name}</Text>
                                        </View>
                                        <TouchableOpacity style={{ width: '20%', justifyContent: 'center' }} onPress={() => toast(item.name)}>
                                            <IconMaterial name="control-point" size={15} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </ScrollView>
                    </View>



                </ScrollView>
                {isToast ? (
                    <View style={{ width: '100%', alignItems: 'center', position: 'absolute', bottom: 10 }}>
                        <View style={{ backgroundColor: '#2d3436', alignItems: 'center', padding: 7, borderRadius: 10, opacity: 0.8 }}>
                            <Text style={{ color: 'white' }}>
                                {name} added
                        </Text>
                        </View>
                    </View>
                ) : (
                        <></>
                    )}
            </View>
        </Drawer>
    );
}

const drawerStyles = {
    drawer: { shadowColor: 'black', shadowOpacity: 1, shadowRadius: 3 },
    main: { paddingLeft: 3 },
}

var styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
    },
    Main: {
        //padding: 20
    },
    Header: {
        flexDirection: 'row',
        width: '100%',
        padding: 20
    },
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: '#dfe6e9',
        position: 'absolute',
        zIndex: -99,
        borderTopRightRadius: 250
    },
    actionContainer: {
        height: 200,
        width: '100%',
        flex: 1,
        flexDirection: 'row-reverse',
    },
    actionCard: {
        height: 160,
        width: 130,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 0,
        flex: 1,
        marginLeft: 15,
        //flexDirection: 'row'
    },
})

export default Main