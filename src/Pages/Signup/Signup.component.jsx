import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar.component';
import signupStyles from './Signup.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/img/signup-img.svg';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { FcGoogle } from 'react-icons/fc';
import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';



const SignupPage = () => {
    const classes = signupStyles();
    const [values, setValues] = useState({ showPassword: false, showConfirmPass: false });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleShowConfirmPass = () => {
        setValues({ ...values, showConfirmPass: !values.showConfirmPass })
    }
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.space} />
            <div>
                <Grid container className={classes.gridContainer} alignItems="center">
                        <Hidden xsDown>
                            <Grid item xs={12} sm={6} md={6}>
                                <figure className={classes.signupImgContainer}>
                                    <img className={classes.signupImg} src={img} alt="findInterest"/>
                                </figure>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={6} md={6}>
                            <form className={classes.signupBox}>
                                <Typography className={classes.title} variant="h3" component="h3" color="primary">
                                    Welcome To FindInterest
                                </Typography>
                                <Typography className={classes.subtitle} variant="Subtitle" component="h3" color="primary">
                                    Create Your Account
                                </Typography>
                                <div className={classes.formInputs}>
                                    <TextField className={classes.formInput} id="outlined-basic"
                                        label="Full Name" type="text" variant="outlined" size="small"
                                    />
                                    <TextField className={classes.formInput} id="outlined-basic"
                                        label="Email" type="email" variant="outlined" size="small"
                                    />
                                    <FormControl size="small" className={classes.formInput}>
                                        <InputLabel className={classes.label} htmlFor="pass">Password</InputLabel>
                                        <OutlinedInput
                                            id="pass"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            fullWidth
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                >
                                                {values.showPassword ?
                                                <VisibilityIcon className={classes.inputIcon} /> :
                                                <VisibilityOffIcon className={classes.inputIcon} />}
                                                </IconButton>
                                            </InputAdornment>
                                            } labelWidth={70}
                                        />
                                        <FormHelperText id="standard-weight-helper-text">
                                            Password must be at least 6 characters
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl size="small" className={classes.formInput}>
                                        <InputLabel className={classes.label} htmlFor="pass">Confirm Password</InputLabel>
                                        <OutlinedInput
                                            id="confirmPass"
                                            type={values.showConfirmPass ? 'text' : 'password'}
                                            value={values.password}
                                            fullWidth
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleShowConfirmPass}
                                                >
                                                {values.showConfirmPass ?
                                                <VisibilityIcon className={classes.inputIcon} /> :
                                                <VisibilityOffIcon className={classes.inputIcon} />}
                                                </IconButton>
                                            </InputAdornment>
                                            } labelWidth={130}
                                        />
                                    </FormControl>
                                <Button className={clsx(classes.formInput, classes.signupBtn)}
                                    startIcon={<BiLogIn />} variant="contained" color="primary">SIGN UP
                                </Button>
                                <Typography className={classes.already}>Already have an account?
                                    <Link to="/login" className={classes.login} >Login</Link>
                                </Typography>
                                <Button className={clsx(classes.formInput, classes.signupBtn)} variant="outlined"
                                    startIcon={<FcGoogle />}>Signup with Google
                                </Button>
                                </div>
                            </form>
                        </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default SignupPage
