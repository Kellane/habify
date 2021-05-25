import { Button } from ".";

const Modal = ({ isOpened = false, onClose = () => {}, children, footer }) => {
  const DEFAULT_FOOTER = () => <Button onClick={onClose}>Fechar</Button>;

  const FooterComponent = footer ?? DEFAULT_FOOTER;

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto transition-opacity
    ${
      !isOpened
        ? "pointer-events-none opacity-0 ease-out duration-300"
        : "opacity-100 ease-in duration-200"
    }
    `}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={onClose}
          className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in duration-200
          ${
            isOpened
              ? "opacity-100 ease-out duration-300"
              : "opacity-0 ease-in duration-200"
          }
        `}
        />

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>

        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full
        ${
          isOpened
            ? "opacity-100 translate-y-0 sm:scale-100 ease-out duration-300"
            : "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 ease-in duration-200"
        }
      `}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <FooterComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
