import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NextPage } from "next";

const App: NextPage = () => {
  const { user } = useUser();
  
  return (
    <>
      <h1>App</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired();

export default App;