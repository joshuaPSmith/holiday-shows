import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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

  return (
    < FormGroup row >
      {
        Object.keys(props.holidays).map((holiday, index) => {
          return (
            <FormControlLabel key={index}
              control={
                <Switch checked={props.switchState[holiday]} onChange={handleChange(holiday)} />
              }
              label={props.holidays[holiday]}
            />
          )
        })
      }
    </FormGroup >
  );
}