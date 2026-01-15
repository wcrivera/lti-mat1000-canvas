import { GraduationCap, Pencil, Users } from "lucide-react"
import { Tabs } from "../ui/Tabs"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Clases from "../clases/Clases";
import Ayudantias from "../ayudantia/Ayudantias";
import { useEffect } from "react";
import { obtenerTemasCapitulo } from "../../store/slices/tema";

const Capitulo = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { capitulo } = useSelector(
        (state: RootState) => state.capitulo
    );

    useEffect(() => {
        if (capitulo.id) {
            dispatch(obtenerTemasCapitulo(capitulo.id));
        }
    }, [dispatch, capitulo.id])

    return (
        <div className="min-h-screen p-1">
            <Tabs
                titulo={capitulo.nombre}
                tabs={[
                    {
                        id: 'clases',
                        label: 'Clases',
                        icon: GraduationCap,
                        content: <Clases />,
                        // url: `/curso/capitulo?user_id=${usuario.id}&course_id=${curso.id}&modulo_id=${modulo_clase.id}`,
                    },
                    {
                        id: 'ayudantias',
                        label: 'Ayudantías',
                        icon: Users,
                        content: <Ayudantias />,
                        // url: `/curso/capitulo?user_id=${usuario.id}&course_id=${curso.id}&modulo_id=${modulo_ayudantia.id}`,
                    },
                    {
                        id: 'ejercicios',
                        label: 'Ejercicios',
                        icon: Pencil,
                        content: <div>Contenido de Ejercicio</div>,
                        // url: `/curso/capitulo?user_id=${usuario.id}&course_id=${curso.id}&modulo_id=${modulo_ejercicio.id}`,
                    },

                ]}
                defaultTab="clases"
                // onTabChange={handleTabChange}
                className='bg-chapter-500 shadow-sm p-5 rounded-lg mb-6'
            />
        </div>
    )
}

export default Capitulo