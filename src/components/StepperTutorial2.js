import React, { Component  } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const styles  = {
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
};
class StepperClass extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }
  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep+1
    });
  }
  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep-1
    });
  }
  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  }
  getStepContent = (stepNumber) => {
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
  render(){
    const { classes } = this.props;
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
    return(
      <div>
        <Stepper className={classes.stepper} activeStep={this.state.activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
      {this.state.activeStep === steps.length ? (
        <div>
          <div className={classes.content}>모든 스텝을 완료하였습니다.</div>
          <div   className={classes.button}>
            <Button variant="contained" color="primary" onClick={this.handleReset}>다시 시작하기</Button>
          </div>
        </div>
      ) : (
          <div>
            <div className={classes.content}>
              {getStepContent(this.state.activeStep)}
            </div>
            <div className={classes.button}>
              <Button
                style={{marginRight:'10px'}}
                variant="contained"
                color="primary"
                disabled = {this.state.activeStep === 0}
                onClick={this.handleBack}>
                  이전
              </Button>
              <Button variant="contained" color="primary" onClick={this.handleNext}>
                {this.state.activeStep === steps.length - 1 ? (
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
}
export default withStyles(styles)(StepperClass);