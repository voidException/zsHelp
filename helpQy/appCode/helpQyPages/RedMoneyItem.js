import{
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    TouchableOpacity
} from 'react-native';
import React,{ Component } from 'react';
import {UrluseMyRedMoney} from "../utils/url";
import fetchTool from "../utils/fetchTool";
let {width,height}=Dimensions.get('window');
let ratio = PixelRatio.get();
export default class RedMoneyItem extends Component{
    constructor(props){
        super(props);
        this.state={
            MoneyStatus:"active",
            startTime:"a",
            endTime:"",
            isPressed:true,
            disabled:false,
        }

    }

    componentWillMount(){

        //格式化时间
        let timeNeedHandle=this.props.row.redmoneydate;
        let redmoneyState=this.props.row.redmoneystate;

        let date = new Date(timeNeedHandle);
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        // let itemEndTime=Y+M+D;
        var   hour=date.getHours();
        var   minute=date.getMinutes();
        var   second=date.getSeconds();
        let itemEndTime=Y+M+D+' '+hour+':'+minute+':'+second+'';
        this.setState({
            startTime:itemEndTime,
            MoneyStatus:redmoneyState,
            isPressed:false,
            disabled:true,
        });
        if(redmoneyState=="used"){
            console.log("这是一个已经使用的红包");
            this.setState({
                isPressed:true,
                disabled:true
            })
        }
    }

    _onPressButton(){
        console.log('按钮方法');
            this.setState({
                MoneyStatus: "used",
                isPressed:true,
                disabled:true,
            });
                console.log("红包已经是使用状态了");


                //使用红包的方法
        // let redMoney={
        //             useruuid:'94111BD33D3F474590C535C0BE24905B',
        //             redmoneystate:this.state.MoneyStatus,
        //             };
        // let options={
        //     url:UrluseMyRedMoney,
        //     body:JSON.stringify(redMoney)
        // };
        // let response=fetchTool(options);
        // response.then(resp=>{
        //     console.log(resp.result)
        //     if(resp.retcode=2000){
        //         console.log("使用红包成功")
        //     }
        // })
    }



    render(){
        return(
            <View style={styles.ZongView}>
                <View style={styles.MoneyView}>
                    <Text style={{textAlign:'center',color:'#f44e38'}}>￥<Text style={{textAlign:'center',color:'#f44e38',fontSize:45,fontWeight:'bold'}}>5</Text></Text>
                </View>
                <View  style={styles.StatusView}>
                    <Text style={styles.StatusFont}>{this.state.startTime}过期{this.state.MoneyStatus}</Text>
                </View>
                <View style={styles.BashedLine}></View>
                <View  style={styles.ButtonView}>
                    <TouchableOpacity display={this.state.disabled} style={{width:80,
                        height:30,
                        // backgroundColor:'#fa543c',
                        backgroundColor:this.state.isPressed?'#d3d3d3':'#fa543c',
                        borderRadius:30,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignSelf:'center',}} onPress={this._onPressButton.bind(this)}>

                        <Text style={{textAlign:'center', height:30, lineHeight:30, borderRadius:30,
                            color:this.state.isPressed?'darkgray':'#f5d6af'
                        }}>{this.state.isPressed?'已使用':'立即使用'}</Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
}
}
const styles=StyleSheet.create({
    ZongView: {
        flex:1,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        height:width*0.25,
        marginTop:15,
        marginLeft:10,
        marginRight:10,
    },
    MoneyView: {
        flex:2,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'#fdfdfd',
        borderTopLeftRadius:3,
        borderBottomLeftRadius:3
    },
    StatusView:{
        flex:3,
        alignContent:'center',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        backgroundColor:'#fdfdfd'
    },
    ButtonView:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        backgroundColor:'#fdfdfd',
        width:100,
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
    },
    BashedLine:{
        borderColor:'black',
        marginTop:10,
        marginBottom:10,
        width:1/ratio,
        height:90
    },
    Button:{
        width:80,
        height:30,
        backgroundColor:'#fa543c',
        borderRadius:30,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
    },
    ButtonFont:{
        textAlign:'center',
        height:30,
        lineHeight:30,
        borderRadius:30,
        color:'#f5d6af'
    },
    StatusFont:{
    textAlign:'center',
    fontSize:10
    }

})
