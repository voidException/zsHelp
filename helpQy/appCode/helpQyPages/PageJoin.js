/**
 * 提供加入计划页面，要请求网络展现共有多少人加入，显示loading
 *
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
export default class PageJoin extends  Component{
    constructor(props){
        super(props);
        this.state = {
            animationType: 'slide',
            modalVisible: true,
            transparent: true,
        };
    }
    componentDidMount(){
     //这里要获取已经加入的人数
    }
    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }
    render(){
        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: '#fff', padding: 20}
            : null;
        var activeButtonStyle = {
            backgroundColor: '#ddd'
        };
        return(
            <View style={styles.container}>
                {/*这里是填写保障人信息的地方*/}
                <View style={styles.inputsWrap}>
                    <View style={styles.email}>
                        <View style={styles.labelWrap}>
                            <Text style={styles.emailText}>姓   名</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <TextInput
                                style={styles.passwordinput}
                                placeholder='输入被保障人姓名'
                                keyboardType='email-address'
                                maxLength={30}
                                ref='refemail'
                                autoCapitalize='none'
                                clearButtonMode='always'
                                clearTextOnFocus={false}
                                keyboardAppearance='dark'
                                autoCorrect={false}
                            />
                        </View>
                    </View>
                    <View style={styles.email}>
                        <View style={styles.labelWrap}>
                            <Text style={styles.emailText}>身份证</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <TextInput
                                style={styles.passwordinput}
                                placeholder='被保障人的身份证号'
                                keyboardType='email-address'
                                maxLength={30}
                                ref='refemail'
                                autoCapitalize='none'
                                clearButtonMode='always'
                                clearTextOnFocus={false}
                                keyboardAppearance='dark'
                                autoCorrect={false}
                            />
                        </View>
                    </View>
                    <View style={styles.email}>
                        <View style={styles.labelWrap}>
                            <Text style={styles.emailText}>充   值</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text style={{width:100}}>请选择</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/*这里是模态弹出框*/}

                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                        <View style={styles.selectPayMoneyWrapper}>
                            <View style={styles.selectPayMoney}>
                                <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                                      <Text style={{width:40}}>取消</Text>
                                </TouchableOpacity>
                                <Text>选择充值金额</Text>
                                <Text style={{width:40}}></Text>
                            </View>
                            {/*温馨提示*/}
                            <View style={styles.tips}>
                                <Text style={{fontWeight:'bold',fontSize:12}}>温馨提示:</Text>
                                <Text style={{fontSize:12,color:'#949697'}}>建议充值30以上，避免余额不足失去保障</Text>
                            </View>
                            {/*充值金额*/}
                            <View style={styles.itemMoneyS}>
                                <View style={styles.itemMoney}>
                                    <Text>9元</Text>
                                </View>
                                <View style={[styles.itemMoney,styles.moneySpecial]}>
                                    <Text>30元</Text>
                                </View>
                                <View style={styles.itemMoney}>
                                    <Text>50元</Text>
                                </View>
                            </View>
                            <View style={styles.itemMoneyS}>
                                <View style={styles.itemMoney}>
                                    <Text>100元</Text>
                                </View>
                                <View style={[styles.itemMoney,styles.moneySpecial]}>
                                    <Text>150元</Text>
                                </View>
                                <View style={styles.itemMoney}>
                                    <Text>300元</Text>
                                </View>
                            </View>

                        </View>
                </Modal>

            </View>
        );
    }
}

let styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    inputsWrap:{
        margin:10,
        backgroundColor:'#fff',
        marginTop:30
    },
    email:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:44,
        marginTop:30
    },
    emailText:{
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },

    labelWrap: {
        height: 45,
        justifyContent: 'center',
        width:60
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        color:'#666666'
    },
    inputWrap: {
        borderBottomColor:'#CCCCCC',
        backgroundColor:'#FFFFFF',
        height: 45,
        justifyContent: 'center',
        borderBottomWidth:1/ratio,
    },
    passwordinput:{
        height: 45,
        width: width-90,
        fontSize: 16,
        paddingLeft: 10,
    },
    selectPayMoneyWrapper:{
        position:'absolute',

        left:0,
        bottom:0,
        height:0.5*height,
        backgroundColor:'#fff',
        width:width,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        zIndex:5
    },
    selectPayMoney:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:40,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1/ratio,
    },
    tips:{
        flexDirection:'row',
        height:20,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    itemMoneyS:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:5,
        marginRight:5
    },
    itemMoney:{
        backgroundColor:'#EDEEEF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:60,
        flex:1,
        marginTop:3
    },
    moneySpecial:{
        marginLeft:3,
        marginRight:3
    }

});

















