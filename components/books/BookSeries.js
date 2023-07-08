import classes from "./BookSeries.module.css";
function BookSeries(props) {
  return(
  <section className={classes.detail}>
    <img src={props.image} alt={props.title} />
    <h1>{props.title}</h1>
    <h5>{props.description}</h5>
    <p>{props.author}</p>
  </section>);
}
export default BookSeries;
