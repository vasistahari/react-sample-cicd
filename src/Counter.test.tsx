import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
  test("renders with initial count 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("0");
  });

  test("increments when +1 button clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const inc = screen.getByRole("button", { name: /increment/i });
    await user.click(inc);
    expect(screen.getByTestId("count-value")).toHaveTextContent("1");
  });

  test("decrements when -1 button clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const inc = screen.getByRole("button", { name: /increment/i });
    const dec = screen.getByRole("button", { name: /decrement/i });

    // increment twice then decrement once -> ends at 1
    await user.click(inc);
    await user.click(inc);
    await user.click(dec);

    expect(screen.getByTestId("count-value")).toHaveTextContent("1");
  });

  test("reset button sets count back to 0", async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const inc = screen.getByRole("button", { name: /increment/i });
    const reset = screen.getByRole("button", { name: /reset/i });

    await user.click(inc);
    await user.click(inc);
    expect(screen.getByTestId("count-value")).toHaveTextContent("2");

    await user.click(reset);
    expect(screen.getByTestId("count-value")).toHaveTextContent("0");
  });
});
