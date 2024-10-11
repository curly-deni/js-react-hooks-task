import cn from 'classnames';
import React, {useState} from 'react';

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""

const BtnGroup = () => {

    const [activeSide, setSide] = useState(null);

    const renderButton = (side) => {
        let classNames = cn(
            'btn', 'btn-secondary', side,
            {
                active: activeSide === side
            }
        )
        return <button onClick={() => setSide(side)} type="button"
                       className={classNames}>{capitalize(side)}</button>;
    }

    // BEGIN (write your solution here)
    return <div className="btn-group" role="group">
        {renderButton('left')}
        {renderButton('right')}
    </div>
    // END
};

export default BtnGroup;