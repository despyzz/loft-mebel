import React, {memo} from 'react';
import classes from './Characteristics.module.scss';

interface CharacteristicsProps {

  characteristics?: Array<{
    name: string,
    value: string
  }>
}

const Characteristics = memo((props: CharacteristicsProps) => {
  const {
    characteristics
  } = props

  if (!characteristics) {
    return null;
  }

  return (
    <div className={classes.Characteristics}>
      <div className={classes.List}>
        {
          characteristics.map(({name, value}, i) => (
            <div className={classes.Item} key={i}>

              <div className={classes.Group}>
                <div className={classes.Name}>
                  {name}
                </div>

                <div className={classes.Dots}/>
              </div>

              <div className={classes.Value}>
                {value}
              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
});

export default Characteristics;