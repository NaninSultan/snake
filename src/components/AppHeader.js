import { Typography } from '@material-ui/core';

const AppHeader = ({ snake }) => {

    return (
        <header>
            <div className='leftTop'>
                <img src="https://media3.giphy.com/media/3oKIPCohynIR4gBdhm/giphy.gif?cid=790b7611c7b71fabacd165eb23e5b46fae07d0a5aff7f5c7&rid=giphy.gif&ct=s" alt='Logo' width="50px" height="50px" />
            </div>
            <div className='leftTop'>
                <h1>SNAKE</h1>
            </div>
            <div className="rightTop">
                <img src="https://acegif.com/wp-content/gifs/coin-flip-17.gif" alt='Logo' width="30px" height="30px" />
            </div>
            <div className="rightTop">
                <Typography variant="h5" style={{color: "black", fontWeight: "600"}} >Your Score: {snake.length - 2}</Typography>
            </div>
        </header>
    )

}

export default AppHeader;