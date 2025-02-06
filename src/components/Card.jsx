import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>React + Tailwind Card</h2>
      <p className={styles.cardDescription}>
        This is a simple card component styled with Tailwind CSS. It’s responsive and easy to customize.
      </p>
      <button className={styles.cardButton}>Click Me</button>
    </div>
  );
};

export default Card;