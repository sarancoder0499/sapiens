import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddUserPage from "../../pages/user/AddUserPage";

const queryClient = new QueryClient();

describe("Add User Page", () => {
  it("should render correct error message when no data provided", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AddUserPage />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const buttonElement = screen.getByText("Add User");
    fireEvent.click(buttonElement);
    await waitFor(() => {
      expect(screen.getByText("First name is required")).toBeInTheDocument();
      expect(screen.getByText("Last name is required")).toBeInTheDocument();
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    });
  });

  it("should render error message when firstname is greater than 100", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AddUserPage />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const firstNameInputBox = screen.getByPlaceholderText("John");
    const longText = "a".repeat(101); // 101 characters
    fireEvent.change(firstNameInputBox, { target: { value: longText } });

    const buttonElement = screen.getByText("Add User");
    fireEvent.click(buttonElement);
    await waitFor(() => {
      expect(
        screen.getByText("First name cannot exceed 100 characters")
      ).toBeInTheDocument();
    });
  });

  it("should render error message when lastname is greater than 100", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AddUserPage />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const lastNameInputBox = screen.getByPlaceholderText("Brito");
    const longText = "a".repeat(101); // 101 characters
    fireEvent.change(lastNameInputBox, { target: { value: longText } });

    const buttonElement = screen.getByText("Add User");
    fireEvent.click(buttonElement);
    await waitFor(() => {
      expect(
        screen.getByText("Last name cannot exceed 100 characters")
      ).toBeInTheDocument();
    });
  });

  it("should render error message when email is not valid", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AddUserPage />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const emailInputBox = screen.getByPlaceholderText("john@gmail.com");
    const longText = "testgmail.com"; // 101 characters
    fireEvent.change(emailInputBox, { target: { value: longText } });

    const buttonElement = screen.getByText("Add User");
    fireEvent.click(buttonElement);
    await waitFor(() => {
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    });
  });
});
