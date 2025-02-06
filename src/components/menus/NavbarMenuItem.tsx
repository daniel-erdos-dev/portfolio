export const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({ menuName }) => {
  return (
    <a
      href={`#${menuName.toLowerCase()}`}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {menuName}
    </a>
  );
};

interface NavbarMenuItemProps {
  menuName: string;
}
