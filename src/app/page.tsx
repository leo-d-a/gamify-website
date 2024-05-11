import ButtonAppBar from './ui/ButtonAppBar';
import LoginForm from './ui/form/LoginForm';
import SignUpForm from './ui/form/SignUpForm';

//import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <ButtonAppBar />
      {/* Note leo : Should have a different architecture w/ unique pages but simple base here // TO-DO later  */}
      <LoginForm />
      {/* <SignUpForm /> */}
    </main>
  );
}
