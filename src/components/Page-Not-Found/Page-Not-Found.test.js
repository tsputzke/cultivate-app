import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import PageNotFound from './Page-Not-Found'

configure({adapter: new Adapter()});  

describe(`PageNotFound component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders PageNotFound by default', () => {
    const wrapper = shallow(<PageNotFound />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})