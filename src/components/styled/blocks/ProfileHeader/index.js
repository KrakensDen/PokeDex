import React from "react";
import Image from "next/image";
import * as S from "./ProifleHeader.styles";
import { AiFillEdit } from "react-icons/ai";

const ProfileHeader = ({ userImage, userName, userLvl, accountCreated }) => {
  const EditProfileHandler = () => {
    console.log("Editing Profile");
  };
  return (
    <S.ProfileHead>
      <S.ProfileImg>
        <Image
          width={90}
          height={90}
          src={userImage}
          alt={`Profile Picture for ${userName}`}
        />
      </S.ProfileImg>
      <AiFillEdit
        style={{ position: "absolute", margin: 3 + "px", cursor: "pointer" }}
        onClick={EditProfileHandler}
      />
      <S.ProfileInfo>
        <S.ProfileName>{userName}</S.ProfileName>
        <S.TrainerLvl progress={(userLvl % 1) * 100}>
          <h4>LVL:&nbsp;</h4>
          <svg
            width="50"
            height="50"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="white"
              fill="transparent"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <text x="16" y="30" fill="white">
              {Math.floor(userLvl)}
            </text>
          </svg>
        </S.TrainerLvl>
      </S.ProfileInfo>
      <S.AccountDate>
        Account Created: <span>{accountCreated}</span>
      </S.AccountDate>
    </S.ProfileHead>
  );
};

export default ProfileHeader;
