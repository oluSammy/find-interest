import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.component';
import signInStyles from './signin.styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FcGoogle } from 'react-icons/fc';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import clsx from 'clsx';



const Signin = () => {
    const classes = signInStyles();
    const [checked, setChecked] = React.useState(true);

    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
      };
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.space} />
            <form >
                <div className={classes.signInBox}>
                    <Typography className={classes.title} variant="h1">FindInterest</Typography>
                    <Typography className={classes.subTitle} variant="subtitle">Welcome Back</Typography>
                    <Button className={classes.formInput} variant="outlined" startIcon={<FcGoogle />}>Login with Google</Button>

                    <Typography variant="body1" className={classes.login} >OR LOGIN WITH EMAIL</Typography>
                        <TextField className={classes.formInput} id="outlined-basic" label="Email" type="email"
                            variant="outlined" size="small"
                        />
                        <FormControl className={clsx(classes.formInput)} size="small" >
                            <InputLabel className={classes.label} htmlFor="pass">Password</InputLabel>
                            <OutlinedInput
                                id="pass"
                                // type={values.showPassword ? 'text' : 'password'}
                                // value={values.password}
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    // onClick={handleClickShowPassword}
                                    >
                                    {true ?
                                    <VisibilityIcon className={classes.inputIcon} /> :
                                    <VisibilityOffIcon className={classes.inputIcon} />}
                                    </IconButton>
                                </InputAdornment>
                                } labelWidth={70}
                            />
                            {/* <FormHelperText id="standard-weight-helper-text">Password must be at least 6 characters</FormHelperText> */}
                        </FormControl>
                        <div>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckChange}
                                    name="checked"
                                    color="primary"
                                />
                                }
                                label="Keep me logged in"
                            />
                            <Link to="#">Forgot Password</Link>
                        </div>
                        <Button className={classes.formInput} startIcon={<BiLogIn />} variant="contained" color="primary">Log in</Button>
                        <Typography className={classes.already}>Don't have an account yet?
                            <Link to="/signup" className={classes.signup} >Sign Up</Link>
                        </Typography>
                </div>
            </form>
        </div>
    )
}

export default Signin;
