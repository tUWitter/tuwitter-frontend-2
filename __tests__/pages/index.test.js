import React from "react";
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { useRouter } from 'next/router';
import Header from "@/components/layout/Header";


jest.mock('next/router', () => require('next-router-mock'));


describe('Home', () => {
  it('mocks the useRouter hook', async () => {
    // Set the initial url:
    
    // Render the component:
    render(<Header  />);
    expect
  });
});