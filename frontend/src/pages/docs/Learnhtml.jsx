import React from 'react'
import Htmlcontents from '../../components/Htmlcontents';
import WebDevbar from '../../components/WebDevbar';
import Navbar2 from '../../components/Navbar2';

export const Learnhtml = () => {
  return (
    <div>
      <div style={{ justifyContent: 'center', position: "fixed", top: 70, display: 'flex', width: "100%" }}><WebDevbar /></div>
      <div style={{ backgroundColor: "#000000ff", width: "100%", overflowY: "auto", paddingTop: '1.5em'}}>
        <Htmlcontents />
      </div>
    </div>

  )
}

export default Learnhtml;