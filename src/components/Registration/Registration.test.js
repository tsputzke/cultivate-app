import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Registration from './Registration'

configure({adapter: new Adapter()});  

describe(`Registration component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders Registration by default', () => {
    const wrapper = shallow(<Registration />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})