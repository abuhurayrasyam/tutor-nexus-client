import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const UserAvatarTooltip = () => {

    const {user} = useContext(AuthContext);

    const [showTooltip, setShowTooltip] = useState(false);

    const toggleTooltip = (e) => {
        e.stopPropagation();
        setShowTooltip(prev => !prev);
    };

    useEffect(() => {
        const hideTooltip = () => setShowTooltip(false);
        document.addEventListener('click', hideTooltip);
        return () => document.removeEventListener('click', hideTooltip);
    }, []);

    return (
        <div>
            {
                user && (
                    <>
                        <div onClick={toggleTooltip} data-tooltip-id="user-tooltip" data-tooltip-content={user.displayName} className="btn btn-ghost btn-circle avatar cursor-pointer">
                            <div className="w-8 md:w-12 rounded-full">
                                <img alt={user.displayName} src={user.photoURL} />
                            </div>
                        </div>

                        <Tooltip
                            id="user-tooltip"
                            open={showTooltip}
                            place="bottom"
                            events={['click']}
                            eventsOff={['click']}
                            clickable
                        />
                    </>
                )
            }
        </div>
    );
};

export default UserAvatarTooltip;