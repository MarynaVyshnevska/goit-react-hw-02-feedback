import React from "react";
// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveVoices }) => {
    return (
        <ul className={css.Statistics__box}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total Voices: {total}</li>
            <li>Rositive Voices: {positiveVoices}</li>

        </ul>
    )
}

export default Statistics;