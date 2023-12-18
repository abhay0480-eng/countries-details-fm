import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../data.json'
import ThemeContext from '../context/ThemeContext'

const CountryDetail = () => {
    const {name} = useParams()
    const {theme,setTheme} = useContext(ThemeContext)

    const countryDetail = data.filter((country)=>country.name === name)
  return (
    <div className={`${theme?"bg-white":"bg-[#202C36] text-white"} w-full h-full `}>

    <div className={`pt-12 max-w-7xl mx-auto `}>
        <Link to="/" className={`p-5 text-[#111517] text-[16px] font-light ${theme?"bg-white":"bg-[#2B3844] text-white"} shadow-2xl rounded-lg`}>&larr; Back</Link>
        <div className='lg:grid lg:grid-cols-2 lg:gap-x-20  mt-12'>
        <div className='mb-8 lg:mb-0'>
            <img src={countryDetail[0].flags.svg} alt='' className=' object-cover w-full rounded-xl shadow-md' />
        </div>
        <div className=' px-4 lg:px-0'>
            <h2 className='text-[18px] font-extrabold'>{countryDetail[0].name}</h2>
            <div className='lg:flex justify-between'>
                <div>
                    <p className='font-semibold text-[14px] mt-4'>Native Name: <span className='font-light'>{countryDetail[0].nativeName}</span></p>
                    <p className='font-semibold text-[14px] mt-2'>Population: <span className='font-light'>{countryDetail[0].population}</span></p>
                    <p className='font-semibold text-[14px] my-2'>Region: <span className='font-light'>{countryDetail[0].region}</span></p>
                    <p className='font-semibold text-[14px] my-2'>Sub Region: <span className='font-light'>{countryDetail[0].subregion}</span></p>
                    <p className='font-semibold text-[14px] mb-5'>Capital: <span className='font-light'>{countryDetail[0].capital}</span></p>
                </div>
                <div>
                <p className='font-semibold text-[14px] my-2'>Top Level Domain: <span className='font-light'>{countryDetail[0].topLevelDomain[0]}</span></p>
                    {countryDetail[0]?.currencies&&<p className='font-semibold text-[14px] my-2'>Currencies: <span className='font-light'>{countryDetail[0]?.currencies[0]?.name}</span></p>}
                    {<p className='font-semibold text-[14px] mb-5'>Languages: <span className='font-light'>{countryDetail[0].languages.map((lang)=>{return(`${lang.name},`)})}</span></p>}
                </div>
            </div>
            <div>
            {countryDetail[0]?.borders &&<p className='font-semibold text-[14px] flex-wrap lg:flex-nowrap flex items-center mb-5'>Border Countries: <span className='font-light flex-wrap flex'>{countryDetail[0]?.borders?.map((border,index)=><div key={index} className='border-[1px] border-[#979797] p-4 mx-2'>{border}</div>)}</span></p>}
                
            </div>
        </div>

        </div>
    </div>
    </div>
  )
}

export default CountryDetail