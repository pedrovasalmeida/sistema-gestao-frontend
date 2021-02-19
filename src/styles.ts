import styled from 'styled-components';
import { shade } from 'polished';
import { ToastContainer } from 'react-toastify';

export const ToastNotifyContainer = styled(ToastContainer)`
  .Toastify__progress-bar {
    background: ${p => p.theme.colors.white};
  }

  .error {
    background: ${p => shade(0.1, p.theme.colors.red)};
    color: #fff;
    border: 1px solid #fff;
  }

  .success {
    background: ${p => shade(0.2, p.theme.colors.green)};
    color: #fff;
    border: 1px solid #fff;
  }

  .info {
    color: #fff;
    border: 1px solid #fff;
  }
`;
