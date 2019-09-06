import React from 'react';
import PlayerList from './PlayerList';
import { render } from '@testing-library/react'

test('Should have text (player name)', async () => {
    const {findByText} = await render(<PlayerList />)
    findByText(/alex morgan/i)
    findByText(/abby dahlkemper/i)
})