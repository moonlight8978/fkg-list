import React from 'react';

class ListHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchKeywordChange = this.handleSearchKeywordChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleRevertSortChange = this.handleRevertSortChange.bind(this);
  }

  handleSearchKeywordChange(event) {
    this.props.onSearchKeywordChange(event.target.value);
  }

  handleSortByChange(event) {
    this.props.onSortByChange(event.target.value);
  }

  handleRevertSortChange(event) {
    this.props.onRevertSortChange(event.target.checked);
  }

  render() {
    const { searchKeyword, sortBy, reverseSort } = this.props;

    return (
      <div className="girl-list-header">
        <div>
          名前/戦闘スキル名
          <input
            value={searchKeyword}
            onChange={this.handleSearchKeywordChange}
          />
        </div>

        <div>
          <input
            type="radio"
            value="id"
            checked={sortBy === 'id'}
            onChange={this.handleSortByChange}
          />ID<br />

          <input
            type="radio"
            value="originalStats.hitPoint"
            checked={sortBy === 'originalStats.hitPoint'}
            onChange={this.handleSortByChange}
          />Hit Point<br />

          <input
            type="radio"
            value="originalStats.attack"
            checked={sortBy === 'originalStats.attack'}
            onChange={this.handleSortByChange}
          />Attack<br />

          <input
            type="radio"
            value="originalStats.defense"
            checked={sortBy === 'originalStats.defense'}
            onChange={this.handleSortByChange}
          />Defense<br />

          <input
            type="radio"
            value="bonusStats.hitPoint"
            checked={sortBy === 'bonusStats.hitPoint'}
            onChange={this.handleSortByChange}
          />Bonus Hit Point<br />

          <input
            type="radio"
            value="bonusStats.attack"
            checked={sortBy === 'bonusStats.attack'}
            onChange={this.handleSortByChange}
          />Bonus Attack<br />

          <input
            type="radio"
            value="bonusStats.defense"
            checked={sortBy === 'bonusStats.defense'}
            onChange={this.handleSortByChange}
          />Bonus Defense<br />

          <input
            type="radio"
            value="totalStats.hitPoint"
            checked={sortBy === 'totalStats.hitPoint'}
            onChange={this.handleSortByChange}
          />Total Hit Point<br />

          <input
            type="radio"
            value="totalStats.attack"
            checked={sortBy === 'totalStats.attack'}
            onChange={this.handleSortByChange}
          />Total Attack<br />

          <input
            type="radio"
            value="totalStats.defense"
            checked={sortBy === 'totalStats.defense'}
            onChange={this.handleSortByChange}
          />Total Defense<br />

          <input
            type="radio"
            value="allStats"
            checked={sortBy === 'allStats'}
            onChange={this.handleSortByChange}
          />All stats<br />

          <input
            type="radio"
            value="originalStats.speed"
            checked={sortBy === 'originalStats.speed'}
            onChange={this.handleSortByChange}
          />Speed<br />
        </div>

        <div>
          <input
            type="checkbox"
            checked={reverseSort}
            onChange={this.handleRevertSortChange}
          />Reverse sort
        </div>
      </div>
    );
  }
}

export default ListHeader;
