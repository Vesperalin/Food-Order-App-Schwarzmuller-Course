import styles from './Checkout.module.css';

const Checkout = props => {
  const confirmHandler = event => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.control}>
        <label htmlFor='name'>Street</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.control}>
        <label htmlFor='name'>Postal code</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.control}>
        <label htmlFor='name'>City</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
