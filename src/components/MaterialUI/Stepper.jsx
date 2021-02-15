import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import ReceiptSharpIcon from '@material-ui/icons/ReceiptSharp';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextareaAutosize } from '@material-ui/core';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <BusinessCenterSharpIcon />,
    2: <VideoLabelIcon />,
    3: <ReceiptSharpIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: '15px',
  },
  button: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  form: {
    '& > *': {
      margin: '1px auto',
      display: 'block',
      width: '100%',
    },
  },
}));

function getSteps() {
  return ['Business Details', "Your Service", "Your Requirements"];
}

export default function FormStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [businessName, setBusinessName] = React.useState('');
  const [ownerName, setOwnerName] = React.useState('');
  const [businessNumber, setBusinessNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [service, setService] = React.useState('');
  const [requirements, setRequirements] = React.useState('');

  const steps = getSteps();
  function getStepContent(step) {
  switch (step) {
    case 0:
      return(
        <>
        <form noValidate autoComplete="off">
            <TextField
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)} 
            style={{marginBottom: '20px', width:'70%'}} id="outlined-basic" 
            label="Business Name" required /> <br />
            <TextField
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)} 
            style={{marginBottom: '20px', width:'70%'}} id="outlined-basic" 
            label="Business Owner" required /> <br />
            <TextField
            type="number"
            value={businessNumber}
            onChange={(e) => setBusinessNumber(e.target.value)} 
            style={{marginBottom: '20px', width:'70%'}} id="outlined-basic" 
            label="Business Number" required /> <br />
            <TextField 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{marginBottom: '20px', width:'70%'}} id="outlined-basic" 
            label="Business Email" required /> <br />
        </form>
        </>
      );
    case 1:
      return (
        <form noValidate autoComplete="off">
            <TextField
            value={service}
            onChange={(e) => setService(e.target.value)} 
            style={{marginBottom: '20px', width:'70%'}} id="outlined-basic" 
            label="Service You Want" required /><br />
            <small className="text-muted">e.g: "Website, Designing, Social Media Marketing" </small> 
        </form>
      );
    case 2:
      return (
        <form noValidate autoComplete="off">
            <TextareaAutosize
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            style={{marginBottom: '20px', width:'70%', padding: '20px', borderRadius: '4px'}} 
            placeholder="Your Requirements..." /> <br />
        </form>
      );
    default:
      return 'Unknown step';
  }
}

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (      
    <div className={classes.root}>
        <div className="row">
            {/* <div className="col-12 col-md-4">
                <h2>Hello world</h2>
            </div> */}
            <div className="col-12">
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                {activeStep === steps.length ? (
                <div>
                    <Typography>
                    Thank you for Submitting your request
                    </Typography>
                    <Button onClick={handleReset} className={classes.button} variant="contained"
                        color="primary">
                    Reset
                    </Button>
                </div>
                ) : (
                <div>
                    <div className={classes.form}>{getStepContent(activeStep)}</div>
                    <div>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} variant="contained"
                        color="secondary">
                        Back
                    </Button>
                    <Button
                        disabled={email === '' || ownerName === '' || businessName === '' || businessNumber === ''}
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    </div>
                </div>
                )}
                </div>
            </div>
        </div>
    </div>
  );
}
