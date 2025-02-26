import Image from "next/image";
import NavLink from "../nav-link";

interface LogoProps {
   width?: number;
   height?: number;
}
const ClickableLogo: React.FC<LogoProps> = ({ width = 154, height = 32 }) => {
   return (
      <NavLink href="/">
         <Image src="/logo.png" alt="FHUP Dudek logo" width={width} height={height} priority />
      </NavLink>
   );
};
export default ClickableLogo;
