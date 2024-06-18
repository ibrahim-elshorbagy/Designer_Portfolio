import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div
                    className="container px-4 mx-auto sm:px-6 lg:px-8"
                    style={{ maxWidth: "1200px" }}
                >
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
                                </Link>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <NavLink
                                href={route("login")}
                                active={route().current("login")}
                            >
                                Login
                            </NavLink>
                            {/* <NavLink
                                href={route("register")}
                                active={route().current("register")}
                            >
                                Register
                            </NavLink> */}
                        </div>

                        <div className="flex items-center -mr-2 sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        !showingNavigationDropdown
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "hidden"
                                                : "inline-flex"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        showingNavigationDropdown
                            ? "block"
                            : "hidden" + " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <NavLink
                            href={route("login")}
                            active={route().current("login")}
                        >
                            Login
                        </NavLink>
                        {/* <NavLink
                            href={route("register")}
                            active={route().current("register")}
                        >
                            Register
                        </NavLink> */}
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
