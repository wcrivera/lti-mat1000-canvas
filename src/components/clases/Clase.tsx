import { GraduationCap } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Tema from './Tema';
import { BloqueState } from '../../store/slices/bloque';
import Latex from 'react-latex-next';

type Props = {
    clase: BloqueState
    index: number
    temas: Array<BloqueState>
    setModalVideo: (modal: { url: string; titulo: string; isOpen: boolean }) => void
    setModalQuiz: (modal: { content_id: number; titulo: string; isOpen: boolean }) => void
    setModalDiapositiva: (modal: { content_id: number; titulo: string; url: string; isOpen: boolean }) => void
}

const Clase = ({ clase, index, temas, setModalVideo, setModalQuiz, setModalDiapositiva }: Props) => {

    const { bloques } = useSelector(
        (state: RootState) => state.bloque
    );

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
                    const actividades_tema = bloques.filter(bloque => bloque.indent === 2 && bloque.position > tema.position && bloque.position < (temas[temas.indexOf(tema) + 1] ? temas[temas.indexOf(tema) + 1].position : Number.MAX_SAFE_INTEGER));
                    return (
                        <Tema
                            key={tema.id}
                            tema={tema}
                            actividades={actividades_tema}
                            setModalVideo={setModalVideo}
                            setModalQuiz={setModalQuiz}
                            setModalDiapositiva={setModalDiapositiva}
                        />)
                })
            }
        </div>
    )
}

export default Clase