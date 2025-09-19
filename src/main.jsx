import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes,Route} from "react-router";
import "./style/App.css"
import Login from "./layout/login.jsx";
import MasterLayout from "./layout/MasterLayout.jsx";
import User from "./Managment/User.jsx";
import Dashboard from "./layout/Dashboard.jsx";


createRoot(document.getElementById('root')).render(<>
    <BrowserRouter>

        <Routes>
            <Route path={"login"}  element={<Login/>}/>
            <Route path={"nexo"} element={<MasterLayout/>}>
                <Route path={"dashboard"} element={<Dashboard/>}/>
                <Route path={"user"} element={<User/>}/>

            </Route>


        </Routes>


    </BrowserRouter>

</>)
