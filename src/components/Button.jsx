// Button.jsx
const Button = ({ children, onClick, className = "", size = "md", fullWidth = true, ...props }) => {
  let sizeClasses = "";

  switch(size) {
    case "sm":
      sizeClasses = "px-3 py-2 text-sm";
      break;
    case "md":
      sizeClasses = "px-4 py-3 text-base";
      break;
    case "lg":
      sizeClasses = "px-5 py-4 text-lg";
      break;
    default:
      sizeClasses = "px-4 py-3 text-base";
  }

  return (
    <button
      onClick={onClick}
      className={`
        ${fullWidth ? "w-full" : "w-auto"} 
        flex items-center justify-center gap-2
        border border-gray-300 rounded-md font-semibold uppercase
        transition duration-200 hover:bg-gray-100
        ${sizeClasses} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
