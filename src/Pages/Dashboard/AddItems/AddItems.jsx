import { useForm } from "react-hook-form";
import CardHeading from "../../Shared/CardHeading/CardHeading";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItems = () => {

    const { register, handleSubmit } = useForm();
    const axiosImagePublic = useAxiosPublic();
    const axiosFormDataSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosImagePublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        });

        console.log(res.data)
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipeDetails,
                image: res.data.data.display_url,
                Category: data.category,
                price: data.price
            }
            const menuRes = await axiosFormDataSecure.post('/menu', menuItem)
            // console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                 toast.success(`${data.name} is added to the menu`)
            }
        }

    }

    return (
        <div>
            <section>
                <CardHeading
                    title='Whats new?'
                    heading='Add an item'
                />
            </section>
            <section className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* recipe name  */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe name*</legend>
                        <input {...register('name', { required: true })} type="text" className="input w-full focus:outline-0" placeholder="Recipe name" />
                    </fieldset>
                    <div className="flex gap-6">
                        {/* category items  */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Category*</legend>
                            <select {...register('category', { required: true })} defaultValue="Pick a color" className="select focus:outline-0 w-full">
                                <option disabled={true}>Pick a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soups">Soups</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>

                            </select>
                        </fieldset>
                        {/* price */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Price*</legend>
                            <input {...register('price', { required: true })} type="number" className="input focus:outline-0 w-full" placeholder="Price" />
                        </fieldset>
                    </div>

                    {/* recipe details*/}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">RecipeDetails*</legend>
                        <textarea {...register('recipeDetails', { required: true })} className="textarea w-full focus:outline-0" rows='8' placeholder="Recipe Details"></textarea>
                    </fieldset>

                    {/* image file submit  */}
                    <fieldset className="fieldset w-full">
                        <input {...register('image', { required: true })} type="file" className="file-input focus:outline-0" />
                    </fieldset>

                    {/* button*/}
                    <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
                        Add Item <FaUtensils />
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddItems;