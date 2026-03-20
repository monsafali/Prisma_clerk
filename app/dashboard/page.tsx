import { checkUser } from "@/lib/CheckUser";



export default async function Dashboard() {
  const user = await checkUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user?.name}</p>
    </div>
  );
}
