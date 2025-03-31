import { TextField, SxProps } from "@mui/material";

type Props = {
  placeholder: string;
  type?: string;
  sx?: SxProps;
};

export const AuthTextField = ({ placeholder, type = "text", sx }: Props) => {
  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "white",
          "& fieldset": { borderColor: "gray" },
          "&:hover fieldset": { borderColor: "black" },
          "&.Mui-focused fieldset": { borderColor: "black" },
        },
        ...sx,
      }}
      placeholder={placeholder}
      type={type}
      fullWidth
    />
  );
};
