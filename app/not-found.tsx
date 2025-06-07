import Navigation from "../components/navigation";

export default function NotFound() {
    return (
        <div>
            <Navigation />
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please check the URL or return to the homepage.</p>
        </div>
    );
}