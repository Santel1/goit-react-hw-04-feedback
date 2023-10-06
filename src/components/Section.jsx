import css from './Feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className={css.titleFeedback}>{title}</h1>
      {children}
    </section>
  );
};
