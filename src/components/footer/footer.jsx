import React from 'react'

import './footer.scss'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="app-name">
          <strong>FKG List</strong> - A simple character
          list using <a href="http://reactjs.org/">React</a>
        </div>
        <div className="app-credits">
          <div>For issues and features, please mail me at moonlight8978@gmail.com</div>
          <div>
            Data:
            <a href="http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/">
              フラワーナイトガールwiki
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
