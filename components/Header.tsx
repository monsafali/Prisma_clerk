import { checkUser } from "@/lib/CheckUser";
import { Show, SignInButton,  SignUpButton, UserButton } from "@clerk/nextjs";


const Header = async () => {
    const user = await checkUser();
    return (
      <nav className="navbar ">
        <div className="navbar-container" >
          <h2>Expense Tracker</h2>
          <div>
            <Show when="signed-out">
              <SignInButton />

              <SignUpButton />
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
            

            
      </nav>
    );
};

export default Header;





// components/Header.tsx
// import AuthButtons from "./AuthButtons";

// const Header = () => {
//   return (
//     <nav className="flex justify-between p-4 border">
//       <h1 className="font-bold">My App</h1>
//       <AuthButtons />
//     </nav>
//   );
// };

// export default Header;