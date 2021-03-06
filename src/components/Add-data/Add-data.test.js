import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddData from './Add-data'

configure({adapter: new Adapter()});  

describe(`AddData component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <AddData />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders AddData by default', () => {
    const wrapper = shallow(<AddData />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})