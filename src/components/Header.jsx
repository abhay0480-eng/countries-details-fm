import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
  const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div className={`flex justify-between p-3 ${theme?"bg-white text-[#111517]":"bg-[#2B3844] text-white"}  px-20`}>
        <div className={`text-[24px] font-extrabold`}><Link to="/">Where in the world?</Link></div>
        <button onClick={()=>setTheme(prev=>!prev)} className='text-[16px] font-semibold flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z" fill="white" stroke={`${theme?"black":"white"}`} stroke-width="1.25"/>
        </svg>
          <span className='mx-2'>Dark Mode</span>
          </button>
    </div>
  )
}

export default Header 