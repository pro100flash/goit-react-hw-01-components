import UserProfile from "./components/user/UserProfile";
import user from "./data/user.json";
import Statistic from "./components/statistic/Statistic";
import statisticalData from "./data/statistical-data.json";

function App() {
    return (
        <div>
            <UserProfile
            avatar={user.avatar}
            name={user.name}
            tag={user.tag}
            url={user.url}
            location={user.location}
            stats={user.stats}
            />

            <Statistic title="Upload stats" stats={statisticalData} />
        </div>
    );
};

export default App;