import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../state/store'
import {Redirect} from 'react-router-dom'
import {setIsLoggedInTC} from '../../state/auth-reducer'
import {PATH} from '../Routes/Routes'
import {Paper} from '@mui/material'

export type FormikErrorType = {
    email?: string
    password?: string
}


const Login = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
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

    if (isLogin) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return <Grid container justify='center'>
        <Grid item xs={3}>
            <Paper elevation={3} sx={{padding: 2, marginTop: 6}}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl fullWidth>
                        <FormLabel>
                            <p>use test account </p>
                            <p>Email: test@test.com</p>
                            <p>Password: test</p>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label='Email'
                                margin='normal'
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ?
                                <div style={{'color': 'red'}}>{formik.errors.email}</div> : null}
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
                            <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
        </Grid>
    </Grid>
}

export default Login;
