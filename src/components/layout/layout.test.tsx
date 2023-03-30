import { render } from '@testing-library/react';
import { Layout } from './layout';

describe('Layout', () => {
  it('renders header, main content and footer', () => {
    const { getByText } = render(
      <Layout>
        <p>Main content</p>
      </Layout>
    );
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Main content')).toBeInTheDocument();
    expect(getByText('Footer')).toBeInTheDocument();
  });
});