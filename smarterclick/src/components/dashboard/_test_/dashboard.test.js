import React from 'react';
import { ReactDOM,render } from 'react-dom';
import Dashboard from '../';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
describe('test Dashboard', () => {
    
    const cols = [
        "Dashboard","User Impressions", "Overlays shown", "Overlays clicked", "Revenue(in £GBP)"
     ];

    it('table dashboard', () => {
        const wrapper = shallow(<Dashboard />);
        const table = wrapper.find('#tableid');

        const thead = table.find('thead');
        expect(thead).toHaveLength(1);
        
        const headers = thead.find('th');
        expect(headers).toHaveLength(5);

        headers.forEach((th, idx) => {
        expect(th.text()).toEqual(cols[idx]);
        });
    });
});