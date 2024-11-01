import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <main role="main" className="bg-light">
        <AppRouter data-testid="app-router" />
      </main>
    </div>
  );
}

export default App;
