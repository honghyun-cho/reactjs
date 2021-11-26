import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  stepper: {
    background: '#c7ecee'
  },
  content: {
    padding: '30px',
    width: '100%',
    height: '200px',
    background: '#dff9fb'
  },
  button: {
    padding: '30px',
    width: '100%',
    height: '30px',
    background: '#c7ecee'
  }
});
const StepperHooks = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['스텝 1', '스텝 2', '스텝 3'];
  const getStepContent = stepNumber => {
    switch (stepNumber) {
      case 0:
        return '스텝 1에서는 ... 하세요';
      case 1:
        return '스텝 2에서는 ... 하세요';
      case 2:
        return '스텝 3에서는 ... 하세요';
      default:
        return '알수없는 스텝입니다.';
    }
  }
  const handleNext = () => {
    setActiveStep(preActiveStep => preActiveStep + 1);
  }
  const handleBack = () => {
    setActiveStep(preActiveStep => preActiveStep - 1);
  }
  const handleReset = () => {
    setActiveStep(0);
  }
  return (
    <div>
      <Stepper className={classes.stepper} activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <div className={classes.content}>모든 스텝을 완료하였습니다.</div>
            <div className={classes.button} >
              <Button variant="contained" color="primary" onClick={handleReset}>다시 시작하기</Button>
            </div>
          </div>
        ) : (
            <div>
              <div className={classes.content}>
                {getStepContent(activeStep)}
              </div>
              <div className={classes.button}>
                <Button
                  style={{marginRight:'10px'}}
                  variant="contained"
                  color="primary"
                  disabled = {activeStep === 0}
                  onClick={handleBack}>
                    이전
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? (
                    '완료'
                  ) : (
                      '다음'
                    )}
                </Button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default StepperHooks;