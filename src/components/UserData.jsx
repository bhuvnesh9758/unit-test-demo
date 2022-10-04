import { React } from "react";

const UserData = ({ userName }) => {
  return (
    <div data-testid="username">
        {userName?userName:'Anonymous'}
    </div>
  );
};
export default UserData;
