import Logo from "./Logo";
import MobNav from "./MobNav";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex justify-center items-center gap-x-6">
            <Nav containerStyles='hidden xl:flex gap-x-8 items-center' />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
