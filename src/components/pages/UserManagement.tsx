import { memo, FC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap>
      <WrapItem p={{ base: 4, md: 10 }}>
        <UserCard
          userName="Iatik"
          fullName="Iatik The Developer"
          imageUrl="https://source.unsplash.com/random"
        />
      </WrapItem>
    </Wrap>
  );
});
