import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction__history}>
            <thead className={css.transaction__head}>
                <tr>
                    <th className={css.transaction__title}>Type</th>
                    <th className={css.transaction__title}>Amount</th>
                    <th className={css.transaction__title}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.transaction__body}>
                {items.map(({ type, amount, currency, id }, index) => (
                <tr key = {id} className={`${css.transaction__item} ${index % 2 && css.dark}`}>
                    <td className={css.transaction__type}>{type}</td>
                    <td className={css.trancaction_amount}>{amount}</td>
                    <td>{currency}</td>
                </tr>

                )
                )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes= {
    items: PropTypes.arrayOf(PropTypes.exact({
           id:PropTypes.string.isRequired,
           type:PropTypes.string.isRequired,
           amount:PropTypes.string.isRequired,
           currency:PropTypes.string.isRequired
      }))
}