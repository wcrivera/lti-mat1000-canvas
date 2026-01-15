// import { useEffect, useState } from "react";
// // import { obtenerAyudantiasModulo } from "../../store/slices/ayudantia";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store";
// // import { obtenerModuloCurso, setModulo } from "../../store/slices/modulo";
// // import { BloqueState } from "../../store/slices/bloque";
// // import Ayudantia from "./Ayudantia";
// // import { obtenerPaginasCurso } from "../../store/slices/pagina";
// import { ItemState } from "../../store/slices/item";
// // import Latex from "react-latex-next";
// import { Users } from "lucide-react";


const Ayudantias = () => {

    // const dispatch = useDispatch<AppDispatch>();

    // const { modulos } = useSelector(
    //     (state: RootState) => state.modulo
    // );

    // const { curso } = useSelector(
    //     (state: RootState) => state.curso
    // );

    // const { items } = useSelector(
    //     (state: RootState) => state.item
    // );

    // const { paginas } = useSelector(
    //     (state: RootState) => state.pagina
    // );

    // const [ayudantias, setAyudantias] = useState<ItemState[]>([{ id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: '' }]);
    // const [modalVideo, setModalVideo] = useState({ url: "", titulo: "", isOpen: false });
    // const [modalQuiz, setModalQuiz] = useState({ content_id: 0, titulo: "", isOpen: false });
    // const [modalDiapositiva, setModalDiapositiva] = useState({ content_id: 0, titulo: "", url: "", isOpen: false });

    // useEffect(() => {
    //     const modulo = modulos.find(modulo => modulo.id === modulo.id);
    //     if (!modulo) return;

    //     const modulo_ayudantia = modulos[modulos.indexOf(modulo) + 1];
    //     const items_modulo = items.filter(item => item.module_id === modulo_ayudantia.id);

    //     console.log(items_modulo)

    //     setAyudantias(items_modulo);
    // }, [dispatch, items, modulos, curso]);





    // console.log(modulos)

    // console.log(modulo)



    // const [ejercicios, setEjercicios] = useState<BloqueState[]>([{ id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: '' }]);

    // // Add state for modal handlers
    // const [modalVideo, setModalVideo] = useState(false);
    // const [modalQuiz, setModalQuiz] = useState(false);
    // const [modalDiapositiva, setModalDiapositiva] = useState(false);

    // useEffect(() => {
    //     if (ayudantias.length > 0) {
    //         const filteredClases = ayudantias.filter(bloque => bloque.type === 'SubHeader' && bloque.indent === 0);
    //         setEjercicios(filteredClases);
    //     }
    // }, [ayudantias])

    // if (isLoading) {
    //     return (
    //         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    //             <div className="text-center">
    //                 <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
    //                 <p className="text-gray-600 text-lg">Cargando las ayudantías...</p>
    //             </div>
    //         </div>
    //     );
    // }
    return (
        <>
            {/* {
                ayudantias.filter(item => item.indent === 0).map((item, index) => {
                    const ejercicio_ayudantia = ayudantias.filter(ayudantia => ayudantia.indent === 1 && ayudantia.position > item.position && (index + 1 === ayudantias.length ? true : ayudantia.position < ayudantias.filter(item => item.indent === 0)[index + 1].position));
                    console.log(ejercicio_ayudantia)
                    return (
                        <div key={item.id} className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm border border-gray-300 mb-4">
                            <div className="p-4 sm:px-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                                        <Users className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-md font-medium text-gray-400">Ayudantía</p>
                                        <p className="text-sm text-chapter-600">Ejercicio {index + 1}</p>
                                    </div>
                                </div>
                            </div>

                            {
                                ejercicio_ayudantia.map(ejercicio => {
                                    return (
                                        <>Ejercicio</>
                                        // <Ayudantia
                                        //     key={ejercicio.id}
                                        //     index={index}
                                        //     ayudantia={ejercicio}
                                        //     temas={ejercicio_ayudantia}
                                        //     // setModalVideo={setModalVideo}
                                        //     // setModalQuiz={setModalQuiz}
                                        //     // setModalDiapositiva={setModalDiapositiva}
                                        // />
                                    )
                                })
                            }
                        </div>


                        // <Ayudantia
                        //     key={item.id}
                        //     index={index}
                        //     ayudantia={item}
                        //     temas={ejercicio_ayudantia}
                        //     // setModalVideo={setModalVideo}
                        //     // setModalQuiz={setModalQuiz}
                        //     // setModalDiapositiva={setModalDiapositiva}
                        // />
                    )
                })
            } */}
            
        </>
    )
}

export default Ayudantias