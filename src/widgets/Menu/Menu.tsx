import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import { useLocation } from "react-router-dom";
import { PanelProps, PushedProps } from "./types";
import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Text from "../../components/Text/Text";
import Panel from "./Panel";
import Link from "../../components/Link/Link";
import UserBlock from "./UserBlock";
import Dropdown from "../../components/Dropdown/Dropdown";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import Skeleton from "../../components/Skeleton/Skeleton";
import { NavProps, MenuEntry as EntryProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import Avatar from "./Avatar";
import Button from "../../components/Button/Button";
import * as IconModule from "./icons";



const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { HomeIcon, MoonIcon, SunIcon, StoveIcon, OvenIcon } = Icons;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: black;
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;
const StyledNavRel = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: black;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;
const Socials = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  margin-right: 16px;
  width: 100%;
  z-index: 20;
  position: relative;

`;
const Toggle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  width: 100%;
  z-index: 20;
  position: relative;

`;
const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${2*MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: 0px;
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;
const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
}) => {
  const [isPushed, setIsPushed] = useState(false);
  const showMenu=true;
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        {links.map((entry) => {
          const { icon, calloutClass, label, href } = entry
          const Icon = Icons[icon];
          const iconElement = <Icon width="24px" mr="8px" />;
          const location = useLocation();

          return (
            <Flex>
              <Button size="sm" > 
                  <MenuLink href={href}>
                    {/* {iconElement} */}
                    <LinkLabel isPushed={true}>{label}</LinkLabel>
                  </MenuLink>
              </Button>
            </Flex>    
          );
        })}
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <StyledNavRel showMenu={showMenu}>
        {cakePriceUsd ? (
            <PriceLink href={priceLink} target="_blank">
              <PancakeRoundIcon width="24px" mr="8px" />
              <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
            </PriceLink>
          ) : (
            <Skeleton width={80} height={24} />
          )}
          <Socials>
          <Flex>
            {socials.map((social, index) => {
              const Icon = Icons[social.icon];
              const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
              const mr = index < socials.length - 1 ? "8px" : 0;
              if (social.items) {
                return (
                  <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
                    {social.items.map((item) => (
                      <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                        {item.label}
                      </Link>
                    ))}
                  </Dropdown>
                );
              }
              return (
                <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                  <Icon {...iconProps} />
                </Link>
              );
            })}
          </Flex>        
        </Socials>  
        <Flex>
          <Button variant="text" onClick={() => toggleTheme(!isDark)}>
            <Flex alignItems="center">
              <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
              <Text color="textDisabled" mx="4px">
                /
              </Text>
              <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
            </Flex>
          </Button>
        </Flex>
        
      </StyledNavRel>      
      <BodyWrapper>
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
