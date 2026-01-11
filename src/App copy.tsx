// ============================================================================
// APP.TSX - QUIZ MONITOR FRONTEND v2.0 - ACTUALIZADO
// ============================================================================

import { useEffect, useState } from 'react';
import { Users, GraduationCap,  Pencil} from 'lucide-react';
import { useSocket } from './hooks/useSocket';
import { StatsCard } from './components/StatsCard';
import { QuizResultCard } from './components/QuizResultCard';
import { QuizResultData, StatsData } from './types';
import axios from 'axios';

import Modal from './components/common/Modal';
import { Tabs } from './components/ui/Tabs';

function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const [quizIds, setQuizIds] = useState<string[]>([]);
  const [quizzes, setQuizzes] = useState<QuizResultData[]>([]);
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);




  // 
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [exerciseTitle, setExerciseTitle] = useState<string>('');

  const handleCreateExercise = (): void => {
    // Lógica para crear ejercicio
    console.log('Crear ejercicio:', exerciseTitle);
    setIsCreateModalOpen(false);
    setExerciseTitle('');
  };
  // 

  // Conectar Socket.io con sesión única (userId + quizIds)
  const { latestResult, isConnected } = useSocket(userId, quizIds);

  useEffect(() => {
    initializeFromURL();
  }, []);

  const initializeFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const userIdParam = params.get('user_id');
    const quizIdsParam = params.get('quiz_ids');
    const courseIdParam = params.get('course_id');

    

    console.log('📋 Inicializando desde URL:');
    console.log('   👤 user_id:', userIdParam);
    console.log('   📊 quiz_ids:', quizIdsParam);
    console.log('   📚 course_id:', courseIdParam);

    if (!userIdParam || !quizIdsParam) {
      console.error('❌ Faltan parámetros user_id o quiz_ids en URL');
      setError('Faltan parámetros en URL. Accede desde Canvas LTI.');
      setLoading(false);
      return;
    }

    const quizIdsArray = quizIdsParam.split(',').map(id => id.trim());

    setUserId(userIdParam);
    setQuizIds(quizIdsArray);

    // Fetch inicial de datos
    fetchQuizData(userIdParam, quizIdsArray);
  };

  const fetchQuizData = async (uid: string, qids: string[]) => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || window.location.origin;

      console.log('📡 Fetching quiz data...');
      console.log('   🌐 Backend URL:', backendUrl);

      // 1. Obtener estado de quizzes
      const quizStatusResponse = await axios.get(`${backendUrl}/api/quiz-status`, {
        params: {
          user_id: uid,
          quiz_ids: qids.join(',')
        }
      });

      if (quizStatusResponse.data.ok) {
        setQuizzes(quizStatusResponse.data.results);
        console.log('✅ Quizzes cargados:', quizStatusResponse.data.results);
      }

      // 2. Obtener estadísticas
      const statsResponse = await axios.get(`${backendUrl}/api/stats/${uid}`);

      if (statsResponse.status === 200) {
        setStats(statsResponse.data);
        console.log('✅ Estadísticas cargadas:', statsResponse.data);
      }

    } catch (err) {
      console.error('❌ Error cargando datos:', err);
      setError('Error cargando datos del servidor');
    } finally {
      setLoading(false);
    }
  };

  // ⚡ ACTUALIZACIÓN AUTOMÁTICA cuando llega nuevo resultado via Socket.io
  useEffect(() => {
    if (latestResult && userId && quizIds.length > 0) {
      console.log('⚡ Nuevo resultado recibido via Socket.io:', latestResult);

      // Refrescar TODOS los datos
      fetchQuizData(userId, quizIds);
    }
  }, [latestResult]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando monitor de quizzes...</p>
        </div>
      </div>
    );
  }

  if (error || !userId || quizIds.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
          <p className="text-gray-600 mb-4">
            {error || 'No se pudieron cargar los datos. Por favor, accede desde Canvas.'}
          </p>
          <p className="text-sm text-gray-500">
            Si el problema persiste, contacta al administrador.
          </p>
        </div>
      </div>
    );
  }




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <Tabs 
      titulo="Capítulo 1. Geometría Analítica"
      tabs={[
                {
          id: 'clase',
          label: 'Clase',
          icon: GraduationCap,
          content: <div>Contenido de Clase</div>,
        },
        {
          id: 'ayudantia',
          label: 'Ayudantía',
          icon: Users,
          content: <div>Contenido de Ayudantía</div>,
        },
        {
          id: 'ejercicio',
          label: 'Ejercicio',
          icon: Pencil,
          content: <div>Contenido de Ejercicio</div>,
        },

      ]}
        defaultTab="clase"
      // activeTab={controlledActiveTab}
      // onTabChange={handleTabChange}
      className='bg-chapter-500 p-5 rounded-lg mb-6'

      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎯 Monitor de Quizzes
          </h1>
          <p className="text-lg text-gray-600">
            Usuario: <span className="font-semibold">{userId}</span>
          </p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="
          px-4 py-2 bg-blue-600 text-white rounded-lg
          hover:bg-blue-700 transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        "
        >
          + Crear Nuevo Ejercicio
        </button>

        <Modal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title="Crear Nuevo Ejercicio"
          size="lg"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="exercise-title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Título del Ejercicio
              </label>
              <input
                id="exercise-title"
                type="text"
                value={exerciseTitle}
                onChange={(e) => setExerciseTitle(e.target.value)}
                className="
                w-full px-3 py-2 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              "
                placeholder="Ej: Ecuaciones de Primer Grado"
              />
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="
                px-4 py-2 border border-gray-300 rounded-lg text-gray-700
                hover:bg-gray-50 transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
              "
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleCreateExercise}
                disabled={!exerciseTitle.trim()}
                className="
                px-4 py-2 bg-blue-600 text-white rounded-lg
                hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              "
              >
                Crear Ejercicio
              </button>
            </div>
          </div>
        </Modal>

        {/* Estado de conexión */}
        <div className="mb-6 flex items-center gap-2 bg-white rounded-lg shadow px-4 py-3">
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
          <span className="text-sm font-medium text-gray-700">
            {isConnected ? 'Conectado en tiempo real' : 'Desconectado'}
          </span>
        </div>






        {/* Estadísticas */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <StatsCard label="Completados" value={stats.completados} color="green" />
            <StatsCard label="En progreso" value={stats.enProgreso} color="pink" />
            <StatsCard label="Pendientes" value={stats.totalQuizzes - stats.completados} color="blue" />
            <StatsCard label="Promedio" value={`${stats.promedio.toFixed(0)}%`} color="orange" />
          </div>
        )}

        {/* Quizzes */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">📚 Tus Quizzes</h2>

          {quizzes.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-500 text-lg">No hay quizzes para mostrar</p>
            </div>
          ) : (
            quizzes.map(quiz => {
              return quiz.status === 'complete' ? (
                <QuizResultCard
                  key={quiz.quizId}
                  quizTitle={quiz.quizTitle}
                  score={quiz.score}
                  possiblePoints={quiz.possiblePoints}
                  submittedAt={quiz.submittedAt}
                  attempt={quiz.attempt}
                />
              ) : (
                <div key={quiz.quizId} className="bg-white rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{quiz.quizTitle}</h3>
                  <p className="text-gray-500">⏳ No has completado este quiz aún</p>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Quiz Monitor v2.0 | Actualización en tiempo real vía Socket.io</p>
        </div>
      </div>
    </div>
  );
}

export default App;