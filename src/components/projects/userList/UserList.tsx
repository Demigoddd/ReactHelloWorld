import React from "react";
import ContentLoader from 'react-content-loader';
import "./style.css";

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={320}
    height={50}
    viewBox="0 0 320 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="25" cy="25" r="25" />
    <rect x="64" y="0" rx="6" ry="6" width="137" height="25" />
    <rect x="64" y="32" rx="6" ry="6" width="183" height="15" />
    <rect x="290" y="12" rx="6" ry="6" width="26" height="26" />
  </ContentLoader>
);

const User: React.FC<{user: IUser, selectUsers: (id: number) => void, hasSelected: boolean}> = ({
  user,
  selectUsers,
  hasSelected
}) => {
  return (
    <div className="user-list-container__user">
      <img src={user.avatar} alt="avatar" />
      <div>
        <p>
          <b>{user.first_name} {user.last_name}</b>
        </p>
        <span>{user.email}</span>
      </div>
      <button onClick={() => selectUsers(user.id)}>
        {hasSelected ? "-" : "+"}
      </button>
    </div>
  );
};

export const UserList: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [selectedUserIds, setSelectedUserIds] = React.useState<number[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isInvitationSended, setIsInvitationSended] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn("ERROR: ", err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  const selectUsers = (id: number) => {
    if (selectedUserIds.includes(id)) {
      setSelectedUserIds(selectedUserIds.filter((n) => n !== id));
    } else {
      setSelectedUserIds([...selectedUserIds, id]);
    }
  };

  const sendInvitationHandler = () => {
    if (selectedUserIds.length) {
      setIsInvitationSended(true);
      console.log(selectedUserIds);
    }
  };

  const searchHandler = (event: any) => {
    setSearchValue(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div className="user-list-container">
      {isInvitationSended ? (
        <div className="user-list-container_success">
          <span>Invitation Sended to {selectedUserIds.length} user{selectedUserIds.length > 1 ? "s" : ""} Thanks!</span>
          <button onClick={() => window.location.reload()}>Back</button>
        </div>
      ) : (
        <>
          <div className="user-list-container__search">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <input
              type="text"
              placeholder="Search user..."
              value={searchValue}
              onChange={searchHandler}
            />
          </div>
          <div className="user-list-container__users">
            {isLoading ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              users
                .filter(({first_name, last_name, email}) => {
                  const fullNameLowerCase = (`${first_name} ${last_name}`).toLowerCase();
                  const emailLowerCase = email.toLowerCase();
                  const searchValueLowerCase = searchValue.toLowerCase();

                  // return fullNameLowerCase.includes(searchValueLowerCase) || emailLowerCase.includes(searchValueLowerCase);

                  if (fullNameLowerCase.includes(searchValueLowerCase)) {
                    return true;
                  }

                  if (emailLowerCase.includes(searchValueLowerCase)) {
                    return true;
                  }

                  return false;
                })
                .map((user: IUser) =>
                  <User
                    key={user.id}
                    user={user}
                    selectUsers={selectUsers}
                    hasSelected={selectedUserIds.includes(user.id)}
                  />
                )
            )}
          </div>
          <div className="user-list-container__send">
            {selectedUserIds.length > 0 && <button onClick={sendInvitationHandler}>Send Invitation</button>}
          </div>
        </>
      )}
    </div>
  );
};
