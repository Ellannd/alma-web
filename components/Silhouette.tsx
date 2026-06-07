

interface SilhouetteProps {
  shape: "leaf" | "circle" | "blob" | "petal" | "arc" | "heart";
  color?: string;
  colorB?: string; 
  size?: number;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  opacity?: number;
  rotate?: number;
}

const paths = {
  // Hoja orgánica
  leaf: "M50 2 C75 2, 98 25, 98 50 C98 75, 75 98, 50 98 C25 98, 2 75, 2 50 C2 25, 25 2, 50 2Z",

  // Círculo perfecto
  circle: "M50 2 a48 48 0 1 1 -0.01 0 Z",

  // Blob orgánico asimétrico
  blob: "M47 3 C68 -2, 93 14, 97 38 C101 62, 88 91, 63 97 C38 103, 8 88, 3 63 C-3 38, 12 8, 47 3Z",

  // Pétalo fino
  petal: "M50 2 C65 2, 90 20, 90 50 C90 80, 65 98, 50 98 C35 98, 10 80, 10 50 C10 20, 35 2, 50 2Z",

  // Arco / media luna
  arc: "M10 50 A40 40 0 0 1 90 50 A40 40 0 0 0 10 50Z",

  // Corazón completo (para color sólido)
  heart: "M50 85 C50 85, 8 55, 8 30 C8 14, 20 4, 32 4 C40 4, 47 8, 50 14 C53 8, 60 4, 68 4 C80 4, 92 14, 92 30 C92 55, 50 85, 50 85Z",
};

export default function Silhouette({
  shape = "blob",
  color = "#c4a49a",
  colorB,
  size = 200,
  top,
  right,
  left,
  bottom,
  opacity = 0.06,
  rotate = 0,
}: SilhouetteProps) {
  const isTwoTone = shape === "heart" && colorB;

  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        top,
        right,
        left,
        bottom,
        opacity,
        pointerEvents: "none",
        zIndex: 0,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        flexShrink: 0,
      }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isTwoTone ? (
        <>
          {/* Definimos clipPaths para dividir el corazón en mitad izq y der */}
          <defs>
            <clipPath id="clip-left">
              <rect x="0" y="0" width="50" height="100" />
            </clipPath>
            <clipPath id="clip-right">
              <rect x="50" y="0" width="50" height="100" />
            </clipPath>
          </defs>
          {/* Mitad izquierda — color principal */}
          <path d={paths.heart} fill={color} clipPath="url(#clip-left)" />
          {/* Mitad derecha — segundo tono */}
          <path d={paths.heart} fill={colorB} clipPath="url(#clip-right)" />
        </>
      ) : (
        <path d={paths[shape]} fill={color} />
      )}
    </svg>
  );
}
