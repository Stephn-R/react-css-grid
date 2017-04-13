/* eslint class-methods-use-this: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {};

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      type,
    } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

Grid.propTypes = {
  type: PropTypes.oneOf(['grid', 'inline-grid', 'subgrid']),
  children: PropTypes.element,
};

Grid.defaultProps = {
  type: 'grid',
  children: null,
};

export default Grid;
