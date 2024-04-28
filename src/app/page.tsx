import ButtonAppBar from './ui/ButtonAppBar';
import LoginForm from './ui/form/LoginForm';
import SignUpForm from './ui/form/SignUpForm';

//import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <ButtonAppBar />
      <LoginForm />
      {/* <SignUpForm /> */}
    </main>
  );
}
