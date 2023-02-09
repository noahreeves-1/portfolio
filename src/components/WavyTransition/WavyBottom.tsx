export interface WavyProps {
  color: string;
}

export const WavyBottom: React.FC<WavyProps> = ({ color }) => {
  return (
    <div className="w-full h-36 overflow-hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M-1.69,36.02 C161.40,62.67 270.88,3.47 501.13,36.02 L500.00,0.00 L0.00,0.00 Z"
          className={`stroke-none ${color}`}
        ></path>
      </svg>
    </div>
  );
};
