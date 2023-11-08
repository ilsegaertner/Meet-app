// import { getEvents } from "../api";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test("renders numbers input", () => {
    const numbersInput = NumberOfEventsComponent.queryByRole("textbox");
    expect(numbersInput).toBeInTheDocument();
    expect(numbersInput).toHaveClass("event-numbers");
  });

  test("renders 32 as default value", () => {
    const numbersInput = NumberOfEventsComponent.queryByRole("textbox");
    expect(numbersInput.value).toBe("32");
  });

  test("updates the textboxes value when a user types in it", async () => {
    const user = userEvent.setup();
    const numbersInput = NumberOfEventsComponent.queryByRole("textbox");

    // Clear the input before typing
    user.clear(numbersInput);

    // Simulate the user typing a value
    // await user.type(numbersInput, "42");
    await user.type(numbersInput, "{backspace}{backspace}10");

    // Check if the input's value reflects the change
    expect(numbersInput.value).toBe("10");
  });

  test("prevents entering non-numeric numbers", () => {
    const user = userEvent.setup();
    const numbersInput = NumberOfEventsComponent.queryByRole("textbox");
    user.click(numbersInput);
    user.type(numbersInput, "abc123");
    expect(numbersInput.value).toBe("32");
  });

  test("limits input length to a max-value", async () => {
    const numbersInput = NumberOfEventsComponent.queryByRole("textbox");
    const user = userEvent.setup();
    await user.type(numbersInput, "12344");
    const inputValue = numbersInput.value;
    expect(inputValue).toHaveLength(3);
  });

  test("shows a placeholder when no input is visible", async () => {
    const numbersInput = NumberOfEventsComponent.queryByRole("textbox");
    const user = userEvent.setup();
    user.clear(numbersInput);
    expect(numbersInput.placeholder).toBe(
      "how many events do you want to see?"
    );
  });
});
