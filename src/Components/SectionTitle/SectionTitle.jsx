import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div>
            <div className='text-center w-4/12 mx-auto'>
                <p className='text-xl text-[#D99904] border-b-3 border-[#E8E8E8] pb-4 mb-6'>---             {subHeading}---</p>
                <h3 className='text-4xl text-[#151515] border-b-3 border-[#E8E8E8] pb-6 mb-12 uppercase'>{heading}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;