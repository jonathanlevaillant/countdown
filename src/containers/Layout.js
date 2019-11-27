import useRefreshTodoCountdowns from '../hooks/useRefreshTodoCountdowns';

const Layout = props => {
  const { children } = props;

  useRefreshTodoCountdowns();

  return children;
};

export default Layout;
