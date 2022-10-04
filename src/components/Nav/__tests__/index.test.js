import React from 'react';
import { render, cleanup, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
afterEach(cleanup);
describe('Nav component', () => {
    //first test
    it('renders', () => {
        render(<Nav />);
    });

    //second test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });

    describe('emoji is visible', () => {
        it('inserts emoji into the h2', () => {
        render(<Nav />);
        const { getByText } = within(screen.getByText('📸'))
        getByText('📸');
        });
    })

    describe('links are visible', () => {
        it('inserts text into the links', () => {
          render(<Nav />);
          const { getByTestId } = within(screen.getByText('link'));
          getByTestId('Oh Snap!');
          getByTestId('About Me');
        });
      })
})