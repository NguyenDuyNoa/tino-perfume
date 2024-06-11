/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Alert } from '@mui/material';
import { StyledSnackbar } from './styled';

const ActionAlerts = ({ message, type, handleDestroyErr, isLoggedIn, error, widthSize }) => {
  const [open, setOpen] = React.useState(false);

  const handleClosed = async () => {
    setOpen(!open);
    handleDestroyErr();
    localStorage.clear();
  };

  useEffect(() => {
    if (error) {
      setOpen(!open);
    } else if (!isLoggedIn && localStorage.getItem('isLogout')) {
      setOpen(!open);
    }
  }, []);

  return (
    <StyledSnackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={open}
      autoHideDuration={3000}
      onClose={() => handleClosed()}
      sx={{ width: widthSize || '20%' }}
      width='100%'
    >
      <Alert className='text-left' severity={type} onClose={() => handleClosed()}>
        {message}
      </Alert>
    </StyledSnackbar>
  );
};
export default ActionAlerts;