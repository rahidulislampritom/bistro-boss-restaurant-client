import { Parallax, Background } from 'react-parallax';


const Cover = ({ img, heading,title }) => {
    return (


        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div>
                <div className="hero h-[38rem]">
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                            <p className="mb-5"> {title} </p>
                           
                        </div>
                    </div>
                </div>

            </div>
        </Parallax>
    );
};

export default Cover;