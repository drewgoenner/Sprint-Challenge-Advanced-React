import React from 'react';
import NavBar from './NavBar';
import { render } from '@testing-library/react'

test("This should verify that Women's World Cup renders in the navbar", () => {
    const { getByText } = render(<NavBar />)
    getByText(/women/i)
    getByText(/world/i)
    getByText(/cup/i)
    getByText(/players/i)

})