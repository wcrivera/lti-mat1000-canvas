// ============================================================================
// STATS CARD COMPONENT
// ============================================================================

interface StatsCardProps {
  label: string;
  value: number | string;
  color: 'green' | 'blue' | 'orange' | 'pink';
}

export const StatsCard = ({ label, value, color }: StatsCardProps) => {
  const colorClasses = {
    green: 'bg-green-50 text-green-700 border-green-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200',
    pink: 'bg-pink-50 text-pink-700 border-pink-200'
  };

  return (
    <div className={`rounded-lg border-2 p-6 ${colorClasses[color]}`}>
      <div className="text-sm font-medium opacity-75">{label}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
    </div>
  );
};
