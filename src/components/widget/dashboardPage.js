import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import React, {useState, useEffect} from 'react'

import { ColorSchemeCode } from '../../enums/ColorScheme'

import localforage from 'localforage';
import axios from 'axios';

import CopyText from '../CopyText';

import { PngIcons, SvgIcons } from '../../icons';
import QRCode from 'react-qr-code';

export default function DashboardPage({data, setData}){

    const [expand, setExpand] = useState({
      earningWays : false,
    })
  
    const [pass,setPass] = useState({});
    const [flows,setFlows] = useState([]);
    const [show, setShow] = useState({
      dealDetailPage: false,
      flow          : {},
    })
  
    const onLoad = async() =>{
      let pass = await localforage.getItem('pass');
      setPass(pass);

      let payload = {
        brandId: data.brand._id,
        passId : pass && (pass._id || pass[0]?._id),
        flowIds: data.growthTool.flowId[0] ? [data.growthTool.flowId[0]] : [],
        widget : true,
      }
  
  
    if(pass){
      delete payload.widget
    }
    
    if(!pass){
        delete payload.passId
    }
  
    await axios.post(`https://api.walletly.ai/api/v4/transaction/getFlows`, payload).then((resp) => {
      // console.log('flows ', resp.data.data);
      setFlows(resp.data.data);
    }).catch((error)=>{
      console.log('error ', error);
    })
  
    }
  
    useEffect(()=>{
      onLoad();
    },[])
  
    return (
      <div id="dashboardPage" className='bottomSection pl_20 pr_20' style={{height: `100%`, margin: '0px', borderRadius : '6px', marginTop: '-50px', backgroundColor : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.lightInner : ColorSchemeCode.darkInner }}>
          {!show.dealDetailPage ? <>
            <div className='d-flex space-between'>
              <p className="mb_16 Body14R" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.black : ColorSchemeCode.white }}>{data.growthTool.widget.redeemDescription}</p>
            </div>
              {flows.length > 0 ?
                  flows.map((flow)=>
                      <div className='d-flex singleFlow align-items-center space-between'>
                          <div className="d-flex">
                            <img src={flow.image} className="borderRadius-4 object-fit-cover" height="60px" width={"80px"}  alt=""/>
                            <div className='ml_16 middle align-items-flex-start'>
                                <p className="Body14R capitalize ellipses" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.black : ColorSchemeCode.white }}>
                                    {flow.deal}
                                </p>
                                <p className="Body12R capitalize" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.black : ColorSchemeCode.white }}>
                                    {!flow.cwCode ? (flow.condition[0].condition == 'oneTimeDeal') ? 'One Time Deal' : Array.isArray(flow.condition) ? (flow.condition[0].conditionValue[1]  + " " +  flow.condition[0].condition) :  (flow.conditionValue  + " " +  flow.condition + 's') : (flow.conditionValue  + " " +  flow.condition + 's')}
                                </p>
                            </div>
                          </div>
                          {flow.valid && 
                          <button 
                              className = {`signInButton fw-5 U14M cp ml_8`} 
                              onClick   = {()=>setShow({...show, dealDetailPage : true, flow : flow})}
                              style     = {{height : '40px', width:'90px', padding: '8px',  backgroundColor : data?.growthTool.widget.primaryColor}}>
                              Redeem
                          </button>}
                  </div>
                  )
                  :
                  [1,2,3].map(()=>
                  <div className="d-flex mb_16">
                      <SkeletonTheme baseColor="#A9A9A9" highlightColor='#C8C8C8'>
                          <Skeleton  height={50} width={60}/>
                          <Skeleton  className='ml_16' height={50} width={50}/>
                          <Skeleton  className='ml_16' height={50} width={160}/>
                      </SkeletonTheme>
                  </div>)
              }
    
              <div className="singleAction" >
                <div className='d-flex space-between cp' onClick={()=>setExpand({...expand, earningWays : !expand.earningWays})}>
                    <div className="d-flex align-items-center">
                        <SvgIcons.Star color={data?.growthTool.widget.primaryColor}/>
                        <span className="Body14R ml_16"  style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.black : ColorSchemeCode.white }}>Ways to Earn</span>
                    </div>
                    <div className={`d-flex align-items-center mr_8 ${expand.earningWays ? 'rotate-270' : 'rotate-180'}`}>
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
                                    <p className="Body12R capitalize" style={{color : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.black : ColorSchemeCode.white }}>
                                        {earningWay.earningValue} Points
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
              </div>
          </>
          
          :

          <ShowDealDetailScreen onClose={()=>setShow({...show, dealDetailPage : false})} flow={show.flow} data={data}/>
        
        }
      </div>
    )
}


const ShowDealDetailScreen = ({onClose, flow, data}) => {
  const [code, setCode] = useState('');

  useEffect(()=>{
    let url = window.location.origin;
    let code = `${flow.cwCode ? flow.cwCode : `${`${url}/page/businesscheckout/?brandId=`+data.brand._id+"&passId="+data.pass._id+"&passCode="+(data.pass?.passCode || data.pass[0]?.passCode)+"&flowId="+flow.id+"&dealUniqueId="+flow.uniqueId+"&fullName="+ (data.brand._id === 'oDSBoVo3cI21T4yaIFxx' ? "customer" : data.pass?.userData?.firstName)}`}`
    setCode(code);
  },[])


  
  return(
    <div id="dealDetailScreen" className='position-relative'>
        <div className='closeIcon' onClick={onClose}><SvgIcons.CloseIcon color={data.growthTool.widget.theme == "light" ? ColorSchemeCode.black : ColorSchemeCode.white}/></div>
        <p className='Body14R pt_24' style={{color : data.growthTool.widget.theme == "light" ? ColorSchemeCode.black : ColorSchemeCode.white}}>
          {flow.cwCode ? 'Copy code and apply at checkout:' : 'Scan the Qrcode Below:'}
        </p>
        <div className="d-flex mt_32">
          {flow.cwCode && <p style={{letterSpacing : '1px', textTransform : 'uppercase', color : data.growthTool.widget.theme == "light" ? ColorSchemeCode.black : ColorSchemeCode.white}} className='Body18M'>{code}</p>
        }
         {flow.cwCode ? 
          <CopyText color={data.growthTool.widget.theme == "light" ? ColorSchemeCode.black : ColorSchemeCode.white} tooltip={true} content={code} hideText={true}  />
          :
          <QRCode
            size    = {200}
            style   = {{ height: "auto", maxWidth: "100%", width: "100%" }}
            value   = {code}
            viewBox = {`0 0 200 200`}
          />
        }
        </div>
    </div>
  )
}