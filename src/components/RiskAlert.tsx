import React from 'react';
import { AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

interface RiskAlertProps {
  level: 'low' | 'medium' | 'high';
}

const RiskAlert: React.FC<RiskAlertProps> = ({ level }) => {
  const config = {
    low: {
      icon: CheckCircle,
      color: 'green',
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      title: 'Low Risk - On Track',
      message: 'Your flight is likely to depart on time. We\'ll continue monitoring.',
      probability: '5%'
    },
    medium: {
      icon: AlertCircle,
      color: 'orange',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-800',
      title: 'Medium Risk - Monitor Closely',
      message: 'Weather conditions may cause delays. Hotels are being pre-selected.',
      probability: '67%'
    },
    high: {
      icon: AlertTriangle,
      color: 'red',
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      title: 'High Risk - Disruption Likely',
      message: 'Severe weather and airport congestion detected. Rescue hotels ready.',
      probability: '89%'
    }
  };

  const alert = config[level];
  const Icon = alert.icon;

  return (
    <div className={`neu-inset p-6 rounded-2xl ${alert.bg} border-2 ${alert.border}`}>
      <div className="flex items-start space-x-4">
        <div className={`neu-circle p-3 bg-white`}>
          <Icon className={`h-6 w-6 text-${alert.color}-600`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className={`font-bold text-lg ${alert.text}`}>
              {alert.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-white ${alert.text}`}>
              {alert.probability} chance
            </span>
          </div>
          <p className={`${alert.text} text-sm leading-relaxed`}>
            {alert.message}
          </p>
          
          {level !== 'low' && (
            <div className="mt-4 flex items-center space-x-4">
              <div className={`h-2 bg-${alert.color}-200 rounded-full flex-1`}>
                <div 
                  className={`h-2 bg-${alert.color}-500 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: alert.probability }}
                ></div>
              </div>
              <span className={`text-xs ${alert.text} font-medium`}>
                Risk Level: {level.toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiskAlert;