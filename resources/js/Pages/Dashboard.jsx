import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import ProfileCard from "./Home/ProfileCard";
import AboutMe from "./Home/AboutMe";
import Skills from "./Home/Skills";
import Services from "./Home/Services";
import MyProjects from "./Home/MyProjects";
import Brands from "./Home/Brands";
import Testimonials from "./Home/Testimonials";
import HireMe from "./Home/HireMe";



export default function Dashboard({
    auth,

}) {
    return (
        <GuestLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 ">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <ProfileCard />
            <AboutMe />
            <div className="bg-white rounded-lg shadow-md">
                <Skills />
                <hr className="my-6 border-t border-gray-200" />
                <Services />
                <hr className="my-6 border-t border-gray-200" />

                <Brands />
                <hr className="my-6 border-t border-gray-200" />

                <Testimonials />
                <hr className="my-6 border-t border-gray-200" />

                <HireMe />

                {/* <MyProjects /> */}
            </div>
        </GuestLayout>
    );
}
