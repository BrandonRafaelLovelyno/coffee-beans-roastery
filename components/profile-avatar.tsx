import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface ProfileAvatarProps {
  imageUrl?: string;
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  imageUrl,
  className,
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage
        src={
          imageUrl ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
      />
    </Avatar>
  );
};

export default ProfileAvatar;
