import styles from "./Friends.list.module.css";
import PropTypes from "prop-types";

function friendOnline(status) {
  if (status) {
    return "#21db21";
  } else {
    return "#d40606";
  }
}

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status} style={{ color: friendOnline(isOnline) }}>
        {" "}
        ●
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
