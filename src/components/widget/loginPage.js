import React, {useEffect, useState} from 'react'

import { ColorSchemeCode } from '../../enums/ColorScheme'
import {useFormik} from 'formik'
import {LoginVld, verificationVld} from '../../validations/authVld'
import { useNavigate } from 'react-router-dom';
import localforage from 'localforage';
import axios from 'axios';

import DashboardPage  from './dashboardPage';
import { CircularProgress } from '@material-ui/core';

export function LoginPageMain({data, setData}) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    verificationCode: '',
    passError       : false,
    loader          : false,
  })
  const [show, setShow] = useState({
    verificationScreen: false,
    dashboardScreen   : false,
  })

  const initValues = {
    email : '',
  }

  const formik = useFormik({
     initialValues : {...initValues},
     validationSchema   : LoginVld,
  })

  useEffect(()=>{
    onLoadFunc();
  },[])

  const onLoadFunc = async() =>{
    console.log('onload func')
    let pass = await localforage.getItem('pass');
    let isLoggedIn = await localforage.getItem('isLoggedIn');
    console.log('isLoggedIn ', isLoggedIn)
    if(pass && isLoggedIn){
      setShow({...show, dashboardScreen : true, verificationScreen : false})
    }
  }

  const handleLoginFunc = async() =>{
    setState({...state, loader : true})
    
    let pass = await localforage.getItem('pass')
    if(!pass){
      await axios.get(`https://api.walletly.ai/api/v4/pass/public?email=${formik.values.email}&brandId=${data.brand._id}`).then(async(resp) => {
        pass=resp.data.data[0];
        localforage.setItem('pass', resp.data.data[0])
     }).catch((error)=>{
        console.log('error ', error)
        setState({...state, passError : true});
        return
      })
    }

    if(pass){
      if(data.growthTool.widget.authentication != "none"){
        let verificationCode = Math.floor(100000 + Math.random() * 900000);
        
        await localforage.setItem('verificationCode',verificationCode);
  
        let payload = {
          email           : pass.userData.email,
          brandId         : data.brand._id,
          verificationCode: verificationCode,
          phone           : pass.userData.phone,
          dialingCode     : pass.userData.dialingCode
        }

        console.log('paylaod ', payload);
  
        if(data.growthTool.widget.authentication === 'email'){
          delete payload.phone
          delete payload.dialingCode
          console.log('payload inside email', payload)
          await axios.post(`https://api.walletly.ai/api/v4/auth/sendEmail`, payload, {headers : {}}).then((resp) => {
              console.log('sms email -->',resp);
             setState({...state, verificationCode : verificationCode});
          }).catch(function (error) {
              console.log('err', error)
          })
          setShow({...show, verificationScreen : true})
  
        }
  // /// // //
        else{
          delete payload.email;
          delete payload.brandId;
          delete payload.verificationCode
          payload.message = `Your verification code is : ${verificationCode}`;
          console.log('payload inside sms', payload)
          await axios.post(`https://api.walletly.ai/api/v4/services/message/widgetSms`, payload, {headers : {'x-api-key' : data.brand.apiKey}}).then((resp) => {
              console.log('sms send -->',resp.data);
             setState({...state, passError : false, loader : false, verificationCode : verificationCode});
          }).catch(function (error) {
              console.log('err', error)
          })
          setShow({...show, verificationScreen : true})
        }
      }
      else{
        ///Yahn se kaam start hoga!!
        await localforage.setItem('isLoggedIn',true);
        setData({...data, pass : pass})
        setState({...state, passError : false, loader : false});
        setShow({...show, dashboardScreen : true, verificationScreen : false})
      }
    }
    // setData({...data, pass : pass})
  }

  console.log('state' , state);

  return (
    <div className='bottomSection' style={{height: `calc(100% - 190px)` ,backgroundColor : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.white : ColorSchemeCode.darkOuter }}>
      {
      
      (!show.verificationScreen && !show.dashboardScreen) ? 
      <>
        <p className="label mb_8" style={{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}>Email*</p>
        <input 
          style = {{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}
          required
          className = "inputField w-100"
          type      = "text"
          name      = "email"
          value     = {formik.values.email}
          onChange  = {formik.handleChange}
        />
        {formik.errors?.email && <p className="error">{formik.errors.email}</p> }
        {state.passError && <p className="error">User not found</p> }
        <button 
          className = {`signInButton fw-5 U14M cp mt_24 ${(formik.values.email.length < 1 || !formik.isValid) && 'disabled'}`} 
          onClick   = {handleLoginFunc}
          style     = {{backgroundColor : data?.growthTool.widget.primaryColor}}>
            {(state.loader) ?  <CircularProgress size={20} color="inherit" className='mr_8' /> : 'Login'}
        </button>

      </>
      
      :

      (show.verificationScreen && !show.dashboardScreen)

      ?
      
      <VerificationScreen action="login" data={data} setData={setData} verificationCode={state.verificationCode} show={show} setShow={setShow} />

      :
        
      <DashboardPage data={data} setData={setData}/>
    }
    </div>
  )
}

export const VerificationScreen = ({data, verificationCode, setShow, show, action, setData , createPassFunc}) => {
  
  const [error, setError]   = useState(false);
  const [loader, setLoader] = useState(false);


  const initValues = {
    verificationCode : '',
  }

  const formik = useFormik({
     initialValues : {...initValues},
     validationSchema   : verificationVld,
  })

  const handleVerificationFunc = async() =>{
    if(verificationCode != formik.values.verificationCode){
      setError(true)
    }
    else{
      console.log('matched')
      await localforage.setItem('isLoggedIn',true);
      if(action == "login"){
        let pass = await localforage.getItem('pass');
        setData({...data, pass : pass })
        setShow({...show, dashboardScreen : true, verificationScreen : false})
      }
      else{
        setLoader(true);
       await createPassFunc();
       setLoader(false);
       setShow({...show, dashboardScreen : true, verificationScreen : false})
      }
    }
  }


  console.log('verificationCode ', verificationCode , formik.values.verificationCode);

  return(
    <div>
      <p className="label mb_8" style={{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}>Verification Code*</p>
      <input 
        style = {{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}
        required
        className = "inputField w-100"
        type      = "text"
        name      = "verificationCode"
        value     = {formik.values.verificationCode}
        onChange  = {formik.handleChange}
      />
      {formik.errors?.verificationCode && <p className="error">{formik.errors.verificationCode}</p> }
      {error && <p className="error">{'Verification code didn\'t matched'}</p>}
      <button 
        className = {`signInButton fw-5 U14M cp mt_24 ${(formik.values.verificationCode.length < 1 || !formik.isValid) && 'disabled'}`} 
        onClick   = {handleVerificationFunc}
        style     = {{backgroundColor : data?.growthTool.widget.primaryColor}}>
          {(loader) ?  <CircularProgress size={20} color="inherit" className='mr_8' /> : 'Verify'}
      </button>

    </div>
  )
}
