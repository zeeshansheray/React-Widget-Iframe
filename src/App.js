import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

import {SvgIcons} from './icons'
import { ColorSchemeCode } from './enums/ColorScheme'

import localforage from 'localforage';

import {MainPage, WidgetOuter} from './pages/Widget';
import {LoginPageMain} from './components/widget/loginPage';
import SignupPage from './components/widget/signupPage';


function App() {

    useEffect(() => {
        let iframe = document.getElementById("myFrame");
        console.log("iframe ", iframe);
      }, []);

  const [open, setOpen] = useState(false);
  const [data,setData]  = useState({
      brand      : {},
      campaign   : {},
      flows      : [],
      earningWays: [],
      growthTool : {},
      pass       : {}
  }) 

  const getBrand = async() => {
      console.log('in brand ', window.location);
      let brandId=window.location.search.split('?')[1];
      console.log('brandID ', brandId)
      if(brandId) await localforage.setItem('brandId',brandId)
      else{
        brandId = await localforage.getItem('brandId');
      }
      let brandData={};
      await axios.get(`https://api.walletly.ai/api/v4/brand?_id=${brandId}`).then((resp) => {
          brandData = resp.data.data[0];
      }).catch(function (error) {
          console.log('error ', error);
      })
      if(brandData) return brandData
  }

  const getCampaign = async() =>{
        let brandId=window.location.search.split('?')[1];
        if(brandId) localforage.setItem('brandId',brandId)
        else{
        brandId = await localforage.getItem('brandId');
        }
      let campaign, growthTool, earningWay;

      await axios.get(`https://api.walletly.ai/api/v4/campaign/public?brandId=${brandId}&campaignType=5`).then((resp) => {
          campaign = resp.data.data[0];
      }).catch(function (error) {
          console.log('err', error)
      })

      await axios.get(`https://api.walletly.ai/api/v4/growthtool?brandId=${brandId}&growthtoolType=widget&campaignId=${campaign._id}`).then((resp) => {
          growthTool = resp.data.data[0];
      }).catch(function (error) {
      })

      await axios.get(`https://api.walletly.ai/api/v4/earning/public?brandId=${brandId}&campaignId=${campaign._id}`).then((resp) => {
          let filteredEarningWays = resp.data.data.filter((earningWay)=>{
              return earningWay.active
          })
          earningWay = filteredEarningWays;
      }).catch(function (error) {
      })

      if(campaign && growthTool && earningWay){
          return {earningWay : earningWay , campaign : campaign, growthTool, growthTool}
      }

  }

  const getFlows = async({growthTool, brand})=>{
      let pass = await localforage.getItem('pass');
      let flows=[];
      let payload = {
          brandId: brand._id,
          passId : pass && (pass._id || pass[0]?._id),
          flowIds: growthTool.flowId[0] ? [growthTool.flowId[0]] : [],
          widget : true,
      }

      console.log('getglows ', payload)

      if(pass){
          delete payload.widget
      }
      if(!pass){
          delete payload.passId
      }

      await axios.post(`https://api.walletly.ai/api/v4/transaction/getFlows`, payload).then((resp) => {
          flows = resp.data.data;
          console.log('flows ', resp.data);
      }).catch((error)=>{
          console.log('erorr ', error)
      })

      if(flows.length > 0){
          return flows
      }


  }

  useEffect(()=>{
      onLoad();
  },[])

  const onLoad = async() => {
    let pass      = await localforage.getItem('pass');
    // console.log('pass --> ', pass);
    let brand     = await getBrand();
    let otherData = await getCampaign();
    let flows     = await getFlows({brand : brand, growthTool : otherData.growthTool});
    setData({...data, brand: brand, campaign : otherData.campaign, earningWays : otherData.earningWay, growthTool : otherData.growthTool, pass : pass, flows : flows })
  }


  return (
        <div id="widget" className={`middle cp ${Object.keys(data.growthTool).length < 1 && 'd-none'}`} onClick={()=>setOpen(!open)}>
        <img src={data?.growthTool?.widget?.logo} style={{borderRadius : '50%'}} height="50" width="50" alt="" />
          {   
              open &&
              <div id="mainPage" onClick={(e)=>e.stopPropagation()} style={{background : data.growthTool.widget.theme == "dark" ? ColorSchemeCode.darkOuter : ColorSchemeCode.white}}>
                  <Router>
                    <Routes>
                      <Route path       = '' element             = {<WidgetOuter data={data} setData={setData} open={open} setOpen={setOpen}/>} >
                        <Route exact path = '' element             = {<MainPage data={data} setData={setData} open={open} setOpen={setOpen} />} />
                        <Route exact path = 'login' element        = {<LoginPageMain data={data} setData={setData} open={open} setOpen={setOpen} />} />
                        <Route exact path = 'signUp' element       = {<SignupPage data={data} setData={setData} open={open} setOpen={setOpen} />} />
                      </Route>
                    </Routes>
                  </Router>
              </div>
              }
        </div>
    
  );
}

export default App;
