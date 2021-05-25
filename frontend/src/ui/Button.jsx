const BUTTON_TYPES = {
  primary: "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-400 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400",
  success: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-400",
  default: "bg-white text-gray-600 hover:bg-gray-50 border-gray-300 focus:ring-offset-2 focus:ring-indigo-400",
};

const Button = ({ children, className, type = "default", ...props }) => (
  <button
    type="button"
    className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm
      ${className}
      ${BUTTON_TYPES[type] ?? BUTTON_TYPES.default}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;
