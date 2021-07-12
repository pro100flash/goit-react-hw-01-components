import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ avatar, name, tag, url, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <a href={url} target="_blank" rel="noreferrer">
          <p className={styles.tag}>@{tag}</p>
        </a>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Posts</span>
          <span className={styles.quantity}>{stats.posts}</span>
        </li>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Following</span>
          <span className={styles.quantity}>{stats.following}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
