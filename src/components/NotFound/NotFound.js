import './NotFound.css';
import { useNavigate } from "react-router-dom";


function NotFound() {

  const navigate = useNavigate();
  return (
    <div className="not-found">
      <article className="not-found__article">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </article>
      <button type="button" className="not-found__button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default NotFound;