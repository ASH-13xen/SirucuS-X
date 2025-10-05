import React from 'react'
import WebDevbar from '../../components/WebDevbar';
import Jscontent from '../../components/Jscontent';
const LearnJs = () => {
  return (
    <div>
      <div style={{ justifyContent: 'center', position: "fixed", top: 70, display: 'flex', width: "100%" }}><WebDevbar /></div>
      <div style={{ backgroundColor: "#000000ff", width: "100%", overflowY: "auto", paddingTop: '1.5em'}}>
        <Jscontent />
      </div>
    </div>
  )
}

export default LearnJs;
