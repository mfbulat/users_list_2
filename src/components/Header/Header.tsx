import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import {NavLink} from 'react-router-dom'
import {PATH} from '../Routes/Routes'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../state/store'
import {setIsLoggedInAC} from '../../state/auth-reducer'

const useStyles = makeStyles((theme) => ({
    links: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));


const Header = () => {
    const classes = useStyles();
    const isLogin = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()


    return (
        <AppBar position='static'>
            <Toolbar>
                <Button color='inherit'><NavLink className={classes.links} to={PATH.HOME}>Home</NavLink></Button>
                <Button color='inherit'><NavLink className={classes.links} to={PATH.CHAT}>Chat</NavLink></Button>
                <Button color='inherit'><NavLink className={classes.links} to={PATH.PROFILE}>Profile</NavLink></Button>
                {!isLogin
                    ? <Button color='inherit'><NavLink className={classes.links} to={PATH.LOGIN}>Login</NavLink></Button>
                    : <Button color='inherit' onClick={() => dispatch(setIsLoggedInAC(false))}>log out</Button>
                }
            </Toolbar>
        </AppBar>
    );
};

export default Header;