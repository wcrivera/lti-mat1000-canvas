// ============================================================================
// USE SOCKET HOOK - CORREGIDO
// ============================================================================

import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

interface QuizUpdate {
  userId: string;
  quizId: string;
  quizTitle: string;
  score: number;
  possiblePoints: number;
  percentageScore: number;
  submittedAt: string;
  attempt: number;
}

export const useSocket = (userId: string | null, quizIds: string[]) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [latestResult, setLatestResult] = useState<QuizUpdate | null>(null);

  useEffect(() => {
    if (!userId || quizIds.length === 0) {
      console.log('⏸️ Socket.io: Esperando userId y quizIds');
      return;
    }

    const backendUrl = import.meta.env.VITE_BACKEND_URL || window.location.origin;
    const quizIdsParam = quizIds.join(',');

    console.log('🔌 Iniciando Socket.io...');
    console.log('   🌐 Backend:', backendUrl);
    console.log('   👤 UserId:', userId);
    console.log('   📊 QuizIds:', quizIdsParam);

    const newSocket = io(backendUrl, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 10,
      query: {
        userId,
        quizIds: quizIdsParam
      }
    });

    // Eventos de conexión
    newSocket.on('connect', () => {
      console.log('✅ Socket.io conectado:', newSocket.id);
      setIsConnected(true);
    });

    newSocket.on('disconnect', (reason) => {
      console.log('❌ Socket.io desconectado:', reason);
      setIsConnected(false);
    });

    newSocket.on('connect_error', (error) => {
      console.error('❌ Error de conexión Socket.io:', error);
      setIsConnected(false);
    });

    // ⚡ EVENTO CRÍTICO - Recibir actualizaciones
    newSocket.on('quiz-update', (data: QuizUpdate) => {
      console.log('📥 ¡ACTUALIZACIÓN RECIBIDA VIA SOCKET.IO!', data);
      setLatestResult(data);
    });

    setSocket(newSocket);

    // Cleanup
    return () => {
      console.log('🔌 Cerrando Socket.io');
      newSocket.off('connect');
      newSocket.off('disconnect');
      newSocket.off('connect_error');
      newSocket.off('quiz-update');
      newSocket.disconnect();
    };
  }, [userId, quizIds.join(',')]);

  return { socket, isConnected, latestResult };
};