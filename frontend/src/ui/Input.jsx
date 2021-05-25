const Input = ({ id, label, ...props }) => (
  <div className="w-full px-3">
    <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for={id}
    >
      {label}
    </label>
    <input
      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm bg-white text-gray-600 focus:bg-gray-50 border-gray-300 focus:ring-offset-2 focus:ring-indigo-400 mb-5"
      id={id}
      type="text"
      {...props}
    />
  </div>
);

export default Input;
