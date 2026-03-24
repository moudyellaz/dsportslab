export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="D Sports Lab logo"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" fill="#1a6e8a" />
      {/* Inner ring accent */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="#c9991a" strokeWidth="2" />
      {/* Bold "D" letterform */}
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fill="#c9991a"
        fontSize="58"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
        letterSpacing="-2"
      >
        D
      </text>
    </svg>
  );
}
