import PropTypes from "prop-types";
import React from "react";

import { Key, Stat, Value, Wrapper } from "./styles";

const Stats = ({ stats }) => (
  <Wrapper>
    {stats.map(({ key, value }) => (
      <Stat key={key}>
        <Value>{value}</Value>
        <Key>{key}</Key>
      </Stat>
    ))}
  </Wrapper>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Stats;
