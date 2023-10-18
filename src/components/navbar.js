import { ConnectButton } from "@web3uikit/web3";

const NavBar = () => {
  return (
    <div>
      <button>Home</button>
      <button>See VHRs</button>
      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default NavBar;
