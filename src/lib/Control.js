import React from 'react';
import FaExpand from 'react-icons/lib/fa/expand';
import FaEye from 'react-icons/lib/fa/eye';
import FaFileText from 'react-icons/lib/fa/file-text';
import FaClone from 'react-icons/lib/fa/clone';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

import './Control.scss';

const Btn = ({ icon, click }) => (
  <div>
    <button onClick={ click }>
      {icon()}
    </button>
  </div>
);

const Rdo = ({value, name, checked, onChange, icon}) => (
  <div>
    <input
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label>
      {icon()}
    </label>
  </div>
);

export default ({ onFullScreen, onPreview, onPasteModeChange, pasteMode }) => (
  <div className="milk-buttons">
    <div className="milk-buttons-container">
      <div className="milk-buttons-slide">
        <Btn
          icon={FaExpand}
          click={ onFullScreen }
        />
        <Btn
          icon={FaEye}
          click={ onPreview }
        />
        <Rdo
          value="normal"
          name="mode"
          checked={!pasteMode}
          onChange={onPasteModeChange}
          icon={FaFileText}
        />
        <Rdo
          value="paste"
          name="mode"
          checked={pasteMode}
          onChange={onPasteModeChange}
          icon={FaClone}
        />
      </div>
      <div className="milk-buttons-drag">
        <div>
          <FaArrowDown />
        </div>
      </div>
    </div>
  </div>
);
