import { toast } from 'react-toastify';

const SendToast = (
  message: string,
  type: 'error' | 'success' | 'info',
): void => {
  toast(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: type,
  });
};

export default SendToast;
