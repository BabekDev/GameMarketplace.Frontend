import styles from "./LocalSelect.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocalSelect() {
  const router = useRouter();
  const localActive = useLocale();

  const handleChange = (event: SelectChangeEvent) => {
    const nextLocale = event.target.value as string;

    router.replace(`/${nextLocale}`);
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
        <InputLabel>Language</InputLabel>
        <Select
          sx={{
            color: "#999999",
          }}
          defaultValue={localActive}
          value={localActive}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ru"}>Russian</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
