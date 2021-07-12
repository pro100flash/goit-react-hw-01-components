import styles from "./Statistic.module.css";
import PropTypes from "prop-types";

function randomColor() {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();

  return `rgb(${r},${g},${b})`;
}

const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 style={{ color: randomColor() }} className={styles.title}>
        {title}
      </h2>
      <ul className={styles.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistic;
