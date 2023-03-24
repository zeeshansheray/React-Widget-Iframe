import axios from 'axios';
import localforage from 'localforage';
import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ColorSchemeCode } from '../enums/ColorScheme'
import { PngIcons, SvgIcons } from '../icons'

export default function Header({data, setOpen, open, setData}) {
  const navigate = useNavigate();
  const [pass,setPass] = useState();
  const [state, setState] = useState({
    loggedIn: false,
  })

  const handleLogoutFunc = async() =>{
    await localforage.removeItem('pass');
    await localforage.removeItem('isLoggedIn');
    navigate('', {replace : true})
    window.location.reload();
  }

  console.log('here ', data.pass) ;


  useEffect(()=>{
    passOnLoad();
    authCheck();
  },[data.pass])


  const authCheck = async() =>{
      let loggedIn = await localforage.getItem('isLoggedIn')
      setState({...state, loggedIn : loggedIn})
  }


  const passOnLoad = async() =>{
    console.log('zee ');
    let passFound = await localforage.getItem('pass')
    console.log('localforage pass ', passFound)
    await axios.get(`https://api.walletly.ai/api/v4/pass/public?email=${passFound.userData.email}&brandId=${data.brand._id}`).then(async(resp) => {
      localforage.setItem('pass', resp.data.data[0])
      setPass(resp.data.data[0])
      // setData({...data, pass : resp.data.data[0]})
    }).catch((error)=>{
      console.log('error ', error)
      return
      })
  }


  return (
    <div className="header border-box d-flex space-between" style={{backgroundColor : data?.growthTool.widget.primaryColor}}>
        <div>
          {console.log('pass here is ', pass)}
            <div className='d-flex'>{
            !pass && window.location.pathname != "/" ?
            <div className='mr_8 pt_1' onClick={()=>navigate(-1)}>
              <SvgIcons.BackIcon color={ColorSchemeCode.black}/></div> : ""}
              <h4 className='Body16R'>{state.loggedIn && pass?.loyaltyCard ? 'Your Points' : 'Join the Community'}</h4></div>
              <h1 className="Heading32B">{(!pass || !state.loggedIn || state.loggedIn == "null") ? data.growthTool.widget.heading :  pass && pass.loyaltyCard && pass.loyaltyCard.currentPoints ? pass.loyaltyCard.currentPoints : 0 }</h1>
              
              {/* <h1 className="Heading32B">{(data.pass && data.pass.loyaltyCard && data.pass?.loyaltyCard?.currentPoints)  == 0 ?  0 : data.pass?.loyaltyCard?.currentPoints != 0 ? data.pass?.loyaltyCard?.currentPoints  : data.growthTool.widget.heading}</h1> */}
        </div>
        <div>
            {state.loggedIn && data.pass ? 
            <div onClick={handleLogoutFunc}>
              <SvgIcons.LogoutIcon />
            </div>
              :
              <div onClick={()=>setOpen()}>
                <SvgIcons.CrossIcon color="white"/>
              </div>
            }
        </div>
    </div>
  )
}
