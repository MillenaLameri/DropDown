import {
  useState,
  useContext,
  useRef,
  FC,
  SyntheticEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import {
  Box,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import { Colors } from "../../../util/colors";
import MenuList from "@mui/material/MenuList";
import { BoxCentralizado } from "../BoxCentralizado";
import ArrowDown from "../../../assents/img/icon-arrow-down.svg";
import ArrowUp from "../../../assents/img/icon-arrow-up.svg";
import { ThemeContext } from "../../contexts/theme.context";
import { useNavigate } from "react-router-dom";

interface MenuItemData {
  label: string;
  icon?: string;
  href: string;
}

interface DropdownMenuProps {
  label: string;
  menuItems: MenuItemData[];
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ label, menuItems }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpenDropDown((prev) => !prev);

  const handleClose = (event: SyntheticEvent | Event) =>
    !anchorRef.current?.contains(event.target as HTMLElement) &&
    setOpenDropDown(false);

  const handleListKeyDown = ({ key, preventDefault }: KeyboardEvent) => {
    if (key === "Tab" || key === "Escape") {
      preventDefault();
      setOpenDropDown(false);
    }
  };

  const handleMenuItemClick = (href: string | undefined) => {
    if (href) {
      navigate(href);
      setOpenDropDown(false);
    }
  };

  useEffect(() => {
    if (openDropDown) prevOpen.current = openDropDown;
    else anchorRef.current?.focus();
  }, [openDropDown]);

  const prevOpen = useRef(openDropDown);

  return (
    <Stack direction="row">
      <Box
        ref={anchorRef}
        id="composition-button"
        aria-controls={openDropDown ? "composition-menu" : undefined}
        aria-expanded={openDropDown ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{
          my: 2,
          cursor: "pointer",
        }}
      >
        <Typography
          noWrap
          component="a"
          fontWeight="bold"
          fontSize="0.9rem"
          color={theme === "dark" ? Colors.white : Colors.gray3}
          ml={1}
        >
          {label}
        </Typography>
        <Box
          component="img"
          src={openDropDown ? ArrowUp : ArrowDown}
          alt="arrow"
          ml={1}
        />
      </Box>
      <Popper
        open={openDropDown}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{
          zIndex: 9999,
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                borderRadius: 2,
                width: 160,
                background: theme === "dark" ? Colors.black2 : Colors.white2,
              }}
            >
              <BoxCentralizado>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={openDropDown}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {menuItems.map(({ label, icon, href }, index) => (
                      <Box
                        sx={{ cursor: "pointer" }}
                        my={1}
                        key={index}
                        onClick={() => handleMenuItemClick(href)}
                      >
                        <Box display={"flex"} flexDirection="row">
                          {icon && (
                            <Box mr={1} component="a" href={href}>
                              <img
                                width="18"
                                height="20"
                                src={icon}
                                alt={label}
                              />
                            </Box>
                          )}
                          <Typography
                            color={
                              theme === "dark" ? Colors.white : Colors.gray3
                            }
                          >
                            {label}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </BoxCentralizado>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};
