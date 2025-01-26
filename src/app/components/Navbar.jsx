import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Regent Street Presbyterian</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>I'm New</a></li>
                    <li>
                        <details>
                            <summary>What's On</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Kids</a></li>
                                <li><a>Youth</a></li>
                                <li><a>Adults</a></li>
                                <li><a>Latest</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Community</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>The Link</a></li>
                                <li><a>Feilds Of Life</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default Navbar;