import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class CardTitle extends React.Component {
  render() {
    const { content, className } = this.props;
    return <div className={`Card__Title ${className}`}>{content}</div>;
  }
}

CardTitle.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};
CardTitle.defaultProps = {
  content: '',
  className: null
};

const CardTitleWithStyles = withStyles(CardTitle);
export default CardTitleWithStyles;
