import React from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { gray, sponsors } = this.props;
    return <ImageList gray={gray} images={sponsors} {...extractProps('image', this.props)} />;
  }
}

Sponsors.propTypes = {
  /**
   * Define if image is gray scale.
   */
  gray: PropTypes.bool,
  /**
   * Companies to show.
   */
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  )
};

Sponsors.defaultProps = {
  gray: false,
  sponsors: []
};

export default withStyles(Sponsors);
