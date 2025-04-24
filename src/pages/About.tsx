import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">
        <button style={{ padding: '8px 16px', marginTop: '10px' }}>Back to Home</button>
      </Link>
    </div>
  );
};

export default About;
