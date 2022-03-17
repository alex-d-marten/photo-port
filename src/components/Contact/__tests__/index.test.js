import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>)
        expect(asFragment()).toMatchSnapshot();
    })

    it('check Contact me', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })

    it('check button text', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('buttonSubmit')).toHaveTextContent('Submit');
    })
})