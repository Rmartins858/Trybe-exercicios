
const tarefas = ['Estudar React' , 'Dormir com React', 'Comer React', 'Beber React']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>
      {tarefas.map((i) => Task(i))}
    </ol>
  );
}

export default App;
