import { FC } from 'react';

interface HeaderProps {
    isLoggedIn: boolean;
}

const Header: FC<HeaderProps> = ({ isLoggedIn }) => {
    return (
        <div className="navbar bg-primary">
            <div className="container mx-auto px-4 flex items-center h-16">
                {isLoggedIn ? (
                    <div className="flex-grow items-center">
                        <input type="text" placeholder="Search" className="input input-primary w-2/3" />
                    </div>
                ) : (
                    <div className="flex-grow">
                        <img src="https://assetspwa.liverpool.com.mx/assets/images/logos/liverpool-logo.svg" alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
