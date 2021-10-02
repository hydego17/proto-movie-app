import * as React from 'react';
import { render } from '@testing-library/react';

import { HomePage } from '..';

describe('<HomePage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<HomePage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
