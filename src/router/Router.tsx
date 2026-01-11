import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Curso from "../components/curso/Curso";
import Capitulo from "../components/capitulo/Capitulo";

const Router = () => {

    const params = new URLSearchParams(window.location.search);
    const course_id = params.get('course_id');
    const user_id = params.get('user_id');

    return (
        <BrowserRouter>
            <Routes>
                {/* CURSO */}
                <Route path="/curso" element={<Curso />} />
                {/* CAPITULO */}
                <Route path="/curso/capitulo" element={<Capitulo />} />

                {/* Redirección */}
                <Route path="/*" element={<Navigate to={`/curso?user_id=${user_id}&course_id=${course_id}`} replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router