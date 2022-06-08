import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ParkingSpaceContex = createContext({})

const ParkingSpacesContext: React.FC<any> = (props: any) => {
    const [spaces, setSpaces] = useState("");
    const [selectedSpaces, setSelecetedSpaces] = useState([]);
    const navigate = useNavigate();
    const updateSpaces = (value: any) => {
        setSpaces(value)
    }
    console.log(selectedSpaces);
    const navigateToParkingSlot = () => {
        let newSelectedSpaces: any = [];
        for (let index = 0; index < Number(spaces); index++) {
            let object = {
                key: Math.random(),
                slot_id: index,
                title: `Parking Slot - No ${index + 1}`,
                carNumber: "",
                carParkingDate: "",
                carParkingTime: "",
                carExistTime: "",
                seleceted: false
            }
            newSelectedSpaces = [...newSelectedSpaces, object]
        }
        setSelecetedSpaces(newSelectedSpaces)
       

            navigate("/parking-spaces")
 
    }
    console.log("first",spaces)

    const updateSelectedSpace = (updatedValue: any) => {
        setSelecetedSpaces(updatedValue)
    }

    const value = {
        spaces, updateSpaces, navigateToParkingSlot, selectedSpaces, updateSelectedSpace
    }

    return (
        <>
            <ParkingSpaceContex.Provider value={value}>
                {props.children}
            </ParkingSpaceContex.Provider>
        </>
    )
}
export default ParkingSpacesContext;