import React from 'react';

import { GirlApi } from './../../../api';
import GirlList from './../list';

class SortableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: null,
      girls: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      GirlApi.getAttributes().then(attributes => this.setState({ attributes }));
      GirlApi.getGirls().then(girls => this.setState({ girls }));
    }, 3000);
  }

  render() {
    const { attributes, girls } = this.state;

    return girls == null ? <div>Loading</div> : <GirlList {...this.state} />;
  }
}

export default SortableList;
