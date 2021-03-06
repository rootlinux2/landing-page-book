import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from './Image';

configure({ adapter: new Adapter() });

describe('Image', () => {
  let props;
  let mounted;
  const image = () => {
    if (!mounted) {
      mounted = shallow(<Image {...props} />);
    }
    return mounted;
  };
  describe('Image', () => {
    beforeEach(() => {
      props = {
        alt: 'This is an image',
        src: 'logo.png'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Image {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = image().find('img');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
