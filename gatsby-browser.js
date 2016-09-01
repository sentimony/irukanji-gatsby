import ReactGA from 'react-ga';
ReactGA.initialize('UA-63646319-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
