import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);
describe('Nav component', () => {
    //first test
    it('renders', () => {
        render(<Nav 
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
        />);
    });

    //second test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    // describe('emoji is visible', () => {
    //     it('inserts emoji into the h2', () => {
    //     render(<Nav 
    //         categories={categories}
    //         setCurrentCategory={mockSetCurrentCategory}
    //         currentCategory={mockCurrentCategory}
    //         />);
    //     const { getByText } = within(screen.getByText('📸'))
    //     getByText('📸');
    //     });
    // })

    // describe('links are visible', () => {
    //     it('inserts text into the links', () => {
    //         render(<Nav 
    //             categories={categories}
    //             setCurrentCategory={mockSetCurrentCategory}
    //             currentCategory={mockCurrentCategory}
    //             />);
    //     });
    //   })
})