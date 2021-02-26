import { CssBaseline, FormControl, InputLabel, Paper, Typography, withStyles, Input, Button } from "@material-ui/core";
import React from "react";
import styles from './styles';
import { Link } from 'react-router-dom'
import firebase from 'firebase'
class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            loginError: false

        }
    }
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component='h1' various='h5'>
                        Log In!
                 </Typography>
                    <form className={classes.form} onSubmit={(e) => this.submitLogin(e)}>
                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor='login-email-input'>Enter Your Email</InputLabel>
                            <Input autoComplete='email' autoFocus id='login-email-input' onChange={(e) => this.userTyping('email', e)}></Input>
                        </FormControl>
                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
                            <Input type='password' id='login-password-input' onChange={(e) => this.userTyping('password', e)}></Input>
                        </FormControl>
                        <Button type='submit' color="primary" className={classes.submit} fullWidth variant='contained'>log In</Button>
                    </form>
                    {this.state.loginError ? <Typography component='h5' className={classes.errorText} variant='h6'>
                        Incorrect Login Information</Typography> : null}
                    <Typography component='h5' variant='h6' className={classes.noAccountHeader}>Don't Have An Account?</Typography>
                    <Link className={classes.signUpLink} to='/signup'>Sign Up!</Link>
                </Paper>

            </main>

        )
    }
    userTyping = (type, e) => {
        switch (type) {
            case "email":
                this.setState({
                    email: e.target.value
                }); break;
            case "password":
                this.setState({
                    password: e.target.value
                }); break;
            default: break;
        }
    }
    submitLogin = async (e) => {

        e.preventDefault();
        console.log(this.state.email, this.state.password);
       await firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/dashboard');

            }, err => {
                this.setState({ loginError: true });
                console.log(err, "error da daai");
            });


    }

}
export default withStyles(styles)(LoginComponent);