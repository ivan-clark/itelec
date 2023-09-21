const Home = () => {
  const gradientBackground = {
    background: 'linear-gradient(to bottom, #66b3ff, #3366ff)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={gradientBackground}>
      <h1>This is home</h1>
    </div>
  );
};

export default Home;
