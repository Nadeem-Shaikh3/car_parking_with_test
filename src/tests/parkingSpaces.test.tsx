import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { BrowserRouter,MemoryRouter, useNavigate } from "react-router-dom";
import ParkingSpaces from "../Pages/ParkingSpaces";


const value:any={}
beforeAll(()=>{
    const mockNevigate=jest.fn()
    jest.mock("react-router-dom",()=>({
        ...jest.requireActual('react-router-dom'),
        useNavigate:()=>mockNevigate(),
    }))
})

test("it should render parking spaces",()=>{
    render (<MemoryRouter>
    <ParkingSpaces/>
    </MemoryRouter>)
    const parkingslots=screen.getByTestId('parking-space')
    expect(parkingslots).toBeInTheDocument()
})
it("it should render button",()=>{

    render(<MemoryRouter>
    <ParkingSpaces/>
    </MemoryRouter>)
    const buttonElement = screen.getByTestId("paybtn");
    
    expect(buttonElement).toBeInTheDocument()
    
})


