import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Books</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All books</Link>
          </li>
          <li>
            <Link href='/new-book'>Add New book</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
