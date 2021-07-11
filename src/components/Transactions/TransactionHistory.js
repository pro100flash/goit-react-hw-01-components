
import PropTypes from 'prop-types';

function upperFirstLatter(string) {
    let newStr = string[0].toUpperCase() + string.slice(1);
    return newStr;
};

const TransactionHistory = ({items}) => {
    return (
        <div>
            <table>
                <tr>Type</tr>
                <tr>Amount</tr>
                <tr>Currency</tr>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{upperFirstLatter(item.type)}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

TransactionHistory.prototype = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string,
};

export default TransactionHistory;