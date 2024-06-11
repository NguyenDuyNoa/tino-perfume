import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const TextFields = ({ required, value, onChange, type, label, error, helperText }) => {
  const isLargeScreen = useMediaQuery('(min-width: 1025px)');
  const width = isLargeScreen ? '400px' : '300px';

  return (
    <div className='text-base font-medium'>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': {
            width: width,
            height: '40px',
            marginTop: '10px',
            marginBottom: '10px',
          },
        }}
        autoComplete='off'
      >
        <TextField
          label={label}
          size='small'
          value={value}
          onChange={onChange}
          required={required ?? null}
          type={type}
          error={error}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          helperText={helperText}
        />
      </Box>
    </div>
  );
};

export default TextFields;
