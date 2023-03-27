import { Header } from '../components/Header';

const defaultStyles = { maxWidth: '1024px', margin: '0 auto' };

const PageLayout = ({ children, style, headerType = 'light' }) => {
  const containerStyle = {
    height: '100vh',
    ...(headerType === 'dark' && { backgroundColor: '#fff' }),
    ...(headerType === 'light' && {
      backgroundColor: '#063048',
      color: '#fff',
    }),
  };
  const _style = {
    ...defaultStyles,
    ...style,
  };
  return (
    <main style={containerStyle}>
      <Header color={headerType} />
      <div style={_style}>{children}</div>
    </main>
  );
};

export { PageLayout };
