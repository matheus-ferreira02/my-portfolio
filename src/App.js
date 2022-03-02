import './App.css';

function App() {
  const alterar = () => {
    document.body.classList.toggle('dark-theme');
  }

  return (
    <div>
      <header>oidddddddddd</header>
      <p className="selected">ola</p>
      <p>ola</p>
      <p>ola</p>
      <p>ola</p>
      <p>ola</p>

      <button onClick={ () => alterar() }>alterar</button>
    </div>  
  );
}

export default App;
