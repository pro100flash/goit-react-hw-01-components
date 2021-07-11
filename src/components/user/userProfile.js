// import styles from "./userProfile.module.css";
import PropTypes from "prop-types";

const UserProfile = ({avatar, name, tag, location, stats}) => {
    return (
        <div>
            <div>
                <img src={avatar} alt="User avatar" />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    <span>Posts</span>
                    <span>{stats.posts}</span>
                </li>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Following</span>
                    <span>{stats.following}</span>
                </li>
            </ul>
        </div>
    );
};

UserProfile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default UserProfile;