import { Link } from 'react-router-dom';

export default function Navbar() {

    return(<>
        <div className="h-16 w-full text-blue-600 flex items-center justify-between px-4 absolute ">
            <Link to="/">
                <h1 class="hover:text-blue-200">
                    Landing Page
                </h1>
            </Link>
            <Link to="/">
                <h1 class="hover:text-blue-200">
                    Pricing
                </h1>
            </Link>
            <Link to="/">
                <h1 class="hover:text-blue-200">
                    Company
                </h1>
            </Link>
        </div>
        </>)
}