import { Book, GraduationCap, Pencil, Users } from "lucide-react"
import { Tabs } from "../ui/Tabs"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Clases from "../clases/Clases";
import Ayudantias from "../ayudantia/Ayudantias";

const Capitulo = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { modulo, modulos } = useSelector(
        (state: RootState) => state.modulo
    );

    const { usuario } = useSelector(
        (state: RootState) => state.usuario
    );

    const { curso } = useSelector(
        (state: RootState) => state.curso
    );

    const modulo_clase = modulos[modulos.indexOf(modulo)];
    
    const modulo_ejercicio = modulos[modulos.indexOf(modulo) + 2];

    return (
        <div className="min-h-screen p-1">
            <Tabs
                titulo={modulo.name}
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