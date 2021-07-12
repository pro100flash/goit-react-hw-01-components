import styles from "./Friends.list.module.css";
import PropTypes from "prop-types";
import FriendsListItem from "./FriendsListItem";

// function friendOnline(status) {
//   if (status) {
//     return "#21db21";
//   } else {
//     return "#d40606";
//   }
// }

const FriendsList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles.friendlist}>
        {friends.map((friend) => (
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id.toString()}
          />
        ))}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
