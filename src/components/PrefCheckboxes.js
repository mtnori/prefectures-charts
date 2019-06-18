import React from 'react';
import styles from '../../styles/style.css';

const PrefCheckboxes = ({ checkboxes, toggleCheckbox }) => (
  <fieldset>
    <legend>都道府県</legend>
    <div className={styles.container}>
      {checkboxes.map((checkbox, index) => (
        <div key={checkbox.label} className={styles.item}>
          <label htmlFor={`pref-${index}`}>
            <input
              type="checkbox"
              checked={checkbox.checked}
              value={checkbox.value}
              onChange={toggleCheckbox(index)}
              id={`pref-${index}`}
            />
            {checkbox.label}
          </label>
        </div>
      ))}
    </div>
  </fieldset>
);

export default PrefCheckboxes;
