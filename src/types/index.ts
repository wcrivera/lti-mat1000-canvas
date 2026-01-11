// ============================================================================
// TYPES - FRONTEND
// ============================================================================

export interface QuizResultData {
  userId: string;
  quizId: string;
  quizTitle: string;
  score: number;
  possiblePoints: number;
  percentageScore: number;
  submittedAt: Date | string;
  attempt: number;
  status: 'complete' | 'in-progress' | 'pending';
}

export interface QuizStatus {
  quizId: string;
  quizTitle: string;
  currentSubmission: any | null;
  lastResult: QuizResultData | null;
  fromCache: boolean;
}

export interface StatsData {
  completados: number;
  enProgreso: number;
  totalQuizzes: number;
  promedio: number;
}
