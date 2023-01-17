import React from "react";
import Image from "next/image";
import * as S from "./ProifleHeader.styles";
import { AiFillEdit, AiOutlineUser } from "react-icons/ai";

const ProfileHeader = ({
  userImage,
  userName,
  userLvl,
  accountCreated,
  editingProfile,
}) => {
  return (
    <S.ProfileHead>
      <S.ProfileImg>
        {userImage ? (
          <Image
            width={90}
            height={90}
            src={userImage}
            alt={`Profile Picture for ${userName}`}
          />
        ) : (
          <Image
            width={85}
            height={85}
            src={"/user.png"}
            alt={"User Img Placeholder"}
          />
        )}
        <AiFillEdit
          style={{
            position: "relative",
            top: "-89px",
            left: "5px",
            cursor: "pointer",
          }}
          onClick={editingProfile}
        />
      </S.ProfileImg>
      <S.ProfileInfo>
        <S.ProfileName>{userName ? userName : ""}</S.ProfileName>
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
            <text x="40%" y="60%" fill="white">
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
