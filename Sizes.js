
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Sizes() {
  return (
    <Stack spacing={2} sx={{ width: 500 }}>
      
      <Autocomplete
        multiple
        id="size-small-standard-multi"
        size="small"
        options={name}
        getOptionLabel={(option) => option.title}
        defaultValue={[name[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Size small"
            placeholder="Add new user"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const name = [

  { title: 'Stephen', year: 1994 },
  { title: 'Adam', year: 1972 },
  { title: 'Tony', year: 1974 },
  { title: 'Charles', year: 2008 },
  { title: 'Christopher', year: 1957 },
  { title: "Schindler", year: 1993 },
  { title: 'Interstellar', year: 2014 },

];