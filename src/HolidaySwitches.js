import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './css/main.css';
import { withStyles } from '@material-ui/core/styles';

export default function HolidaySwitches(props) {
  // const [state, setState] = React.useState({
  //   christmas: true,
  //   halloween: true,
  //   thanksgiving: true,
  //   valentinesDay: true,
  // });

  const handleChange = name => event => {
    props.switchChange(event.target.checked, name)
  };

  const PinkCheckbox = withStyles({
    root: {
      color: "#ea4e7b",
      '&$checked': {
        color: "#E21B54"
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

  return (
    // <FormGroup>
    //   <FormControlLabel
    //     control={
    //       <Switch checked={props.toggleAllOn} onChange={toggleAllChange} />
    //     }
    //     label="Toggle All"
    //   />
    // </FormGroup>

    <FormGroup>
      {
        Object.keys(props.holidays).map((holiday, index) => {
          return (
            <FormControlLabel key={index}
              control={
                <PinkCheckbox checked={props.switchState[holiday]} onChange={handleChange(holiday)} />
              }
              label={props.holidays[holiday].name}
            />
          )
        })
      }
    </FormGroup >
  );
}