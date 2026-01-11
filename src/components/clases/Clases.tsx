import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { BloqueState } from '../../store/slices/bloque';

import Modal from '../common/Modal';
import { VideoPlayer } from '../ui/Video';
import Question from './Question';
import Latex from 'react-latex-next';
import { BookOpenText, Calculator, Circle, CircleCheck, CircleX, GraduationCap, Video } from 'lucide-react';
import { Button } from '../ui/Button';

const Clases = () => {

    const { modulo } = useSelector(
        (state: RootState) => state.modulo
    );

    const { items } = useSelector(
        (state: RootState) => state.item
    );

    const { scores } = useSelector(
        (state: RootState) => state.quiz
    );

    const [clases, setClases] = useState<BloqueState[]>([{ id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: '' }]);
    const [modalVideo, setModalVideo] = useState({ url: "", titulo: "", isOpen: false });
    const [modalQuiz, setModalQuiz] = useState({ content_id: 0, titulo: "", isOpen: false });
    const [modalDiapositiva, setModalDiapositiva] = useState({ content_id: 0, titulo: "", url: "", isOpen: false });

    useEffect(() => {
        const clasesFiltradas = items.filter(item => item.module_id === modulo.id && item.indent === 0);
        setClases(clasesFiltradas);
    }, [items])

    return (
        <>
            {
                modalDiapositiva.isOpen &&
                <Modal
                    isOpen={modalDiapositiva.isOpen}
                    onClose={() => setModalDiapositiva({ content_id: 0, titulo: "", url: "", isOpen: false })}
                    title={modalDiapositiva.titulo}
                    size="full"
                >
                    <iframe
                        src={modalDiapositiva.url}
                        width="100%"
                        height="600px"
                        allowFullScreen
                        title={modalDiapositiva.titulo}
                    ></iframe>
                </Modal>
            }

            {
                modalVideo.isOpen &&
                <Modal
                    isOpen={modalVideo.isOpen}
                    onClose={() => setModalVideo({ url: "", titulo: "", isOpen: false })}
                    title={modalVideo.titulo}
                    size="full"
                >
                    <VideoPlayer
                        url={modalVideo.url}
                        aspectRatio="21:9"
                        lazy={false}
                        showInfo={false}
                        vimeoOptions={{
                            fullscreen: true,
                            color: 'FF6B6B',
                            title: true,
                            byline: true,
                            portrait: true,

                        }}
                    />
                </Modal>
            }

            {
                modalQuiz.isOpen &&
                <Modal
                    isOpen={modalQuiz.isOpen}
                    onClose={() => setModalQuiz({ content_id: 0, titulo: "", isOpen: false })}
                    // title={"Ejercicio: " + modalQuiz.titulo}
                    size="full"
                >
                    <Question content_id={modalQuiz.content_id} />
                </Modal>
            }

            {
                clases.map((clase, index) => {
                    const temas = items.filter(item => item.module_id === modulo.id && item.indent === 1 && item.position > clase.position && (index + 1 === clases.length ? true : item.position < clases[index + 1].position));
                    return (
                        <div key={clase.id} className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm border border-gray-300 mb-4">
                            <div className="p-4 sm:px-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                                        <GraduationCap className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-md font-medium text-gray-400">Clase {index + 1}</p>
                                        <p className="text-sm text-chapter-600"><Latex>{clase.title}</Latex></p>
                                    </div>
                                </div>
                            </div>

                            {
                                temas.map((tema) => {

                                    const actividades = items.filter(item => item.module_id === modulo.id && item.indent === 2 && item.position > tema.position && item.position < (temas[temas.indexOf(tema) + 1] ? temas[temas.indexOf(tema) + 1].position : tema.position + 4));
                                    const score = scores.find(score => score.quiz_id === actividades[2]?.content_id)

                                    return (
                                        <div key={tema.id} className="p-4 sm:px-6 border-t border-gray-200">
                                            <p className="text-sm text-chapter-600">{tema.title}</p>
                                            <div className="flex flex-wrap justify-start items-center">
                                                <div className="w-full lg:w-1/5 sm:w-1/2 p-2">
                                                    <div className="flex items-center">
                                                        <Button
                                                            onClick={() => setModalDiapositiva({ content_id: actividades.length > 0 ? actividades[0].content_id : 0, titulo: tema.title, url: actividades.length > 0 ? actividades[0].external_url : '', isOpen: true })}
                                                            icon={BookOpenText}
                                                            variant="warning"
                                                            size="sm"
                                                        />
                                                        <div className="ml-3 text-sm text-chapter-600">Diapositiva</div>
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-1/5 sm:w-1/2 p-2">
                                                    <div className="flex items-center">
                                                        <Button
                                                            onClick={() => setModalVideo({ url: actividades.length > 1 ? actividades[1].title : '', titulo: tema.title, isOpen: true })}
                                                            icon={Video}
                                                            variant="danger"
                                                            size="sm"
                                                        />
                                                        <div className="ml-3 text-sm text-chapter-600">Video</div>
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-1/5 sm:w-1/2 p-2">
                                                    <div className="flex items-center">
                                                        <Button
                                                            onClick={() => setModalQuiz({ content_id: actividades.length > 2 ? actividades[2].content_id : 0, titulo: tema.title, isOpen: true })}
                                                            icon={Calculator}
                                                            variant="primary"
                                                            size="sm"
                                                        />
                                                        <div className="ml-3 text-sm text-chapter-600">Ejercicio</div>
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-2/5 sm:w-1/2 p-2 flex justify-end ">
                                                    {
                                                        (score && score.id !== 0) ? (score.score === 0 ? (
                                                            <CircleX className="text-red-500" />
                                                        ) : (
                                                            <CircleCheck className="text-green-500" />
                                                        )) : (
                                                            <Circle className="text-gray-500" />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        // <div key={clase.id}>
                        //     {clase.title}
                        // </div>
                        // <Clase
                        //     key={index}
                        //     index={index}
                        //     clase={clase}
                        //     temas={temas}
                        //     setModalVideo={setModalVideo}
                        //     setModalQuiz={setModalQuiz}
                        //     setModalDiapositiva={setModalDiapositiva}
                        // />
                    )
                })
            }


            {/* {clases.map((clase, index) => {
                const temas = items.filter(item => item.indent === 0 && item.position > clase.position && (index + 1 === clases.length ? true : item.position < clases[index + 1].position));
                return (
                    <Clase
                        key={index}
                        index={index}
                        clase={clase}
                        temas={temas}
                        setModalVideo={setModalVideo}
                        setModalQuiz={setModalQuiz}
                        setModalDiapositiva={setModalDiapositiva}
                    />
                )
            })} */}
        </>
    )
}



export default Clases