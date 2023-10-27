import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "./Componentes/Form";

function AppRouters() {
    return(
        <>
        <BrowserRouter>
        <Routes>

            <Route path="/Formulario" element={<Formulario />}></Route>
    
        </Routes>
                
        </BrowserRouter>
        </>
    )
}
export default AppRouters;