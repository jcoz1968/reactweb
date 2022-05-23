import { useParams } from "react-router";
import ApiStatus from "../ApiStatus";
import useFetchHouses, { useFetchHouse, useUpdateHouse } from "../hooks/HouseHooks";
import { House } from "../types/house";
import ValidationSummary from "../ValidationSummary";
import HouseForm from "./HouseForm";

const HouseEdit = () => {
    const { id } = useParams();
    if(!id) {
        throw Error("Need a house id");
    }
    const houseId = parseInt(id);

    const { data, status, isSuccess } = useFetchHouse(houseId);
    const updateHouseMutation = useUpdateHouse();

    if(!isSuccess) {
        return <ApiStatus status={status} />
    }

    return (
        <>
            { updateHouseMutation.isError && (
                <ValidationSummary error={updateHouseMutation.error} />
            )}        
            <HouseForm 
                house={data} 
                submitted={(h) => updateHouseMutation.mutate(h)} 
            />
        </>
    );
}

export default HouseEdit;