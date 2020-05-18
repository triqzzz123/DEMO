import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
    return(
    <div>
    <p className='f3'>
      {'This magic brain will detect faces in your picture.Give it a try' } 
    </p>
    <div className="center">
    <div className="Form center br3 pa4 shadow-5">
    <input className="f4 center pa2 w-70 " type="text" onChange={onInputChange}/>
    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
    </div>
    </div>

 </div>
)

}

export default ImageLinkForm;