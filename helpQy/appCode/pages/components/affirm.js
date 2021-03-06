import{
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	NavigatorIOS,
	Navigator,
	RefreshControl,
	View,
	ListView,
	PixelRatio,
	Platform,
	Dimensions
} from 'react-native';
import React,{ Component } from 'react';
import  fetchTool from '../../utils/fetchTool';
import  PostAffirm  from './postAffirm';
import AffirmList from './affirmList';
import {UrlAffirmList} from '../../utils/url';
let ratio = PixelRatio.get();
let lineHeight = Platform.OS === 'ios' ? 14 : 16;
let statusBarHeight = Platform.OS === 'ios' ? 20 : 0;
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
export default class Affirm extends Component{ //<Affirm   confirmList={this.state.confirmList}    navigator={this.props.navigator} userProfile={this.props.userProfile} tweetid={this.props.tweetid}/>
	constructor(props){
		super(props); //含有userProfile的
		this.state={
			count: 0,
			affirmInfo:"还没有人证实哦",
			affirm:this.props.confirmList
		}
	}

    componentDidMount(){
    	// console.log("aa");
    	// console.log(this.props)
		
    }
    componentWillReceiveProps(nextProps) {
    	// console.log("bb");
    	// console.log(this.nextProps)
    }

	postAffirm(){     
		this.props.navigator.push({
			component:PostAffirm,
			params:{
				token:this.props.userProfile.items.backupfour,
				notsay:this.props.userProfile.items.notsay,
				tweetid:this.props.tweetid,
			}
		});
	}

    goAffirmList(){
    	if (this.state.count==0) {
    		return
    	};
		this.props.navigator.push({
			component:AffirmList,
			params:{
				data:this.state.affirm,
				tweetid:this.props.tweetid
			}
		});
	}
	render(){
		//let img=<Image source={require('../../image/default.jpg')} style={styles.image}/>;
		var items = [];
		let realLength=0;
		if (this.state.affirm!==null ) {
			realLength=this.state.affirm.length;
		};	
		if (realLength>3) {
			realLength=3
		}
        for (var i = 0; i < realLength; i++) {
            if (realLength===0) {
            	items.push(<Image key={i} source={require('../../image/default.jpg')} style={styles.image}/>);
            }else{              
            	let imgurl=this.state.affirm[i].confirmbackupthree;           	
            	items.push(<Image key={i} source={{uri:imgurl}} style={styles.image}/>);             
            }          
        }

        let imgsrc=require('../../image/default.jpg');
		return(
			<View style={styles.zhengmingOuter}>
				<View style={styles.zhengshi}>
					<Text style={{fontSize:16,fontWeight:'bold'}}>已有<Text style={{fontSize:16,color:'red'}}>{this.state.count}</Text>人证实</Text>
					<Text style={{color:'red',fontWeight:'bold',fontSize:16}}  onPress={this.postAffirm.bind(this)}>我要证实</Text>
				</View>
				<View  style={styles.zhengshiImg}>
				     {this.state.count===0 ?
				     	  <Image source={imgsrc} style={styles.image}/>
				     	:                          
				          items
				     }
					 <TouchableOpacity onPress={this.goAffirmList.bind(this)}  style={styles.zhengmingImgArrow}>
					 	<Image source={require('./image/forward.png')} style={styles.zhengmingImgArrow}  resizeMode={'contain'}/>					 
					 </TouchableOpacity>
				</View>
				<View style={styles.zhengshiTxt}>
					<Text style={{color:'#B1B1B1'}}>{this.state.affirmInfo}</Text>
				</View>
			</View>
		);
	}
}

let styles=StyleSheet.create({
	zhengmingOuter:{
		marginTop:14,
		paddingLeft:7,
		paddingRight:7
	},
	zhengshi:{
		flexDirection:'row',
		justifyContent:'space-between',	
		alignItems:'center'			
	},
	zhengshiImg:{
		marginTop:5,
		flexDirection:'row',
		alignItems:'flex-start'
	},
	zhengmingImgMore:{
		position:'absolute',
		right:20,
		top:0,
		width:40,
		height:40,	
	},
	zhengmingImgArrow:{
		position:'absolute',
		right:2,
		top:0,
		width:40,
		height:40,	
	},
	image:{
		width:40,
		height:40,	
		borderRadius:20	
	},
	zhengshiTxt:{
		marginTop:7,
		paddingTop:6,
	}
});











