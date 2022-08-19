import React from "react";
import TextField from "@mui/material/TextField";
import "./Signup.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function Component({
  label,
  onChange,
  value,
  onBlur,
  type,
  name,
  formik,
  option,
}) {
  return (
    <>
      <div className="input-container">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {type === "text" || type === "email" ? (
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              name={name} //this name value should be same as value after formik.values.
              type={type}
              style={{ width: "100%" }}
              value={value}
              onChange={(e) => onChange(e)}
              onBlur={onBlur}
            />
          ) : type === "date" ? (
            <DatePicker
              style={{ width: "100%" }}
              label={label}
              name={name}
              onChange={(e) => onChange(e)}
              value={value}
              renderInput={(params) => <TextField {...params} />}
            />
          ) : type === "checkbox" ? (
            <>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={label}
                  name={name}
                  value={value}
                  onChange={(e) => formik.setFieldValue(name, e.target.checked)}
                />
              </FormGroup>
            </>
          ) : type === "radio" ? (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name={name}
                value={value}
              >
                {option.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={item.toLowerCase()}
                      control={<Radio />}
                      label={item}
                      onChange={(e) => onChange(e)}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          ) : (
            ""
          )}

          {formik.touched[name] && formik.errors[name] && (
            <p>{formik.errors[name]}</p>
          )}
        </LocalizationProvider>
      </div>
    </>
  );
}

export default Component;
