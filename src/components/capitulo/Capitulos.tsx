
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect, useState } from 'react';
import { ModuloState, obtenerModulosCurso, setModulo, startLoadingModulo } from '../../store/slices/modulo';
import { obtenerItemsCurso, startLoadingItem } from '../../store/slices/item';
import { Button } from '../ui/Button';
import Latex from 'react-latex-next';
import { obtenerScoreQuizzes } from '../../store/slices/quiz';
import { obtenerPaginasCurso } from '../../store/slices/pagina';

const Capitulos = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { modulos, isLoading: isLoadingModulos } = useSelector(
        (state: RootState) => state.modulo
    );

    const { items, isLoading: isLoadingItems } = useSelector(
        (state: RootState) => state.item
    );

    const { usuario } = useSelector(
        (state: RootState) => state.usuario
    );

    const { curso } = useSelector(
        (state: RootState) => state.curso
    );

    const [modulosCapitulo, setModulosCapitulo] = useState<Array<ModuloState>>([{
        id: 0,
        items_url: '',
        name: '',
        position: 0,
        published: false,
    }])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const course_id = params.get('course_id');
        const user_id = params.get('user_id');

        dispatch(startLoadingItem())
        dispatch(startLoadingModulo())

        dispatch(obtenerModulosCurso(course_id || ""));
        dispatch(obtenerItemsCurso(course_id || ""));
        dispatch(obtenerPaginasCurso(curso.id));
        dispatch(obtenerScoreQuizzes(course_id || "", user_id || ""));
    }, [dispatch])


    useEffect(() => {
        const modulos_capitulos = modulos.filter(modulo => modulo.position % 3 === 1);
        setModulosCapitulo(modulos_capitulos);
    }, [modulos])

    if (isLoadingModulos || isLoadingItems) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Cargando el capítulos...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="divide-y divide-gray-300 overflow-hidden rounded-lg bg-white shadow-sm border border-gray-300 mb-4">
            <div className="p-4 sm:px-6 bg-gray-200">
                <p className="text-xl font-medium text-gray-600">Capítulos </p>
            </div>
            {
                modulosCapitulo.map((modulo, index) => {
                    const itemsModulo = items.filter(item => item.module_id === modulo.id && item.indent === 0);
                    return (
                        <div key={modulo.id} className='border-t border-gray-900 px-4 py-5 sm:px-6 hover:bg-gray-50'>
                            <div className="flex flex-wrap justify-start items-center">
                                <div className="w-full md:w-1/2 p-2">
                                    <div className="text-white bg-chapter-500 p-6 rounded-lg rounded-tr-[10%_30px] rounded-bl-[10%_30px] mb-4">
                                        <div className="flex items-center">
                                            <div className="text-4xl font-bold mr-4">{index + 1}</div>
                                            <div className="text-2xl"><Latex>{modulo.name}</Latex></div>
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                            <Button
                                                onClick={() => dispatch(setModulo(modulo))}
                                                variant="white"
                                                size="sm"
                                                className="mt-2"
                                                href={`/curso/capitulo?user_id=${usuario.id}&course_id=${curso.id}&module_id=${modulo.id}`}
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
                                            itemsModulo.map(item => (
                                                <li key={item.id} className="text-gray-600 marker:text-chapter-500  marker:font-bold mb-2">
                                                    <Latex>{item.title}</Latex>
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