import { FormControl, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';

const SearchField = ({ width='600px', onChange,value = '' }) => {
  const isSmallScreen = useMediaQuery('(max-width: 639px)');
  const isMediumScreen = useMediaQuery('(min-width: 640px) and (max-width: 767px)');
  const isLargeScreen = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isExtraLargeScreen = useMediaQuery('(min-width: 1024px) and (max-width: 1279px)');
  const isXXLargeScreen = useMediaQuery('(min-width: 1280px)');

  if (isSmallScreen) {
    width = '150px';
  } else if (isMediumScreen) {
    width = '250px';
  } else if (isLargeScreen) {
    width = '350px';
  } else if (isExtraLargeScreen) {
    width = '450px';
  } else if (isXXLargeScreen) {
    width = '550px';
  }
   return (
      <div>
         <FormControl
            sx={{
               "& .MuiTextField-root": {
                  width: {width},
                  backgroundColor: "white",
               },
            }}
         >
            <TextField
               onChange={onChange}
               value={value}
               variant="outlined"
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="start">
                        <SearchIcon style={{ fill: "#06b6d4" }} />
                     </InputAdornment>
                  ),
               }}
               placeholder="Tìm kiếm..."
            />
         </FormControl>
      </div>
   );
};

export default SearchField;
