import {
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	TouchableOpacity,
	NavigatorIOS,
	RefreshControl,
	View,
	ListView
} from 'react-native';
import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import  PageLogin from  '../helpQyPages/PageLogin';
// import Login from './login';
import MyMainPage from '../pages/mainPage';
// import DoComment from  '../components/doComment';
// import WeiBoItem from '../pages/tuiwenPage/weiboItem';
// import { fetchTuiwenPageIfNeeded } from '../actions/tuiwenPageAction';
// import ItemPage from '../pages/zhuPage/itemPage';
// import ItemCell from '../pages/zhuPage/itemCell';
// import WeiBoContent from '../pages/tuiwenPage/weiboContent';
// import OriginTuiwenItem from '../pages/tuiwenPage/originTuiwenItem';
// import WeChatTest from  '../pages/tuiwenPage/weChat';
// import WoPage from '../pages/woPage/woPage';
// import FaxianPage from '../pages/faxianPage/faxianPage';
// import HelpPage  from '../pages/messagePage/helpPage';
// import Prove  from '../pages/components/prove';
// import Report  from '../pages/components/report';
// import JoinLoveClub from '../pages/components/joinLoveClub';
// import JoinSuperVise from '../pages/components/joinSupervise';
// import AddHelpMan from '../pages/components/addHelpMan';
// import WelfareAuth from '../pages/components/welfareAuth';
// import PersonVerify from '../pages/components/personVerify';
// import ReportTuiwen from  '../pages/components/reportTuiwen';
// import Affirm  from '../pages/components/affirm';
// import PublishTuiwen from  '../pages/components/publishTuiwen';
// import PostAffirm from '../pages/components/postAffirm';
// import AffirmListItem from '../pages/components/affirmListItem';
// import UserPage from '../components/userPage';
// import ListViewBasics from './listviewSection';
// import CarList from './carList';
// import ProductView  from './listViewDemo';
// import Setting from '../pages/woPage/setting';
// import CompleteProfile from '../pages/woPage/completeProfile';
// import ResetPassword from '../pages/woPage/resetPassword';
// import FindPasswordPage from '../pages/findPasswordPage';
// import AboutUs from '../pages/faxianPage/aboutUs';
// import ModalTips from '../components/modalTips';
// import RegisterPage from '../pages/registerPage';
 import DoZhuanFa from '../pages/components/doZhuanFa';
//Inavigator 是最外层的容器，所有的state 和dispatch都要从这里往子组件分发
import HomeScreen from './HomeScreen';
export  default  class INavigator extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		// 这里应该做什么事呢
		//const {dispatch,selectedReddit}=this.props;
		//console.log(dispatch)		
		//console.log(this.props)
		//通过打印log可以看出dispatch 不是state传过来的，
		// let requestParams={
		// 	userID:1,
		// 	page:1,
		// 	pageSize:6
		// };
		// const {dispatch}=this.props;
		//dispatch(fetchTuiwenPageIfNeeded(requestParams))
	}
	render(){
		let defaultName='TheLoginPage';
		//let defaultComponent=MyMainPage;
        //let defaultComponent=HomeScreen;
		let defaultComponent=PageLogin;
		//let defaultComponent=DoComment;
		//let defaultComponent=FindPasswordPage;
		//let defaultComponent=RegisterPage;
		//let defaultComponent=ModalTips;
		//let defaultComponent=AboutUs;
		//let defaultComponent=TuiwenItem ;
		//let defaultComponent=WoPage;
		//let defaultComponent=UserPage;
        //let defaultComponent=AffirmListItem;
        //let defaultComponent=SuperviseListItem;
        //let  defaultComponent=ListViewBasics;
        //let defaultComponent=CarList;
        //let  defaultComponent=ProductView;
        //let defaultComponent=Report;
        //let defaultComponent=ReportTuiwen;
        //let defaultComponent=PublishTuiwen;
       // let  defaultComponent=JoinLoveClub;
        //let  defaultComponent=PersonVerify;
        //let  defaultComponent=WelfareAuth;
        //let  defaultComponent=JoinSuperVise;
        //let  defaultComponent=WeChatTest;
        //let  defaultComponent=AddHelpMan;
        //let defaultComponent=Setting;
        //let defaultComponent=CompleteProfile;
        //let defaultComponent=ResetPassword;
        //let defaultComponent=PostAffirm;
        return(

			<Navigator
				initialRoute={{name:defaultName,component:defaultComponent,index:0}}
				renderScene={(route,navigator)=>{
                    let Component=route.component; //这个就是defaultComponent
                    //route.params 未定义这个得好好研究
                    //console.log(this.props)
                    return <Component {...route.params} navigator={navigator}  />
                }}
			/>
        );
	}
}














