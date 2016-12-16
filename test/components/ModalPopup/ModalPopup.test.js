import React from 'react';
import _ from 'lodash';
import ModalPopup from '../../../src/components/ModalPopup/ModalPopup';
import WaveTable from '../../../src/components/WaveTable/WaveTable';
import WaveForm from '../../../src/components/WaveForm/WaveForm';
import { Header } from 'semantic-ui-react';
import {render, shallow, mount} from 'enzyme';
import {expect} from 'chai';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme()) // Note the invocation at the end

const nativeEvent = { nativeEvent: { stopImmediatePropagation: _.noop } }


describe('ModalPopup', () => {

  it('New Wave Button Exists', () => {
    const wrapper = render(<ModalPopup />);
    expect(wrapper.find('.newWaveButton')).to.exist.and.have.length(1);
  });

  it('New Wave Button contains Text', () => {
    const wrapper = render(<ModalPopup />);
    expect(wrapper.find('.newWaveButton')).to.have.text('New Wave');
  });

   it('Renders a <Header /> component', () => {
    const wrapper = shallow(<ModalPopup />);
    expect(wrapper.find(Header)).to.have.length(1);
  });

   it('Renders a <WaveTable /> component', () => {
    const wrapper = shallow(<ModalPopup />);
    expect(wrapper.find(WaveTable)).to.have.length(1);
  });

  it('Renders a <WaveForm /> component', () => {
    const wrapper = shallow(<ModalPopup />);
    expect(wrapper.find(WaveForm)).to.have.length(1);
  });

  it('Modal should be closed initially', () => {
    const wrapper = shallow(<ModalPopup />);
    expect(wrapper.state().modalOpen).to.equal(false);
  });

  it('Submitting a New Wave causes the Modal to close', () => {
    const wrapper = shallow(<ModalPopup />);
    wrapper.find('.submitNewWave').simulate('click', nativeEvent);
    expect(wrapper.state().modalOpen).to.equal(false);
  });

  it('Cancelling a New Wave causes the Modal to close', () => {
    const wrapper = shallow(<ModalPopup />);
    wrapper.find('.cancelNewWave').simulate('click', nativeEvent);
    expect(wrapper.state().modalOpen).to.equal(false);
  });

  it('Clicking Modal button should set its state to Open', () => {
    const wrapper = mount(<ModalPopup />);
    wrapper.find('.newWaveButton').simulate('click', nativeEvent);
    expect(wrapper.state().modalOpen).to.equal(true);
  });
    
});