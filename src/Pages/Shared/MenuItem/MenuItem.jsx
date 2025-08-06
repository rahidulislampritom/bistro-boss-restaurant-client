const MenuItem = ({ data }) => {
    const { name, recipe, image } = data;
    return (
        <div className="flex gap-8">
            <div className="w-32">
                <img  className="w-20 h-20 bg-gray-300 rounded-full rounded-tl-none" src={image} alt="" />
            </div>
            <div>
                <h2 className="text-xl text-[#151515] my-2">{name}---------------</h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-xl text-[#BB8506]">$14.5</p>
        </div>
    );
};

export default MenuItem;