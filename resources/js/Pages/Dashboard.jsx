import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import ProfileCard from "./Home/ProfileCard";
import AboutMe from "./Home/AboutMe";
import Skills from "./Home/Skills";
import Services from "./Home/Services";
import Brands from "./Home/Brands";
import Testimonials from "./Home/Testimonials";
import Footer from "./Home/Footer";
import Projects from "./Home/Projects";



export default function Dashboard({ auth, projects }) {
    return (
        <GuestLayout user={auth.user}>
            <Head title="Dashboard" />

            <ProfileCard />
            <AboutMe />
            <div className="bg-white rounded-lg shadow-md">
                <Skills />
                <Services />

                <Brands />

                <Testimonials />
                <Projects projects={projects} />

                <Footer />
            </div>
        </GuestLayout>
    );
}
