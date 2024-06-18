import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import ProfileCard from "./Home/ProfileCard";
import AboutMe from "./Home/AboutMe";
import Skills from "./Home/Skills";
import Services from "./Home/Services";
import MyProjects from "./Home/MyProjects";



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

            <div className="py-12">
                <ProfileCard />
                <AboutMe />

                <div className="bg-white rounded-lg shadow-md">
                    <Skills />
                    <hr className="my-6 border-t border-gray-200" />
                    <Services />
                </div>
                {/* <MyProjects /> */}
            </div>
        </GuestLayout>
    );
}
