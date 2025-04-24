import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">
        <button style={{ padding: '8px 16px', marginTop: '10px' }}>Go to About</button>
      </Link>
    </div>
  );
};

export default Home;
