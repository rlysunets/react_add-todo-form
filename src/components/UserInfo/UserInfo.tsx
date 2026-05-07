import { User } from '../../types/user';

export const UserInfo = ({ user }: { user: User }) => {
  return (
    <a className="UserInfo" href={`mailto:${user?.email}`}>
      {user?.name}
    </a>
  );
};
