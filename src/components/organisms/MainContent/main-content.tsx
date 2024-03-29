import {
  MainContentContainer,
  MainContentWrapper,
} from './main-content.styled';
import { ItemsCompleted, ItemsDeleted, ItemsTodo } from './views';
import { Route, Routes } from 'react-router-dom';

export const MainContent = () => {
  return (
    <MainContentWrapper>
      <MainContentContainer>
        <Routes>
          <Route index element={<ItemsTodo />} />
          <Route path="deleted" element={<ItemsDeleted />} />
          <Route path="done" element={<ItemsCompleted />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
        {/* <ItemsTodo
          tasks={tasks}
          handleAddTaskModalClick={handleAddTaskModalClick}
          handleDoneButtonClick={handleDoneButtonClick}
          handleOnItemClick={handleOnItemClick}
          handleRemoveClick={handleRemoveClick}
        /> */}
      </MainContentContainer>
    </MainContentWrapper>
  );
};
