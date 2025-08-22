import { Link } from 'react-router-dom';

export default function Navbar() {

    return(<>
        <div className="mainNavbar h-16 text-[20px] text-blue-600 text-bold flex mt-[50px] left-1/2 -translate-x-1/2 absolute">
            <Link to="/">
                <h1 class="hover:text-blue-200 mr-[80px]">
                    Landing Page
                </h1>
            </Link>
            <Link to="/Pricing">
                <h1 class="hover:text-blue-200 mx-[40px]">
                    Pricing
                </h1>
            </Link>
            <Link to="/Company">
                <h1 class="hover:text-blue-200 ml-[80px]">
                    Company
                </h1>
            </Link>
        </div>
        </>)
}