import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {

    return (
        <div className="select-none">
            <Header />
            <main className="min-h-[100vh] bg-neutral-50 dark:bg-neutral-900 text-zinc-800 dark:text-zinc-100">
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}