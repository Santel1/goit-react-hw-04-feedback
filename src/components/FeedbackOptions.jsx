import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.feedbackList}>
    {options.map(option => (
      <li className={css.feedbackListItem} key={option}>
        <button
          className={css.feedbackListBtn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);
