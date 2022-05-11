import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 center ">
        This Magic rain will detect faces in your pictures. Git it a try.
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 ">
          <input className="f4 pa3 w-70" type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
