import '@testing-library/jest-dom'
import { render, act } from '@testing-library/react'
import Page from '@/app/page'
import AuthProvider from '@/app/component/authProvider';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: () => { },
    })
}));

const Fetch = global.fetch;

describe('Page', () => {

    afterEach(() => {
        global.fetch = Fetch;
    })
    it('renders', () => {
        render(
            <AuthProvider>
                <Page />
            </AuthProvider>
        )
    })
    // const heading = screen.getByRole('heading', { level: 2 })

    // expect(heading).toBeInTheDocument()
})