import React from "react";
import { render, screen } from '@testing-library/react';
import HomePage from "../../pages/index";
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe("Home", () => {
  it("should render the header", () => {
    const textToFind = "Home"

    render(<HomePage />);
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});