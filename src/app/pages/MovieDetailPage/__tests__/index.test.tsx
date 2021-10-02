import * as React from 'react';
import { render } from '@testing-library/react';

import { MovieDetailPage } from '..';

describe('<MovieDetailPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MovieDetailPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
