import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Landing from './Landing'

configure({adapter: new Adapter()});  

describe(`Landing component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders Landing by default', () => {
    const wrapper = shallow(<Landing />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})