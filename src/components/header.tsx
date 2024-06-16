import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__contacts">
            <Link
              to="https://github.com/velasso1/test-case/tree/main/src"
              target="_blank"
            >
              Code on GitHub
            </Link>
            <Link to="https://t.me/reynold495" target="_blank">
              Message in Telegram
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
