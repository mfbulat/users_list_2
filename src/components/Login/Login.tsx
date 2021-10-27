import React, {useState} from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../state/store'
import {Redirect} from 'react-router-dom'
import {setIsLoggedInTC, UserType} from '../../state/auth-reducer'
import {PATH} from '../Routes/Routes'
import {Paper} from '@mui/material'

export type FormikErrorType = {
    login?: string
    password?: string
}


const Login = () => {
    const dispatch = useDispatch()
    const auth = useSelector<AppRootStateType, UserType>(state => state.auth)
    const [btnDisable, setBtnDisable] = useState(true)

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            checkLoginAndPassword(values.login, values.password)

            if (!values.login) {
                errors.login = 'Required';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length <= 3) {
                errors.password = 'Must be 4 characters or more';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(setIsLoggedInTC(values))
            formik.resetForm()
        },
    })

    const checkLoginAndPassword = (login: string, password: string) => {
        if (login === auth.userName && password === auth.password) {
            setBtnDisable(false)
        } else setBtnDisable(true)
    }

    if (auth.isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return <Grid container justify='center'>
        <Grid item xs={3}>
            <Paper elevation={3} sx={{padding: 2, marginTop: 6}}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl fullWidth>
                        <FormLabel>
                            <p>use test account </p>
                            <p>Login: {auth.userName}</p>
                            <p>Password: {auth.password}</p>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label='Login'
                                margin='normal'
                                name='login'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.login}
                            />
                            {formik.touched.login && formik.errors.login ?
                                <div style={{'color': 'red'}}>{formik.errors.login}</div> : null}
                            <TextField
                                type='password'
                                label='Password'
                                margin='normal'
                                name='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ?
                                <div style={{'color': 'red'}}>{formik.errors.password}</div> : null}
                            <FormControlLabel
                                label={'Remember me'}
                                control={<Checkbox/>}
                            />
                            <Button type={'submit'} variant={'contained'}
                                    color={'primary'} disabled={btnDisable}>Login</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
        </Grid>
    </Grid>
}

export default Login;
