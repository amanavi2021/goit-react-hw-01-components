import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
    <section className={css.statistics}>
       {title && <h2 className={css.title}>{title}</h2>} 

        <ul className={css.stat__list}>
            {stats.map(({ id, label, percentage }) => (
              <li key = {id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li> 
            ))}
        </ul>
    </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
      id:PropTypes.string.isRequired,
      label:PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired
    }))
}