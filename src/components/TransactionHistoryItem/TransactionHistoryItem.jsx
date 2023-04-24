import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ type, amount, currency , bg }) => {
    return (
        <tr className={`${css.transaction__item} ${bg && css.dark}`}>
            <td className={css.transaction__type}>{type}</td>
            <td className={css.trancaction_amount}>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

TransactionHistoryItem.propTypes = {
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
    bg: PropTypes.number.isRequired
}