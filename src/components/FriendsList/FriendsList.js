import PropTypes from "prop-types";

function friendOnline(status) {
  if (status) {
    return "#21db21";
  } else {
    return "#d40606";
  }
}

const FriendsList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <span
              // class={styles.status}
              style={{ color: friendOnline(friend.isOnline) }}
            >
              {" "}
              ●
            </span>
            <img 
            src={friend.avatar} 
            alt={friend.name} 
            width="48"
            />
            
            <p>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendsList.prototypes = {
    avatar:PropTypes.string,
    name:PropTypes.string,
    isOnline:PropTypes.bool,
    id:PropTypes.string.isequired,
};

export default FriendsList;