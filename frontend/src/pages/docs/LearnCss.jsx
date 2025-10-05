import React from 'react'
import WebDevbar from '../../components/WebDevbar';
import Csscontents from '../../components/Csscontents';

const LearnCss = () => {
  return (
    <div>
      <div style={{ justifyContent: 'center', position: "fixed", top: 70, display: 'flex', width: "100%" }}><WebDevbar /></div>
      <div style={{ backgroundColor: "#000000ff", width: "100%", overflowY: "auto", paddingTop: '1.5em'}}>
        <Csscontents />
      </div>
    </div>
  )
}

export default LearnCss;