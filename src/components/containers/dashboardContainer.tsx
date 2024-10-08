import React from "react";
import { useState } from "react";
import SideMenu from '../menus/sideMenu';
import HeaderLabel from "../labels/headerLabel";
import TitleLabel from "../labels/titleLabel";
import MenuButton from "../menus/menuButton";
import { CurrentAppTranslation } from "../../translations/appTranslation";

interface DashboardContainerProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({ ...props }) => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const toggleMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                overflowX: 'hidden',
                position: 'relative',
                height:'100vh',
                backgroundColor:'#f5f5f5',
                ...props.style
            }
        }>
            <HeaderLabel>
                <TitleLabel>{CurrentAppTranslation.ExamSphereTitleText}</TitleLabel>
                <MenuButton onClick={toggleMenu}>☰</MenuButton>
            </HeaderLabel>
            <SideMenu isOpen={isSideMenuOpen}
                toggleMenu={toggleMenu}
            >
            </SideMenu>
            {props.children}
        </div>
    );
}

export default DashboardContainer;