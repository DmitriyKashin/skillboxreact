/**
 * @jest-environment jsdom
 */
// for js dom. js dom is slower. use only when DOM API is needed
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Dropdown } from "../Dropdown";
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() })

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })
  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
    expect(wrapper).toMatchSnapshot();
  })
});