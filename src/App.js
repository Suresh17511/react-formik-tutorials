import './App.css';

import {theme, ThemeProvider} from '@chakra-ui/react';
import EnrollmentForm from './components/sample-forms/EnrollmentForm';
import RegistrationForm from './components/sample-forms/RegistrationForm';
import LoginForm from './components/sample-forms/LoginForm';
import YoutubeForm from './components/sample-forms/YouTubeForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <YoutubeForm /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        <EnrollmentForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
