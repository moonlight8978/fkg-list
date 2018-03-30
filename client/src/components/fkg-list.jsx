import React from 'react';

import withLoading from '../common/loading';

class FKGList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const fkgs = this.props.fkgs;
    const nextFKGs = nextProps.fkgs;

    if (fkgs.length !== nextFKGs.length) {
      return true;
    }

    const len = fkgs.length;
    for (let i = 0; i < len; i += 1) {
      if (fkgs[i].id !== nextFKGs[i].id) {
        return true;
      }
    }

    return false;
  }

  render() {
    console.log("list was rendered");
    const { fkgs, ItemComponent } = this.props;
    return (
      <div>
        {fkgs.map((fkg) => <ItemComponent key={fkg.id} fkg={fkg} />)}
      </div>
    );
  }
}

export default withLoading(FKGList);
