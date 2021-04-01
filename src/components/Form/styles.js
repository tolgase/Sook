
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: '3px 3px 5px 6px white',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: '30px 0',
  },
  fileInput: {
    width: '50%',
    margin: '90px 0',
    boxSizin: '50',
    fontFamily: 'roboto',
    color: 'purple',
  },
  buttonSubmit: {
    marginBottom: 30,
    borderRadius: 15,
    boxShadow: '3px 3px 5px 6px #ccc',
  },
}));
