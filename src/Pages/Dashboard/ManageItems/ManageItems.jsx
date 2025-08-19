import { FaEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import CardHeading from "../../Shared/CardHeading/CardHeading";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menuData, , refetch] = useMenu();
    const axiosDeleteSecure = useAxiosSecure();


    const handleDelete = (data) => {
        // console.log(data)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const resDelete = await axiosDeleteSecure.delete(`/menu/${data._id}`);
                if (resDelete.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }

            }
        });

    }
    return (
        <div>
            <section>
                <CardHeading
                    title='Hurry Up!'
                    heading='Manage all items'
                />
            </section>

            <section className="mt-10">
                <h2 className="uppercase text-3xl font-medium pb-4">Total items: {menuData.length}</h2>
                <div className="overflow-x-auto rounded-2xl">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#d1a05b]">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                menuData.map((data, index) =>
                                    <tr className="hover:bg-gray-200 " key={data._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={data.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {data.name}
                                        </td>
                                        <td>{data.price}</td>
                                        <th>
                                            <Link to={`/dashboard/updateItem/${data._id}`} className="btn bg-[#d1a05b] text-white">
                                                <FaEdit size={24} />
                                            </Link>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDelete(data)} className="btn bg-[#b91c1c] text-white">
                                                <RiDeleteBin5Line size={26} />
                                            </button>
                                        </th>

                                    </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </section>
        </div>
    );
};

export default ManageItems;