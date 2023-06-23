import "./NavItem.scss";
type Props = {
  title: string;
};

const NavItem = (props: Props) => {
  return (
    <div className="navigationItem">
      <div>icon</div>
      <div>{props.title}</div>
    </div>
  );
};

export default NavItem;
