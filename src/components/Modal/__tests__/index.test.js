import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: "Park bench",
    category: "landscape",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        //baseline render component test
        render(<Modal 
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
    })
    //snapshot
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);

            expect(asFragment()).toMatchSnapshot();
        //arrange the snapshot and declare variables
        //assert the match
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        //arrange: render modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
            fireEvent.click(getByText('Close this modal'))
        //act: simulate click event
        //assert: expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})