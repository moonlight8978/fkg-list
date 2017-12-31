import React from 'react';

import GirlItem from './../item';

class GirlList extends React.Component {
  renderGirls() {
    const { girls, attributes } = this.props;

    return girls.map((girl, index) => {
      return <GirlItem key={girl.id} girl={girl} attributes={attributes} />;
    });
  }

  render() {
    const girlItems = this.renderGirls();

    return (
      <div className="girl-list">
        {girlItems}
      </div>
    );
  }
}

export default GirlList;
