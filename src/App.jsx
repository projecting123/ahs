import About from './navcomponents/About.jsx'
import Admin from './navcomponents/Admin.jsx'
import Error from './common/Error.jsx'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route
} from "react-router-dom";
import Subject from './navcomponents/academic/Subject.jsx'
import Fees from './navcomponents/academic/Fees.jsx'
import Results from './navcomponents/academic/Results.jsx'
import Library from './navcomponents/facilities/Library.jsx'
import Computers from './navcomponents/facilities/Computers.jsx'
import SixtoEight from './navcomponents/students/SixtoEight.jsx'
import NinetoTen from './navcomponents/students/NinetoTen.jsx'
import Alumni from './navcomponents/students/Alumni.jsx'
import Register from './navcomponents/admission/Register.jsx'
import Login from './navcomponents/admission/Login.jsx'
import Teachers from './navcomponents/staff/Teachers.jsx'
import StaffOthers from './navcomponents/staff/Other.jsx'
import FacilitiesOthers from './navcomponents/facilities/Other.jsx'
import RootLayout from './RootLayout.jsx'
import Welcome from './Welcome.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />} errorElement={<Error />}>
            <Route index element={<Welcome />}></Route>
            <Route path='about' element={<About />}></Route>

            <Route element={<Navigate to={"subjects"}/>}>
                <Route path='subjects' element={<Subject />}></Route>
                <Route path='fees' element={<Fees />}></Route>
                <Route path='results' element={<Results />}></Route>
            </Route>

            <Route path='facilities' element={<Navigate to={"library"}/>}>
                <Route path='library' element={<Library />}></Route>
                <Route path='computers' element={<Computers />}></Route>
                <Route path='others' element={<FacilitiesOthers />}></Route>
            </Route>

            <Route path='students' element={<Navigate to={"vi-to-viii"}/>}>
                <Route path='vi-to-viii' element={<SixtoEight />}></Route>
                <Route path='ix-to-x' element={<NinetoTen />}></Route>
                <Route path='alumni' element={<Alumni />}></Route>
            </Route>

            <Route path='admission' element={<Navigate to={"register"}/>}>
                <Route path='register' element={<Register />}></Route>
                <Route path='login' element={<Login />}></Route>
            </Route>

            <Route path='staff' element={<Navigate to={"teachers"}/>}>
                <Route path='teachers' element={<Teachers />}></Route>
                <Route path='others' element={<StaffOthers />}></Route>
            </Route>

            <Route path='admin' element={<Admin />}></Route>
        </Route>
    )
)

export default router