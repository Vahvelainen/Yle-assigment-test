

export default function CircularProgress({ progress }) {
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        stroke="#4caf50"
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out',
                  transform: 'scaleX(-1) rotate(90deg)'
              }}
      />
    </svg>
  );
};