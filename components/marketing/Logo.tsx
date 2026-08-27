import React from "react";

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  variant?: "dark" | "light";
}

export const Logo: React.FC<LogoProps> = ({
  className,
  width = 1000,
  height = 1000,
  variant = "dark",
}) => {
  const bgColor = variant === "light" ? "#ffffff" : "#000000";
  const letterColor = variant === "light" ? "#000000" : "#ffffff";

  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        zoomAndPan="magnify"
        viewBox="0 0 750 749.999995"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <g />
        </defs>
        <rect
          x="-75"
          width="900"
          fill={bgColor}
          y="-74.999999"
          height="899.999994"
          fillOpacity="1"
        />
        <g fill={letterColor} fillOpacity="1">
          <g transform="translate(163.79374, 569.249992)">
            <g>
              <path d="M 9.421875 0 L 136.875 -389.96875 L 281.609375 -389.96875 L 413 0 L 292.609375 0 L 247.59375 -151.28125 C 237.988281 -184.082031 228.867188 -217.796875 220.234375 -252.421875 C 211.597656 -287.054688 203.351562 -321.738281 195.5 -356.46875 L 220.625 -356.46875 C 213.125 -321.738281 205.445312 -287.054688 197.59375 -252.421875 C 189.75 -217.796875 181.023438 -184.082031 171.421875 -151.28125 L 127.71875 0 Z M 103.90625 -72.5 L 103.90625 -152.578125 L 318.515625 -152.578125 L 318.515625 -72.5 Z M 103.90625 -72.5 " />
            </g>
          </g>
        </g>
      </svg>
      <span className="text-lg font-black tracking-[0.18em] sm:text-xl">
        ARCHITECTURA
      </span>
    </div>
  );
};

export default Logo;
