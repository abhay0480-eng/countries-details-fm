import React, { useContext, useState } from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'


const Home = () => {

    const {theme} = useContext(ThemeContext)
    const [searchCountry,setSearchCountry] = useState("")
    const [selectedRegion,setSelectedRegion] = useState("")
    const uniqueRegions = data.filter((coun, index, self) =>
    index === self.findIndex((t) => t.region === coun.region)
);

    const searchCountries = data.filter((coun)=>(coun.name).toLowerCase() === (searchCountry).toLowerCase())

    const regions = uniqueRegions.map((reg)=>reg.region)

    const countrybyregion = data.filter((reg) => reg.region.toLowerCase() === selectedRegion.toLowerCase())
    const showCountries =  countrybyregion.length>0?countrybyregion:searchCountries.length<1?data:searchCountries

   
   


  return (
    <div className={`px-5 lg:px-20 ${!theme? "bg-[#202C36] ":"bg-[#FAFAFA]"} lg:pt-20 h-auto`} >
        <div className='lg:flex lg:justify-between lg:mb-20'>
            <div className='flex lg:block justify-center w-full lg:my-4 pt-4'>
                <input
                type='text'
                name='search'
                placeholder='Search for a country…'
                value={searchCountry}
                onChange={(e)=>setSearchCountry(e.target.value)}
                className={`${theme?"bg-white":"bg-[#2B3844] text-white"} shadow-xl  w-full lg:w-[480px] p-6`}
                />
            </div>
            <div className='flex lg:block  w-full  lg:w-auto my-4 lg:my-auto'>
                <select name="FilterByRegion" onChange={(e)=>setSelectedRegion(e.target.value)} className={`p-5 shadow-lg ${theme?"bg-white":"bg-[#2B3844] text-white"}`} >
                <option  value="Filter By Region">Filter By Region</option>
                    {regions.map((item, index)=><option className="!p-2 !bg-white appearance-none !hover:bg-gray-100"  key={index} value={item}><div className='p-4'>{item}</div></option>)}
                </select>
            </div>
        </div>
    <div className={`lg:grid lg:grid-cols-4 gap-10 ${theme?"bg-white" :"bg-[#202C36] text-white"}`}>
      {showCountries.map((country,index)=>{
        return(
          <Link to={`/detail/${country.name}`} key={index} className={`text-[#111517] ${theme?"bg-white" :"bg-[#2B3844] text-white"} shadow-lg`}>
            <img src={country.flags.svg} alt='' className='h-40 object-cover w-full' />
            <div className='p-3 mt-3'>
              <h2 className='text-[18px] font-extrabold'>{country.name}</h2>
              <p className='font-semibold text-[14px] mt-4'>Population: <span className='font-light'>{country.population}</span></p>
              <p className='font-semibold text-[14px] my-2'>Region: <span className='font-light'>{country.region}</span></p>
              <p className='font-semibold text-[14px] mb-5'>Capital: <span className='font-light'>{country.capital}</span></p>
            </div>
          </Link>
        )
      })}
    </div>
    </div>
  )
}

export default Home