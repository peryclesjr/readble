import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Header from '../components/Header'

describe('Header Component', () => {
  it('should render Header Component', () => {
    expect(shallow(<Header />).contains(<b>Nossas Rotas Blog</b>)).toBe(true)
  })
  it('should render to static HTML', function() {
    expect(render(<Header />).text()).toEqual(
      'Nossas Rotas BlogWelcome to the blog of Ivo & Mari'
    )
  })
})
