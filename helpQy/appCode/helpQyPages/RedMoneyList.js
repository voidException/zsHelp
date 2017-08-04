import{
    RefreshControl,
    View,
    Dimensions,
    FlatList,
} from 'react-native';

import  React,{Component,} from 'react';
import {UrlgetMyRedMoney} from '../utils/url';
import RedMoneyItem from './RedMoneyItem';
import fetchTool from "../utils/fetchTool";
let { width,height}=Dimensions.get('window');


export  default  class RedMoneyList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing:false,
            visible:false,
            dataSource: [],

        };
    }


    componentWillMount(){
        let user={
            useruuid:'94111BD33D3F474590C535C0BE24905B',
        };
        let options={
            url:UrlgetMyRedMoney,
            body:JSON.stringify(user)
        };
        let response=fetchTool(options);
        response.then(resp=>{
           console.log(resp.result)
            if(resp.retcode==2000){
                this.setState({
                    visible:false,
                    dataSource:resp.result
                })
            }

        });
    }

    _keyExtractor = (item, index) => item.redmoneyid; //用于为item对象生成一个唯一的标识id  用来区分

    _onRefresh(){     //
        console.log('*******************************')   //用于页面刷新时的方法
    }

    _renderItem=({item}) =>(      //页面list的一个对象的生成 和属性定义
        <RedMoneyItem
            key={item.redmoneyid}
            row={item}
            {...this.props}

        />
    );

    render(){
        return(
            <View  style={{flex:1,backgroundColor:'#e7d45e'}}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"/>}
                    data={this.state.dataSource}
                    refreshing={false}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    onRefresh={this._onRefresh()}
                    initialListSize={2}
                    pageSize={4}
                />

            </View>
        );
    }
}






