import MainLayout from "./components/MainLayout/MainLayout";
import Title from "./components/Title/Title";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <MainLayout>
      <Title />
      <TodoList />
    </MainLayout>
  );
};

export default App;
