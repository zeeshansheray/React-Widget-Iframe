import React, {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Outlet,BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';

import {SvgIcons} from '../icons'
import localforage from 'localforage';

import {ColorSchemeCode} from '../enums/ColorScheme'
import Header from '../components/Header';
import DashboardPage from '../components/widget/dashboardPage';


export function WidgetOuter({data, setOpen, open, setData}) {

    return (
            <div className='h-100'>
                <Header setOpen={setOpen} setData={setData} data={data} open={open}/>
                <Outlet/>
            </div>
        )
}

export const MainPage = ({data}) => {
    const history = useNavigate();
    const [state, setState] = useState({
        loggedIn: false,
    })

    useEffect(()=>{
        authCheck();
    },[])

    const authCheck = async() =>{
        console.log('zee')
        let loggedIn = await localforage.getItem('isLoggedIn')
        setState({...state, loggedIn : loggedIn})
    }
    {console.log('state -->', state.loggedIn, data.pass)}

    return(
        <>
            {state.loggedIn != "null" && state.loggedIn == true && data.pass ? 

                <div className='pl_24 pr_24 pt_24 pb_24' style={{height : '65%', background : data.growthTool.widget.theme == "dark" ? ColorSchemeCode.darkOuter : ColorSchemeCode.white}}>
                    <DashboardPage data={data} />
                </div>

                :

                <div className='bottomSection' style={{backgroundColor : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.white : ColorSchemeCode.darkOuter }}>
                                
                    <div className="topSection1" style={{backgroundColor : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightInner : ColorSchemeCode.darkInner }}>
                    <p className="Body14R mt_4" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightText : ColorSchemeCode.white }}>
                       {data.growthTool.widget.description}
                    </p>
                    <div className="mt_8">
                        <button onClick={()=>history('login')}  className="signInButton fw-5 U14M cp" style={{backgroundColor : data?.growthTool.widget.primaryColor}}>
                                Join In
                        </button>
                    </div>
                    <div className="mt_8 ">
                            <button onClick={()=>history('signup')}  className="signUpButton fw-5 U14M cp">
                                Sign Up
                            </button>
                    </div>
                    </div>

                    <TopSection2 data={data}/>

                </div>
            
            } 
        
        </>
    )
}


export const TopSection2 = ({data}) =>{

    const [expand, setExpand] = useState({
        earningWays : false,
        redeemingWays: false,
    })

return(

    <div className="topSection2" style={{backgroundColor : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightInner : ColorSchemeCode.darkInner }}>
    <h2 className='Heading16M' style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightText : ColorSchemeCode.white }}>
         {data.growthTool.widget.subHeading}
   </h2>
   <p className="Body14R mt_4" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightText : ColorSchemeCode.white }} >
    {data.growthTool.widget.subDescription}
   </p>
   <div className="singleAction">
        <div className='d-flex space-between cp' onClick={()=>setExpand({...expand, earningWays : !expand.earningWays})}>
            <div className="d-flex align-items-center">
                <SvgIcons.Star color={data?.growthTool.widget.primaryColor}/>
                <span className="Body14R ml_16"  style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightText : ColorSchemeCode.white }}>{data.growthTool.widget.rewardHeading1}</span>
            </div>
            <div className={`d-flex align-items-center ${expand.earningWays ? 'rotate-270' : 'rotate-180'}`}>
                <SvgIcons.ArrowExpand color={data?.growthTool.widget.primaryColor}/>
            </div>
        </div>
        <div className={`${expand.earningWays && 'expand'} earningWays`}>
            {
                data.earningWays.map((earningWay)=>
                    <div className='d-flex mb_24 singleEarnWay'>
                        <img src={earningWay.icon} className="borderRadius-4 object-fit-cover" height="32px" width={"32px"}  alt=""/>
                        <div className='ml_16'>
                            <p className="Body14R capitalize" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.black : ColorSchemeCode.white }}>
                                {earningWay.activity}
                            </p>
                            <p className="Body12R capitalize" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightText : ColorSchemeCode.white }}>
                                {earningWay.earningValue} Points
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
   </div>
   <div className="singleAction cp" style={{borderTop: `1px solid ${data.growthTool.widget.primaryColor}`}}>
        <div className='d-flex space-between'  onClick={()=>setExpand({...expand, redeemingWays : !expand.redeemingWays , earningWays : false})}>
            <div className="d-flex align-items-center">
                <SvgIcons.GiftIcon color={data?.growthTool.widget.primaryColor}/>
                <span className="Body14R ml_16"  style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightText : ColorSchemeCode.white }}>{data.growthTool.widget.rewardHeading2}</span>
            </div>
            <div className={`d-flex align-items-center ${expand.redeemingWays ? 'rotate-270' : 'rotate-180'}`}>
                <SvgIcons.ArrowExpand color={data?.growthTool.widget.primaryColor}/>
            </div>
        </div>
        <div className={`${expand.redeemingWays && 'expand'} redeeminWays`}>
            {
                data.flows.map((flow)=>
                    <div className='d-flex mb_24 singleFlow'>
                        <img src={flow.image} className="borderRadius-4 object-fit-cover" height="60px" width={"80px"}  alt=""/>
                        <div className='ml_16 middle align-items-flex-start'>
                            <p className="Body14R capitalize" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.black : ColorSchemeCode.white }}>
                                {flow.deal}
                            </p>
                            <p className="Body12R capitalize" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightText : ColorSchemeCode.white }}>
                                {!flow.cwCode ? (flow.condition[0].condition == 'oneTimeDeal') ? 'One Time Deal' : Array.isArray(flow.condition) ? (flow.condition[0].conditionValue[1]  + " " +  flow.condition[0].condition) :  (flow.conditionValue  + " " +  flow.condition + 's') : (flow.conditionValue  + " " +  flow.condition + 's')}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
   </div>     
</div>
)
}
