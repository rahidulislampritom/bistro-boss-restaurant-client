const CardHeading = ({ title, heading }) => {
    return (
        <div className="text-center space-y-3 mt-12">

            <h5 className="text-lg italic text-[#D1A054]">---{title}---</h5>
            <div className="border text-[#e8e8e8]"></div>
            <h2 className="text-4xl">{heading}</h2>
            <div className="border text-[#e8e8e8]"></div>

        </div>
    );
};

export default CardHeading;