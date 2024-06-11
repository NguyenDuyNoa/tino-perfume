import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { StyledAlert } from './styled';

const Notification = ({ show, message, type, handleDestroyErr, width = '20%' }) => {
  const [showAlert, setShowAlert] = useState(show);

  const handleCloseAlert = async () => {
    setShowAlert(false);
    handleDestroyErr();
  };

  useEffect(() => {
    setShowAlert(show);
  }, [show]);

  return (
    <StyledAlert
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={showAlert}
      autoHideDuration={3000}
      onClose={() => handleCloseAlert()}
      sx={{ width: width , position :'fixed' }}
      width='100%'
    >
      <Alert severity={type} onClose={() => handleCloseAlert()}>
        {message}
      </Alert>
    </StyledAlert>
  );
};
export default Notification;