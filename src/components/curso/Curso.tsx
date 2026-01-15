import { GraduationCap, Book, NewspaperIcon } from 'lucide-react';
import { Tabs } from '../../components/ui/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { obtenerCurso } from '../../store/slices/curso';
import Capitulos from '../../components/capitulo/Capitulos';
import { obtenerUsuario } from '../../store/slices/usuario';

const Curso = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { isLoading: isLoadingUsuario } = useSelector(
        (state: RootState) => state.usuario
    );

    const { curso, isLoading: isLoadingCurso } = useSelector(
        (state: RootState) => state.curso
    );

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const courseIdParam = params.get('course_id');
        const userIdParam = params.get('user_id');
        dispatch(obtenerUsuario(courseIdParam || "", userIdParam || ""));
        dispatch(obtenerCurso(courseIdParam || ""));
    }, [dispatch])

    if (isLoadingCurso || isLoadingUsuario) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Cargando el capítulo...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-1">
            <Tabs
                titulo={curso.nombre}
                tabs={[
                    {
                        id: 'capitulos',
                        label: 'Capítulos',
                        icon: GraduationCap,
                        content: <Capitulos />,
                    },
                    {
                        id: 'clases',
                        label: 'Anuncios',
                        icon: NewspaperIcon,
                        content: <div>Contenido de Ejercicio</div>,
                    },
                    {
                        id: 'ayudantias',
                        label: 'Material Docente',
                        icon: Book,
                        content: <div>Contenido de Ejercicio</div>,
                    },
                    {
                        id: 'ejercicios',
                        label: 'Notas',
                        icon: GraduationCap,
                        content: <div>Contenido de Ejercicio</div>,
                    },

                ]}
                defaultTab="capitulos"
                // activeTab={controlledActiveTab}
                // onTabChange={handleTabChange}
                className='bg-chapter-500 shadow-sm p-5 rounded-lg mb-6'
            />
        </div>
    )
}

export default Curso