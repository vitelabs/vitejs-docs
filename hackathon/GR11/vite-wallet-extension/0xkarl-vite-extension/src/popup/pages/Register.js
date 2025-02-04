import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import { useVite } from '../contexts/Vite';
import Heading from '../components/shared/Heading';

const useStyles = makeStyles(() => ({
  container: {},
}));

function Register() {
  const router = useHistory();
  const classes = useStyles();
  const { setError, register } = useVite();

  const onSubmit = (e) => {
    e.preventDefault();

    const password = (e.target.password.value || '').trim();
    const confirmPassword = (e.target.cpassword.value || '').trim();

    setError(null);
    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }
    register(password);
  };

  return (
    <Box className={classes.container}>
      <Heading>Register account</Heading>

      <form {...{ onSubmit }}>
        <TextField
          id="password"
          label="Password"
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Type password..."
          fullWidth
          required
        />

        <Box mt={2}>
          <TextField
            id="cpassword"
            label="Confirm"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Confirm password..."
            fullWidth
            required
          />
        </Box>

        <Box className="flex items-center" mt={3}>
          <Button variant="outlined" size="small" type="submit">
            Create account
          </Button>
          <Box mx={1}>or</Box>
          <Button
            variant="outlined"
            size="small"
            type="button"
            onClick={() => router.push('/import')}
          >
            Import
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Register;
