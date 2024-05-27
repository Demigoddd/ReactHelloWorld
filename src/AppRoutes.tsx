import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import { NotFoundPage } from './components/notFoundPage/NotFoundPage';
import { Init } from './components/projects/init/Init';
import { Counter } from './components/projects/counter/Counter';
import { LazyLoading } from './components/projects/lazyLoading/LazyLoading';
import { Modal } from './components/projects/modal/Modal';
import { Quiz } from './components/projects/quiz/Quiz';
import { UserList } from './components/projects/userList/UserList';
import { ValueConverter } from './components/projects/valueConverter/ValueConverter';
import { Gallery } from './components/projects/gallery/Gallery';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Init />} />
          <Route path="counter" element={<Counter />} />
          <Route path="lazy-loading" element={<LazyLoading />} />
          <Route path="modal" element={<Modal />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="value-converter" element={<ValueConverter />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default AppRoutes;
