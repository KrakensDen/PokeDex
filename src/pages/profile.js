import React, { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import ProfileHeader from "../components/styled/blocks/ProfileHeader";
import AppLayout from "../layouts/AppLayout";
import axios from "axios";
import SettingModal from "../components/styled/blocks/SettingModal";

export async function getServerSideProps(ctx) {
  var results = [];
  // Check if we have a session

  try {
    //* Make a post request to our own internal API and send the user session data with it to grab all the events to that user
    const response = await axios.post(
      "http://localhost:3000/api/accountCreated",
      {
        session: await getSession(ctx),
      }
    );
    results = response.data;
  } catch (error) {
    console.error(error.response);
  }

  return {
    props: {
      data: results,
    },
  };
}

const Profile = ({ data }) => {
  const { data: session, status } = useSession();
  const userImage = session?.user.image;
  const userName = session?.user.name;
  const accountCreated = data.data[0].accountCreated;

  const [open, setOpen] = useState(true);

  const EditProfileHandler = () => {
    setOpen(!open);
  };

  return (
    <div>
      <SettingModal open={open} editingProfile={EditProfileHandler} />
      <ProfileHeader
        editingProfile={EditProfileHandler}
        userLvl={0.65}
        userImage={userImage}
        userName={userName}
        accountCreated={new Date(accountCreated).toDateString()}
      />
    </div>
  );
};

Profile.getLayout = function PageLayout(page) {
  return (
    <AppLayout headTitle={"PokeDex - Profile"} title={"Profile"}>
      {page}
    </AppLayout>
  );
};

export default Profile;
