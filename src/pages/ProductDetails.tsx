import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../redux/api/baseApi";

const ProductDetails = () => {
    const {id} = useParams()
    console.log(id);
    const {data, isLoading, isError} = useGetProductDetailsQuery(id)
    console.log(data, isError, isLoading);
    return (
        <div>
            <h2>this is product</h2>
        </div>
    );
};

export default ProductDetails;