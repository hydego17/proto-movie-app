/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'styles/global';
import { Layout } from 'app/components';

import { AppRoutes } from './routes';

export function App() {
  const { i18n } = useTranslation();
  return (
    <Router>
      <GlobalStyle />
      <Helmet
        titleTemplate="%s - StockBit Movie"
        defaultTitle="Movie App"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Movie App application" />
      </Helmet>

      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}
