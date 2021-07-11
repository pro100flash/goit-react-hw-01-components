import UserProfile from "./components/user/userProfile";
import user from "./data/user.json";

function App() {
    return (
        <div>
            <UserProfile
            avatar={user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
            />
        </div>
    );
};

export default App;