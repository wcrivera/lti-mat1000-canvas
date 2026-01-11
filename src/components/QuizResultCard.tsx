// ============================================================================
// QUIZ RESULT CARD COMPONENT
// ============================================================================

interface QuizResultCardProps {
  quizTitle: string;
  score: number;
  possiblePoints: number;
  submittedAt: Date | string;
  attempt: number;
}

export const QuizResultCard = ({
  quizTitle,
  score,
  possiblePoints,
  submittedAt,
  attempt
}: QuizResultCardProps) => {
  const date = new Date(submittedAt);
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 70) return 'text-blue-600';
    if (percentage >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-xl transition-shadow animate-fadeIn">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{quizTitle}</h3>
          <p className="text-sm text-gray-500">Intento #{attempt}</p>
        </div>
        <div className="text-right">
          <div className={`text-4xl font-bold ${getScoreColor((score / possiblePoints) * 100)}`}>
            {((score / possiblePoints) * 100).toFixed(0)}%
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {score} / {possiblePoints}
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          📅 {formattedDate}
        </p>
      </div>
    </div>
  );
};
