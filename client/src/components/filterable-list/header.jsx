import React from 'react'

import { AutoComplete } from '../../common/form'

function Header({ keyword, onSubmit, onValueChange, fkgNames }) {
  return (
    <div className="filterable-list_header">
      <form onSubmit={onSubmit}>
        <AutoComplete
          source={fkgNames}
          value={keyword}
          onChange={(value) => onValueChange('keyword', value)}
          placeholder="Enter keyword..."
        />

        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  )
}

export default Header
