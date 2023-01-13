import {useSession, signIn, signOut} from "next-auth/react";

export default function CamperVanPage() {
  const {data: session, status} = useSession();
  const userEmail = session?.user.email;

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "authenticated") {
    console.log(session);
    return (
      <>
        <div style={{display: "flex"}}>
          {session?.user.image && (
            <img
              style={{
                width: 40 + "px",
                height: 40 + "px",
                borderRadius: 50 + "%",
              }}
              src={session?.user.image}
              alt={"user Image"}
            />
          )}
          <p>Signed in as {userEmail}</p>
        </div>
        <button onClick={() => signOut()}>Sign out</button>
        <img
          alt={"sign-out"}
          src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png"
        />
      </>
    );
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
