import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = variant => () => {
    // variant could be success,     error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <React.Fragment>
        <button onClick={handleClickVariant('success')} className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
    </React.Fragment>
  );
}

export default function Snack() {
    
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
