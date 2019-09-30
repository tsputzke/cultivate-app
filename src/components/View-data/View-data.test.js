import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import ViewData from './View-data'

configure({adapter: new Adapter()});  

describe(`ViewData component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <ViewData />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders ViewData by default', () => {
    const wrapper = shallow(<ViewData />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})