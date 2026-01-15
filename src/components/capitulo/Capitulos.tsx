import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { Button } from '../ui/Button';
import Latex from 'react-latex-next';
import { obtenerCapitulosCurso, setCapitulo, startLoadingCapitulo } from '../../store/slices/capitulo';
import { obtenerClasesCurso } from '../../store/slices/clase';

const Capitulos = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { curso } = useSelector(
        (state: RootState) => state.curso
    );

    const { capitulos, isLoading: isLoadingCapitulos } = useSelector(
        (state: RootState) => state.capitulo
    );

    const { clases, isLoading: isLoadingClases } = useSelector(
        (state: RootState) => state.clase
    );

    useEffect(() => {
        if (curso.id !== '') {
            dispatch(startLoadingCapitulo());
            dispatch(obtenerCapitulosCurso(curso.id));
            dispatch(obtenerClasesCurso(curso.id));
        }
    }, [dispatch, curso])

    if (isLoadingCapitulos || isLoadingClases) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Cargando el capítulos...</p>
                </div>
            </div>
        );
    }

    const handleChangeChapter = (capitulo_id: string) => {
        const selectedCapitulo = capitulos.find(capitulo => capitulo.id === capitulo_id);
        if (selectedCapitulo) {
            const params = new URLSearchParams(window.location.search);
            const course_id = params.get('course_id');
            const user_id = params.get('user_id');
            dispatch(setCapitulo(selectedCapitulo));
            navigate(`/curso/capitulo?user_id=${user_id}&course_id=${course_id}&chapter_id=${capitulo_id}`);
        }
    }

    return (
        <div className="divide-y divide-gray-300 overflow-hidden rounded-lg bg-white shadow-sm border border-gray-300 mb-4">
            <div className="p-4 sm:px-6 bg-gray-200">
                <p className="text-xl font-medium text-gray-600">Capítulos </p>
            </div>
            {
                capitulos.map((capitulo, index) => {
                    const clasesCapitulo = clases.filter(clase => clase.capitulo_id === capitulo.id);
                    return (
                        <div key={capitulo.id} className='border-t border-gray-900 px-4 py-5 sm:px-6 hover:bg-gray-50'>
                            <div className="flex flex-wrap justify-start items-center">
                                <div className="w-full md:w-1/2 p-2">
                                    <div className="text-white bg-chapter-500 p-6 rounded-lg rounded-tr-[10%_30px] rounded-bl-[10%_30px] mb-4">
                                        <div className="flex items-center">
                                            <div className="text-4xl font-bold mr-4">{index + 1}</div>
                                            <div className="text-2xl"><Latex>{capitulo.nombre}</Latex></div>
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                            <Button
                                                onClick={() => handleChangeChapter(capitulo.id)}
                                                variant="white"
                                                size="sm"
                                                className="mt-2"
                                                // href={`/curso/capitulo?user_id=${usuario.id}&course_id=${curso.id}&chapter_id=${capitulo.id}`}
                                                // target=""
                                                rel="noopener noreferrer"
                                            >
                                                Ingresar
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-2">
                                    <ol className="list-decimal list-inside ml-4">
                                        {
                                            clasesCapitulo.map(clase => (
                                                <li key={clase.id} className="text-gray-600 marker:text-chapter-500  marker:font-bold mb-2">
                                                    <Latex>{clase.nombre}</Latex>
                                                </li>
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
            <div className="p-4 sm:px-6 text-center text-sm bg-gray-200 text-gray-500">
                <strong>Facultad de Matemáticas UC</strong> ❤️
            </div>
        </div>

    )
}

export default Capitulos