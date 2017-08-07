/**
 * 这个是我的员工列表
 */
import{
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Navigator,
    RefreshControl,
    View,
    ListView,
    PixelRatio,
    Platform,
    Alert,
    Button,
    TextInput,
    Modal
} from 'react-native';
import React,{Component} from 'react';

let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
let ratio = PixelRatio.get();
export default class MyEmployee extends  React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            transparent: true,
            theNameOfCategoryType:"",
        };
    }
    componentDidMount(){
        //这里要获取已经加入的人数
        console.log(this.props.row)
    }

    goLogin(){
        this.props.navigation.navigate('PageLogin');
    }

    render(){

        return(
            <View style={styles.container}>
                {/**/}
                <View style={styles.itemtop}>
                    <View style={styles.nameOuter}>
                        <View style={styles.nameWrapper}>
                            <Text style={{color:'#fff',}}>{this.props.row.username}</Text>
                        </View>
                        <Text style={{fontSize:20}}>{this.props.row.categorytype}</Text>
                    </View>
                    <Image source={require('./img/userPhoto.png')} resizeMode={'contain'} style={{width:70,height:70,borderRadius:35,}}  />
                </View>
                {/**/}
                <View style={styles.itemMiddle}>
                    <Image source={require('./img/authorize_ico.png')}  resizeMode={'contain'} style={{width:16,height:16}}/>
                    <Text style={{fontSize:12,marginLeft:10}}>已加入<Text>30</Text>天，等待剩余期<Text>150</Text>天</Text>
                </View>
                {/**/}
                <View style={styles.itemBottom}>
                    <View style={styles.itemBottomLeft}>
                        <Text style={{fontSize:20}}>￥</Text>
                        <Text style={{fontSize:20}}>{this.props.row.remainfee/100}</Text>
                    </View>
                    <View style={styles.itemBottomRight}>
                        <Text onPress={this.goLogin.bind(this)}>充值</Text>
                    </View>
                </View>

            </View>
        );
    }
}

let styles=StyleSheet.create({
    container: {
        margin:5,
        height:150,
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:10,
        padding:6,
        justifyContent:'center',
    },
    itemtop:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    nameOuter:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-around',
        height:60,
    },
    nameWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3C92F7',
        height:20,
        width:90,
        borderRadius:7
    },
    itemMiddle:{
        flexDirection:'row'
    },
    itemBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:2
    },
    itemBottomLeft:{
        width:width*0.45,
        flexDirection:'row',
        justifyContent:'flex-start',
        height:40,
        alignItems:'center'
    },
    itemBottomRight:{
        width:80,
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#FFF8E7',
        borderRadius:25,
        alignItems:'center'
    }
});



















