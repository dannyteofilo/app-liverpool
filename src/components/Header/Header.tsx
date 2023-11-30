import { FC, useState } from 'react';

interface HeaderProps {
    isLoggedIn: boolean;
    user?: string,
    onLogoutClick?: () => void;
    onChangeSearch?: (searchText: string) => void;
}

const Header: FC<HeaderProps> = ({ isLoggedIn, user, onLogoutClick, onChangeSearch }) => {

    const [searchText, setSearchText] = useState<string>('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        setSearchText(newText);
        onChangeSearch && onChangeSearch(newText);
    };

    console.log('value: ',searchText)

    return (
        <div className="navbar bg-primary">
            <div className=" px-4 h-16 w-full">
                {isLoggedIn ? (
                    <div className='w-full flex justify-center items-center'>
                        <div className="flex-grow w-1/3">
                            <img src="https://assetspwa.liverpool.com.mx/assets/images/logos/liverpool-logo.svg" alt="" />
                        </div>
                        <div className="flex-grow items-center w-3/4">
                            <input type="text" placeholder="Search" className="input input-primary w-full" value={searchText}
                                onChange={handleSearchChange} />
                        </div>
                        <div className="w-1/4 ml-auto">
                            <div className='flex justify-end items-end w-full'>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <div className="badge badge-primary badge-outline">{user}</div>
                                        <li><a href='#' onClick={() => onLogoutClick && onLogoutClick()}>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                ) : (
                    <div className="flex-grow">
                        <img src="https://assetspwa.liverpool.com.mx/assets/images/logos/liverpool-logo.svg" alt="" />
                    </div>
                )}
            </div>
        </div >
    );
};

export default Header;
