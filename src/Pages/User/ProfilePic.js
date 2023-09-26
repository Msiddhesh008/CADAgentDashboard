import React from 'react';

const ProfilePic = ({ data }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={data.profilePic} // Replace with the actual URL of the profile picture
                alt={data.name}
                style={{ width: '45px', height: '45px', borderRadius: '50%', marginRight: '10px' }}
            />
            {data.name}
        </div>
    );
};


export default ProfilePic