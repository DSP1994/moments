import styles from "./App.module.css"
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <h1>Home Page</h1>
        <h1>Sign In</h1>
      </Container>
    </div>
  );
}

export default App;