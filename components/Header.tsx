import { checkUser } from "@/lib/CheckUser";
import {
  Show,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Header = async () => {
  return (
    <nav className="navbar ">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <div>
          <Show when="signed-out">
            <SignInButton />

            <SignUpButton />
          </Show>

          <Show when="signed-in">
            {/* <UserButton  /> */}

            <SignOutButton>
         logout
            </SignOutButton>
          </Show>
        </div>
      </div>
    </nav>
  );
};

export default Header;
