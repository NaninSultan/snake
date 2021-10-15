import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import { Button, Grid } from '@material-ui/core';
import Snake from './components/Snake';
import { SNAKE_START } from './helpers/constants';
import { useState } from 'react';

function App() {

  const [snake, setSnake] = useState(SNAKE_START);
  const [playBtn, setPlayBtn] = useState(false);

  const playButton = () => {
    setPlayBtn(true);
  }

  return (
    <Grid>
      {playBtn && <AppHeader snake={snake} />}
      {!playBtn && <div style={{marginTop: "200px", textAlign: "center", marginBottom: "40px"}}>
        <img alt="Logo" style={{height: "200px"}} src="https://media3.giphy.com/media/3oKIPCohynIR4gBdhm/giphy.gif?cid=790b7611c7b71fabacd165eb23e5b46fae07d0a5aff7f5c7&rid=giphy.gif&ct=s" />
        <br></br>
        <Button style={{marginTop: "40px"}} onClick={playButton} variant="contained" color="primary">Play Snake</Button>
      </div>}
      {playBtn && <Snake snake={snake} setSnake={setSnake} />}
      <AppFooter />
    </Grid>
  );
}

export default App;
