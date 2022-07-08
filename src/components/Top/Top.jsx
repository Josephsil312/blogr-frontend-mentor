import Middle from '../middle/Middle'
import './top.css'
const Top = () => {
  return (
    <>
      <div className="topContainer">
        <div className="orange">
          <div className="topLeft">
            <div className="listL one">Blogr</div>
            <div className="listL">Product</div>
            <div className="listL">Company</div>
            <div className="listL">Contact</div>
          </div>
          <div className="topRight">
            <div className="listR">Login</div>
            <div className="listR sign">Signup</div>
          </div>
          <div className='Heading'>
            <h1 className="headingTop">A mordern publishing platform</h1>
            <h4 className="subheadingTop">Grow your audience and build your online brand</h4>
          </div>
          <div className="buttonTop">
            <button className='leftBtn'>Start for free</button>
            <button className='rightBtn'>Learn more</button>
          </div>
        </div>
      </div>
      {
        <Middle/>
      }
    </>
  )
}

export default Top