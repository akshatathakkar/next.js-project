import SigninButton from './component/Signinbtn';
import Accordion from './component/accordion'
import { getSession } from 'next-auth/react';


export default async function Home(context :any) {
   const { req } = context;
   const session = "Name :Akshata Thakkar";
    const styles = {
      fontFamily: "Roboto",
      width: "500px",
       border: "1px solid rgb(5 5 6);",
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
          <div style={styles}>
         
          <SigninButton/>
    </div>
      }
    </main>
  )
}
