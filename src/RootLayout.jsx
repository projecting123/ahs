import { Outlet } from 'react-router-dom'
import Navbar from './common/Navbar.jsx'
import Footer from './common/Footer.jsx'
import LogoLoading from "./loading/LogoLoading.jsx";
import {useEffect, useState} from "react";
const RootLayout = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            {
                (() => {
                   if(!isLoading){
                       return (
                           <>
                               <Navbar/>
                               <Outlet/>
                               <Footer/>
                           </>
                       )
                   }
                   else{
                       return <LogoLoading/>
                   }
                })()
            }
        </>

    )
}

export default RootLayout