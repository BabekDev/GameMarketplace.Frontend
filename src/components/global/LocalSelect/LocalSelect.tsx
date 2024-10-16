import styles from "./LocalSelect.module.scss";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocalSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const handleChange = (event: SelectChangeEvent) => {
    const nextLocale = event.target.value as string;

    const cleanedPathname = pathname.replace(/^\/(en|ru)/, '');

    router.replace(`/${nextLocale}${cleanedPathname}`);
  };

  return (
    <div className={styles.local_select_body}>
      <FormControl
        fullWidth
        sx={{
          background: "#252525",
        }}
        focused
      >
        <Select
          sx={{
            maxHeight: "27.5px",
            padding: "4px 14px",
            backgroundColor: "#1997ff75",
            color: "white",
            borderRadius: "5px",
            borderColor: "#1997ff75",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1997ff75",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1997ff75",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1997ff75",
            },
          }}
          defaultValue={localActive}
          value={localActive}
          label="Language"
          onChange={handleChange}
          variant="outlined"
          displayEmpty
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ru"}>Russian</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
