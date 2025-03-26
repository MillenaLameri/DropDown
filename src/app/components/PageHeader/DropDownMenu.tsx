import * as React from "react";
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
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { BoxCentralizado } from "../BoxCentralizado";
import ArrowDown from "../../../assents/img/icon-arrow-down.svg";
import ArrowUp from "../../../assents/img/icon-arrow-up.svg";

interface MenuItemData {
  label: string;
  icon?: string;
}

interface DropdownMenuProps {
  label: string;
  menuItems: MenuItemData[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  menuItems,
}) => {
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpenDropDown((prev) => !prev);

  const handleClose = (event: React.SyntheticEvent | Event) =>
    !anchorRef.current?.contains(event.target as HTMLElement) &&
    setOpenDropDown(false);

  const handleListKeyDown = ({ key, preventDefault }: React.KeyboardEvent) => {
    if (key === "Tab" || key === "Escape") {
      preventDefault();
      setOpenDropDown(false);
    }
  };

  React.useEffect(() => {
    if (openDropDown) prevOpen.current = openDropDown;
    else anchorRef.current?.focus();
  }, [openDropDown]);

  const prevOpen = React.useRef(openDropDown);

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
          color={Colors.gray3}
          fontWeight="bold"
          fontSize="0.9rem"
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
                    {menuItems.map(({ label, icon }, index) => (
                      <Box
                        sx={{ cursor: "pointer" }}
                        my={1}
                        key={index}
                        onClick={handleClose}
                      >
                        <Box display={"flex"} flexDirection="row">
                          {icon && (
                            <Box mr={1}>
                              <img
                                width="18"
                                height="20"
                                src={icon}
                                alt={label}
                              />
                            </Box>
                          )}
                          <Typography color={Colors.gray3}> {label}</Typography>
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
