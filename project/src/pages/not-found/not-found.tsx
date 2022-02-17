import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';

function NotFound() {
  const pageStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px',
    backgroundColor: '#f5f5f5',
  };

  return (
    <main
      className="page__main"
      style={pageStyles}
    >
      <h1>404 - Страница не найдена</h1>
      <Link to="/">
        На главную
      </Link>
    </main>
  );
}

export default NotFound;
