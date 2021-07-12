import UserProfile from "./components/User/UserProfile";
import Statistic from "./components/Statistic/Statistic";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionHistory from "./components/Transactions/TransactionHistory";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

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
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
