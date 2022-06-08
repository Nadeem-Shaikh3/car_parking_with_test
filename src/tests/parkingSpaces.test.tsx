import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import ParkingSpaces from "../Pages/ParkingSpaces";

// npx jest --coverage
const value:any={}
beforeAll(()=>{
    const mockNevigate=jest.fn()
    jest.mock("react-router-dom",()=>({
        ...jest.requireActual('react-router-dom'),
        useNavigate:()=>mockNevigate(),
    }))
})

test("it should render parking spaces",()=>{
    render(<ParkingSpaces/>)
    const parkingslots=screen.getByTestId('parking-space')
    expect(parkingslots).toBeInTheDocument()
})
