import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import ParkingSpaces from "../Pages/ParkingSpaces";

// const value:any={}
// beforeAll(()=>{
//     const mockNevigate=jest.fn()
//     jest.mock("react-router-dom",()=>({
//         ...jest.requireActual('react-router-dom'),
//         useNavigate:()=>mockNevigate(),
//     }))
// })



it("check btn", () => {
    render(<ParkingSpaces />)
    const buttonElement = screen.getByRole("button");
    // userEvent.click(buttonElement)
    expect(buttonElement).toBeInTheDocument
})


