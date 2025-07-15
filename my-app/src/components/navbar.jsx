
export default function Navbar() {

    return(<>
        <div className="h-16 w-full bg-blue-600 flex items-center justify-between px-4">
            <Link to="/landingpage">
                <h1>
                    Landing Page
                </h1>
            </Link>
            <Link to="/">
            </Link>
        </div>
        </>)
}