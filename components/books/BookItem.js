import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './bookItem.module.css';

function BookItem(props) {
  const router = useRouter();
  function showSeriesClickHandler (){
    
    router.push('/' + props.id)
  }  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h5>{props.description}</h5>
        </div>
        <div className={classes.actions}>
          <button onClick={showSeriesClickHandler}>Show Series</button>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;
