import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface ProfileAvatarProps {
  imageUrl: string;
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  imageUrl,
  className,
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={imageUrl} />
    </Avatar>
  );
};

export default ProfileAvatar;
