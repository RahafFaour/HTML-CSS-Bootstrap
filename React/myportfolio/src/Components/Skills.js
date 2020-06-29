import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

function LinearProgressWithLabel(props) {
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
        colorPrimary: {
            background: 'rgba(55, 140, 63, 0.4)'
          },
          barColorPrimary: {
            background: 'green'
          },
      });
      const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" >
      <Box width="100%" mr={1} >
        <LinearProgress classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} variant="determinate" {...props} />
      </Box>
      <Box minWidth={35} >
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);
  const [progress2, setProgress2] = React.useState(10);
  const [progress3, setProgress3] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 70 ? 70 : prevProgress + 10));
    },500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 60 ? 60 : prevProgress + 10));
    },500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress3((prevProgress) => (prevProgress >= 50 ? 50 : prevProgress + 10));
    },500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Container>
        <Card style={{width:"100%",padding:"2%"}}>
    <div className={classes.root}>
       <div id="skills">
       <h1>Professional Skills</h1>
       <h5>HTML/CSS</h5>
      <LinearProgressWithLabel value={progress} /> 
      <h5>Javascript</h5> 
      <LinearProgressWithLabel value={progress} />
      <h5>React</h5>
      <LinearProgressWithLabel value={progress} />
      <h5>Android Studio (Java)</h5>
      <LinearProgressWithLabel value={progress} />
      <h5>Python</h5>
      <LinearProgressWithLabel value={progress2} />
      <h5>PostgreSQL</h5>
      <LinearProgressWithLabel value={progress3} />
      <h5>C#</h5>
      <LinearProgressWithLabel value={progress3} />

      </div>
    </div>
    </Card>
    </Container>
    

  );
}

// import React, { Component } from 'react'
// import { Progress, Segment } from 'semantic-ui-react'

// export class Skills extends Component {
//      ProgressExampleInverted = () => (
//          <div id="skills">
//         <Segment>
//           <h5>HTML/CSS</h5>
//           <Progress percent={70} inverted progress success>
//           </Progress>
//           <h5>Javascript</h5>
//           <Progress percent={70} inverted progress success>
//           </Progress>
//           <h5>React</h5>
//           <Progress percent={70} inverted progress success>
//           </Progress>
//           <h5>Android Studio (Java)</h5>
//           <Progress percent={70} inverted progress success>
//           </Progress>
//           <h5>Python</h5>
//           <Progress percent={60} inverted progress success>
//           </Progress>
//           <h5>PostgreSQL</h5>
//           <Progress percent={50} inverted progress success>
//           </Progress>
//           <h5>C#</h5>
//           <Progress percent={50} inverted progress success>
//           </Progress>
//         </Segment>
//         </div>
//       )
//     render() {
//         return (
//             <div>
//                 <h1>Professional Skills</h1>
//                 {this.ProgressExampleInverted()}
//             </div>
//         )
//     }
// }

// export default Skills
