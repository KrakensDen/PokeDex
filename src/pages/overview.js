import {
  useSession,
  signIn,
  signOut,
  getCsrfToken,
  getSession,
} from "next-auth/react";
import Image from "next/image";

export default function CamperVanPage() {
  const { data: session, status } = useSession();
  const userEmail = session?.user.email;

  async function clickHandler() {
    const session = await getSession();
    console.log(session);
  }

  async function csrfToken() {
    const csrfToken = await getCsrfToken();
    console.log(csrfToken);
    /* ... */
  }

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "authenticated") {
    return (
        <div>
            <button onClick={clickHandler}>getSession</button>
            <button onClick={csrfToken}>csrf Token</button>

            <div style={{display: "flex"}}>
                {session.user.image && (
                    <Image
                        style={{
                            borderRadius: 50 + "%",
                        }}
                        height={40}
                        width={40}
                        src={session.user.image}
                        alt={`${session.user.name} Profile Picture`}
                    />
                )}
                <p>Signed in as {userEmail}</p>
            </div>
            <button onClick={() => signOut()}>Sign out</button>
            <img
                alt={"sign-out"}
                src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png"
            />
        </div>
    );
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
