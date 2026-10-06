import {Link} from 'react-router';

function ErrorPage() {
  return (
    <div>
      <h1>Ah shit !</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Click here to return home !</Link>
    </div>
  );
}

export default ErrorPage;