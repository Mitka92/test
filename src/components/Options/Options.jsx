import Button from '../Button/Button';
import clsx from 'clsx';
import css from './Options.module.css';
function Options({ callback, totalFeedback, reset }) {
  const handleClick = e => {
    const feedbackType = e.target.getAttribute('data-name');
    callback(feedbackType);
  };
  return (
    <div className={clsx(css['options-box'])}>
      <Button name="Good" dataName="good" onClick={handleClick} />
      <Button name="Neutral" dataName="neutral" onClick={handleClick} />
      <Button name="Bad" dataName="bad" onClick={handleClick} />
      {totalFeedback > 0 && (
        <Button name="Reset" dataName="reset" onClick={reset} />
      )}
    </div>
  );
}

export default Options;
