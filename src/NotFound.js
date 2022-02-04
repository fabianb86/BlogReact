// 404 Page: When the user goes to a page that is not exist

// 01. Set the 404 component
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to='/'>Back to the Homepage...</Link>
    </div>
  );
}

export default NotFound;