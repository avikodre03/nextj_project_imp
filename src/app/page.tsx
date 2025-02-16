import { getSession } from "@/lib/cookies";
import Dashboard from "@/app/dashboard/page";
import SignIn from "@/app/login/page";

export default async function Home() {
  // const token = await getSession("jwtToken");

  // return token ? <Dashboard /> : <SignIn />;
  return  <Dashboard /> ;
}
