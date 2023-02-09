import { WavyProps } from "./WavyBottom";

export const WavyTop: React.FC<WavyProps> = ({ color }) => {
  return (
    <div className="w-full h-36 overflow-hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M-2.25,89.31 C147.29,133.72 317.15,62.67 501.69,95.23 L500.00,150.00 L0.00,150.00 Z"
          className={`stroke-none ${color}`}
        ></path>
      </svg>
    </div>
  );
};
