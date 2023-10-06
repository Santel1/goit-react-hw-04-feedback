import css from './Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticList}>
      <li className={css.statisticItem}>
        <p className={css.statisticText}>Good:{good}</p>
      </li>
      <li className={css.statisticItem}>
        <p className={css.statisticText}>Neutral:{neutral}</p>
      </li>
      <li className={css.statisticItem}>
        <p className={css.statisticText}>Bad:{bad}</p>
      </li>
      <li className={css.statisticItem}>
        <p className={css.statisticText}>Total:{total}</p>
      </li>
      <li className={css.statisticItem}>
        <p className={css.statisticText}>
          Positive feedback:{positivePercentage}%
        </p>
      </li>
    </ul>
  );
};
