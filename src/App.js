import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from "./GlobalStyle";
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
AOS.init({
  offset: 0,
  delay: 50,
  duration: 1000,
})

export default App;