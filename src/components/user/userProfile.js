import styles from "./userProfile.module.css";
import PropTypes from "prop-types";

const UserProfile = ({avatar, name, tag, url, location, stats}) => {
    return (
        <div class={styles.profile}>
            <div class={styles.description}>
                <img class={styles.avatar} src={avatar} alt="User avatar" />
                <p class={styles.name}>{name}</p>
                <a href={url} target="_blank" rel="noreferrer">
                <p class={styles.tag}>@{tag}</p>
                </a>
                <p class={styles.location}>{location}</p>
            </div>
            <ul class={styles.stats}>
                <li>
                    <span class={styles.label}>Posts</span>
                    <span class={styles.quantity}>{stats.posts}</span>
                </li>
                <li>
                    <span class={styles.label}>Followers</span>
                    <span class={styles.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span class={styles.label}>Following</span>
                    <span class={styles.quantity}>{stats.following}</span>
                </li>
            </ul>
        </div>
    );
};

UserProfile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default UserProfile;