import './middle.css'
import editor from '../../images/illustration-editor-desktop.svg';
import phones from '../../images/illustration-phones.svg'
import laptop from '../../images/illustration-laptop-desktop.svg'
const Middle = () => {
    return (
        <div className="middleContainer">

            <h1 className="headingMiddle">Designed for the future</h1>
            <div className="leftheadingmiddle">
                <div className="leftmiddleheadingone">
                    <h3 className='leftmiddle'>Introducing an extensible editor</h3>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.</p>
                    <p>Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
                </div>
                <div className="leftmiddleheadingone">
                    <h3 className='leftmiddle'>Introducing an extensible editor</h3>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.</p>
                    <p> Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
                </div>
            </div>
            <div className="rightmiddle">
                <img src={editor} alt="" className="right" />
            </div>
            <div className="purple">
                <div className="purpletext">
                    <div className="headingmiddletwo">State of the Art infrstructure</div>
                    <p className="middleparatwo">A paragraph is a series of sentences that are organized and coherent, 
                    and are all related to a single topic.
                    </p>
                </div>

                <img src={phones} alt="" className="phones" />
            </div>
            <div className="middlethree">
                <img src={laptop} alt="" className="latop" />
                <div className="rightmiddleheadingone">
                    <h3 className='leftmiddle'>Introducing an extensible editor</h3>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.</p>
                    <p>Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
                </div>
                <div className="rightmiddleheadingone">
                    <h3 className='leftmiddle'>Introducing an extensible editor</h3>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.</p>
                    <p> Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
                </div>

            </div>
        </div>
    )
}

export default Middle