import Logo from "./components/navigation/Logo/Logo";
import NavItem from "./components/navigation/navItem/NavItem";
import "./page.scss";

export default function Home() {
  return (
    <main className="container">
      <div className="navSection">
        <Logo />
        <NavItem title="Home" />
      </div>
      <div className="mainSection">Content section</div>
    </main>
  );
}
