import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "../Pages/HomePage";

it("snapshot test", () => {
    render(<HomePage />)
    expect(screen).toMatchSnapshot()

})

it("check btn", () => {
    render(<HomePage />)
    const buttonElement = screen.getByRole("button");
    // userEvent.click(buttonElement)
    expect(buttonElement).toBeInTheDocument

});
it("submit btn should disabled", () => {
    render(<HomePage />)
    const textfield: any = screen.getByTestId('home').querySelector('input')
    const submitbutton = screen.getByRole('button', { name: /CREATE SPACES/i })
    expect(textfield.value).toBe("")
    expect(submitbutton).toBeDisabled()
})
it("handling textfield function",() => {
    render(<HomePage/>)
    const textfield: any = screen.getByTestId('home')
        fireEvent.change(textfield, { target: { value: "hi" } })
        expect(textfield.value).toBe("hi")
    })


