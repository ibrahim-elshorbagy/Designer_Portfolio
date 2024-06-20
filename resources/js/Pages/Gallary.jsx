import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

import Projects from "./Home/Projects";



export default function Dashboard({ auth, projects }) {
    return (
        <GuestLayout user={auth.user}>
            <Projects projects={projects}></Projects>
        </GuestLayout>
    );
}
