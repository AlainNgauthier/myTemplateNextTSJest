import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Project starter to work with TypeScript, React, NextJS and Styled-Components/i })
    ).toBeInTheDocument()

  //   expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
