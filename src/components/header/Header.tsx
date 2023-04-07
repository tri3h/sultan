import { FC } from "react";
import { MOBILE_BREAKPOINT } from "../../types/types";
import { useViewport } from "../../hooks/useViewport";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header: FC = () => {
    const { width } = useViewport();
    return (
        <>{width < MOBILE_BREAKPOINT ? <MobileHeader /> : <DesktopHeader />}</>
    );
};

export default Header;
