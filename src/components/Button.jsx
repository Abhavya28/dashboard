const Button = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-center gap-2
        px-4 py-3 border border-gray-300
        rounded-md font-semibold uppercase text-sm
        transition duration-200
        hover:bg-gray-100
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
