export const MinusIcon = ({
  fill = 'currentColor',
  filled = true,
  size = 24,
  height = 24,
  width = 24,
  label = "",
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 -960 960 960"
      fill={filled ? fill : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M200-440v-80h560v80H200Z"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};