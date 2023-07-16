import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Person2Icon from '@mui/icons-material/Person2';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState('light')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [dropdownindex, setdropdownIndex] = useState(0)
    const [shouldShowDropdown, setShouldShowDropdown] = useState(true)
    const [clickTimes, setClickTimes] = useState(0)
    const menu = useRef(null)
    const logo = useRef(null)
    const windowSize = window.innerWidth
    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])


    isMenuOpen && menu.current && menu.current.classList.remove('-translate-x-full')
    !isMenuOpen && menu.current && menu.current.classList.add('-translate-x-full')
    const sections = [{ name: 'Home', to: '/', element: <HomeIcon /> },
    { name: 'About', to: '/about', element: <InfoIcon /> },
    { name: 'Academic', element: <SchoolIcon />, subsection: [{ name: 'Subjects', to: 'subjects' }, { name: 'Fees structure', to: 'fees' }, { name: 'Results', to: "results" }] },
    { name: 'Facilities', element: <CompareArrowsIcon />, subsection: [{ name: 'Library', to: 'facilities/library' }, { name: 'Computers', to: 'facilities/computers' }, { name: 'Others', to: 'facilities/others' }] },
    { name: 'Staff', element: <PeopleAltIcon />, subsection: [{ name: 'Teachers', to: 'staff/teachers' }, { name: 'Others', to: 'staff/others' }] },
    { name: 'Students', element: <Person2Icon />, subsection: [{ name: 'VI-VIII', to: 'students/vi-to-viii' }, { name: 'IX-X', to: 'students/ix-to-x' }, { name: 'Alumni', to: 'students/alumni' }] },
    { name: 'Admission', element: <PersonAddIcon />, subsection: [{ name: 'Register', to: 'admission/register' }, { name: 'Log in', to: 'admission/login' }] },
    { name: 'Admin', to: '/admin', element: <AssignmentIndIcon /> },
    ]

    const themeHandler = () => theme == 'light' ? setTheme('dark') : setTheme('light')
    const linkHandler = (id) => {
            setdropdownIndex(id)
            sections.map(_ => clickTimes == 0 ? (setShouldShowDropdown(true), setClickTimes(1)) : (setShouldShowDropdown(false), setClickTimes(0)))
    }

    const linkHandler2 = () => (setShouldShowDropdown(false) ,setIsMenuOpen(false))
    const childLinkHandler = () => (setIsMenuOpen(false), setClickTimes(0), setShouldShowDropdown(false))
    const menuopener = () => (setIsMenuOpen(true),setShouldShowDropdown(false))
    const menucloser = () => setIsMenuOpen(false)

    // window.addEventListener('scroll', () => {
    //     if(window.scrollY > 300){
    //         menu.current.classList.remove('sm:relative')
    //         menu.current.classList.add('top-24', 'transition-all', 'duration-500')
    //         logo.current.classList.add('sm:fixed','top-0', 'w-full')
    //     }
    //     else{
    //         if(menu.current.classList.contains('top-24', 'transition-all', 'duration-500')){
    //             menu.current.classList.remove('top-24', 'transition-all', 'duration-500')
    //         }
    //         if(logo.current.classList.contains('sm:fixed','top-0', 'w-full')){
    //             logo.current.classList.remove('sm:fixed','top-0', 'w-full')
    //         }
    //         if(!menu.current.classList.contains('sm:relative')){
    //             menu.current.classList.add('sm:relative')
    //         }
    //     }
    // })

    return (
        <>
            <header className='relative w-full'>
                <div ref={logo} className={`hidden sm:flex sm:justify-center items-center transition h-24 bg-gradient-to-tr from-sky-100 shadow-lg to-indigo-200`}>
                    <img src={`/photos/AHS-Heading-transparent.png`} className={`h-2/3`}/>
                </div>
                <nav className='flex justify-between px-4 h-16 dark:bg-gray-600 bg-teal-200 items-center sm:hidden'>
                    <button className='transform active:scale-90' onClick={menuopener}><MenuIcon /></button><div><img className='h-10' src="../photos/AHS-Heading-transparent.png" alt="School Logo" /></div>
                </nav>
                <div ref={menu} className='fixed sm:relative sm:flex sm:justify-center sm:items-center sm:translate-x-0 sm:h-14 sm:w-full top-0 z-20 bg-blue-300 dark:bg-gray-800 w-8/12 h-screen transform -translate-x-full transition easy-in-out'>
                    <div className='flex justify-between h-16 dark:bg-gray-700 bg-blue-600 px-4 sm:hidden'><button onClick={themeHandler}>{theme == "light" ? <DarkModeIcon style={{ fontSize: 20, color: '#fff' }} /> : <LightModeIcon style={{ fontSize: 20, color: '#fff' }} />}</button>
                        <button onClick={menucloser} className='transform active:scale-90'><ArrowBackIosNewIcon style={{ fontSize: 20 }} /></button></div>
                    <div>
                        <ul className={`sm:flex sm:justify-center sm:items-center sm:h-20 sm:relative`}>
                            {
                                sections.map((item, id) => {
                                    return(
                                        <div key={id}>
                                            {
                                        item.to && <li key={id} className='px-4 mt-4 my-1 dark:text-gray-300 sm:mt-0'><NavLink to={item.to} onClick={linkHandler2}>{item.element} {item.name}</NavLink></li>
                                        }

                                        {!item.to  && <li className='mt-4 px-4 dark:text-gray-300 sm:mt-0'><button onClick={() => linkHandler(id)} className={`${windowSize > 640 && dropdownindex == id && shouldShowDropdown == true && item.subsection.length == 3 ? "translate-y-10" : ""} ${windowSize > 640 && dropdownindex == id && shouldShowDropdown == true && item.subsection.length == 2 && "translate-y-7"}`}>{item.element} {item.name} <ExpandMoreIcon /></button></li>}
                                        {!item.to && shouldShowDropdown && dropdownindex == id && <ul className='ml-11 sm:translate-y-10 w-32 sm:w-fit bg-blue-400 dark:bg-gray-500 shadow rouded'>
                                            {
                                            item.subsection.map((subitem, subId) => (
                                                <li key={subId} className='rounded px-2 my-1 dark:text-gray-300'><NavLink to={subitem.to} onClick={childLinkHandler}>{subitem.name}</NavLink></li>
                                            ))
                                            }
                                        </ul>}
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar