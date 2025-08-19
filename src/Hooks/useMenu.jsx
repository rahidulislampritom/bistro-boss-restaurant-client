import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {

    const axiosMenuDataPublic = useAxiosPublic();
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenuData(data);
    //             setLoading(false);
    //         })
    // }, [])

    // bikolpo and more useful 
    const { data: menuData = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosMenuDataPublic.get('/menu')
            return res.data
        }
    })

    return [menuData, loading, refetch]
}

export default useMenu;