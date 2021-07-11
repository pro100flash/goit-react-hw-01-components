import PropTypes from "prop-types";


const color = item => {
    const colorArr = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
    return `${colorArr[Number(item.id.replace(/[^0-9]/g, ''))% 5]}`;
};

const Statistic = ({title, stats}) => {
    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {stats.map(item => (
                    <li
                    key={item.id}
                    // class={styles.item}
                    style={{backgroundColor: color(item)}}
                    >
                        <span>{stats.label}</span>
                        <span>{stats.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistic.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistic;