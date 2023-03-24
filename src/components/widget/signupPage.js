import React, {useState} from 'react'

import { ColorSchemeCode } from '../../enums/ColorScheme'
import {useFormik} from 'formik'
import {LoginVld, SignupVld, verificationVld} from '../../validations/authVld'
import { useNavigate } from 'react-router-dom';
import localforage from 'localforage';
import axios from 'axios';

import { VerificationScreen } from './loginPage';
import { CircularProgress } from '@material-ui/core';
import DashboardPage from './dashboardPage';

export default function SignupPage({data, setData}) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    verificationCode : '',
    loader : false,
  })
  const [show, setShow] = useState({
    verificationScreen: false,
    dashboardScreen   : false,
  })

  const initValues = {
    firstName  : '',
    lastName   : '',
    email      : '',
    phone      : '',
    dialingCode: '',
  }

  const formik = useFormik({
     initialValues : {...initValues},
     validationSchema   : SignupVld,
  })

  const handleRegisterFunc = async() =>{
    console.log('data ', data);
    if(data.growthTool.widget.authentication != "none"){
      setShow({...show, loader : true})
      let verificationCode = Math.floor(100000 + Math.random() * 900000);
      
      await localforage.setItem('verificationCode',verificationCode);
      setState({
        ...state, verificationCode : verificationCode
      })

      let payload = {
        email           : formik.values.email,
        brandId         : data.brand._id,
        verificationCode: verificationCode,
        phone           : formik.values.phone,
        dialingCode     : formik.values.dialingCode
      }


      if(data.growthTool.widget.authentication === 'email'){
        delete payload.phone
        delete payload.dialingCode
        console.log('payload', payload)
        await axios.post(`https://api.walletly.ai/api/v4/auth/sendEmail`, payload, {headers : {}}).then((resp) => {
            console.log('sms email -->',resp);
            setState({...state, verificationCode : verificationCode})
        }).catch(function (error) {
            console.log('err', error)
        })

      }

      else{
        delete payload.email;
        delete payload.brandId;
        delete payload.verificationCode
        payload.message = `Your verification code is : ${verificationCode}`;
        console.log('payload inside sms', payload)
        await axios.post(`https://api.walletly.ai/api/v4/services/message/widgetSms`, payload, {headers : {'x-api-key' : data.brand.apiKey}}).then((resp) => {
            console.log('sms send -->',resp.data);
        }).catch(function (error) {
            console.log('err', error)
        })
      }
      setState({...state, verificationCode : verificationCode})
      setShow({...show, verificationScreen : true, loader : false})
    }
    else{
      await createPassFunc();
      await localforage.setItem('isLoggedIn',true);
      setShow({...show, dashboardScreen : true, verificationScreen : false})
    }

  }

  console.log('state ', state);

  const createPassFunc = async() =>{
    console.log('create pass ');
    setShow({...show, loader : true})
    let payload  = {
      ...formik.values,
      growthToolType: 'widget',
      brandId       : data.brand._id,
      campaignCode  : data.campaign.campaignCode,
    }

    await axios.post(`https://api.walletly.ai/api/v4/pass`, payload , {headers : {'x-api-key' : data.brand.apiKey}}).then(async(resp) => {
      localforage.setItem('pass', resp.data.data);
      setData({...data, pass : resp.data.data})
    }).catch((error)=>{
      console.log('error ', error);
    })

    setShow({...show, loader : false})

  }


  return (
    <div className='bottomSection' style={{height: `calc(100% - 190px)` ,backgroundColor : data.growthTool.widget.theme == 'light' ? ColorSchemeCode.white : ColorSchemeCode.darkOuter }}>
      {(!show.verificationScreen && !show.dashboardScreen) ? 
      <>
        <div className='d-flex space-between'>
          <div className="w-48">
            <p className="label mb_8" style={{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}>First Name*</p>
              <input 
                style = {{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}
                required
                className = "inputField w-100"
                type      = "text"
                name      = "firstName"
                value     = {formik.values.firstName}
                onChange  = {formik.handleChange}
              />
              {formik.errors?.firstName && <p className="error">{formik.errors.firstName}</p> }
          </div>
          <div className="w-48">
            <p className="label mb_8" style={{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}>Last Name*</p>
              <input 
                style = {{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}
                required
                className = "inputField w-100"
                type      = "text"
                name      = "lastName"
                value     = {formik.values.lastName}
                onChange  = {formik.handleChange}
              />
          </div>
        </div>

        <p className="label mb_8 mt_16" style={{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}>Email*</p>
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
        
        <div className='d-flex mt_16 space-between'>
          <div className="w-30">
            <p className="label mb_8" style={{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}>Code*</p>
              <input 
                style = {{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}
                required
                className = "inputField w-100"
                type      = "text"
                name      = "dialingCode"
                value     = {formik.values.dialingCode}
                onChange  = {formik.handleChange}
              />
              {formik.errors?.dialingCode && <p className="error">{'Enter a valid dialing Code'}</p> }
          </div>
          <div className='w-65'>
            <p className="label mb_8" style={{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}>Phone*</p>
              <input 
                style = {{color: data.growthTool.widget.theme == 'dark' && ColorSchemeCode.white}}
                required
                className = "inputField w-100"
                type      = "text"
                name      = "phone"
                value     = {formik.values.phone}
                onChange  = {formik.handleChange}
              />
          </div>
        </div>
        <button 
          className = {`signInButton fw-5 U14M cp mt_24 ${(formik.values.email == "" || !formik.isValid || show.loader) && 'disabled'}`} 
          onClick   = {handleRegisterFunc}
          style     = {{backgroundColor : data?.growthTool.widget.primaryColor}}>
            {show.loader ?  <CircularProgress size={20} color="inherit" className='' />
            :
            'Register'
          }
        </button>

      </>
      
      :

      (show.verificationScreen && !show.dashboardScreen)

      ?
      
      <VerificationScreen createPassFunc={createPassFunc} show={show} setShow={setShow} data={data} setData={setData} verificationCode={state.verificationCode} />

      :
        
      <DashboardPage data={data}/>
    }
    </div>
  )
}
