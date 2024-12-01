
import Link from "next/link";
import LoginForm from "./Login/page";


export default function Home() {
  return (
    <div>
     <LoginForm />
     <Link href="/SignUpComponent">Login/SignUp</Link>
    </div>
  );
}
