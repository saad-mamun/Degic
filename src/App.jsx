import React from 'react'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const App = () => {
  return (
    <div>
      <h1 className="text-[50px]">hello world</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}

export default App
