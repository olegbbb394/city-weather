import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CityWeather from '../src/pages/city-weather/index';

describe('CityWeather component', () => {
    it('renders the component', () => {
        render(<CityWeather />);

        const header = screen.getByRole('heading', { name: /City weather/i });
        expect(header).toBeInTheDocument();

        const select = screen.getByLabelText(/City/i);
        expect(select).toBeInTheDocument();

        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(4);
    });

    it('updates the weather when a city is selected', async () => {
        const { findByText } = render(<CityWeather />);

        const select = screen.getByLabelText(/City/i);
        userEvent.selectOptions(select, 'Kyiv');

        const loading = screen.getByLabelText(/loading/i);
        expect(loading).toBeInTheDocument();

        const temperature = await findByText(/Temperature:/i);
        expect(temperature).toBeInTheDocument();
    });
});
