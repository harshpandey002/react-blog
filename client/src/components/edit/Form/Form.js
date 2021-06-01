import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import "./Form.css";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  width: {
    width: "100%",
  },
  flex: {
    width: "50%",
  },
  formControl: {
    width: "100%",
    textAlign: "left",
  },
  input: {
    display: "none",
  },
  upload: {
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    borderRadius: "5px 0 0 5px",
    "&:hover": {
      background: "#f0f0f0",
    },
  },
  default: {
    color: "white",
    background: "#505050",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    borderRadius: "0 5px 5px 0",
    "&:hover": {
      background: "#313131",
      boxShadow:
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    },
  },
  cta: {
    background: "white",
    flex: 1,
    "&:hover": {
      background: "#f0f0f0",
      boxShadow:
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    },
  },
});

function Form() {
  const [blog, setBlog] = useState({ title: "", category: "", thumbnail: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    clear();
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBlog({ ...blog, thumbnail: base64 });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const clear = () => {
    setBlog({ title: "", category: "", thumbnail: "" });
  };

  const classes = useStyles();

  return (
    <div className="Form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="inpt">
          <TextField
            className={classes.width}
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            required
            // inputProps={{
            //   style: {
            //     padding: "10px 14px",
            //   },
            // }}
          />
        </div>
        <div className="inpt">
          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="select">Category</InputLabel>
            <Select
              labelId="select"
              id="simple-select-outlined"
              value={blog.category}
              onChange={(e) => setBlog({ ...blog, category: e.target.value })}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="businesss">Businesss</MenuItem>
              <MenuItem value="entertainment">Entertainment</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="programming">Programming</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={`${classes.width} inpt`}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            onChange={(e) => {
              uploadImage(e);
            }}
            type="file"
          />

          <label htmlFor="contained-button-file">
            <Button
              className={`${classes.flex} ${classes.upload}`}
              component="span"
            >
              Upload Image
            </Button>
          </label>

          <Button className={`${classes.flex} ${classes.default}`}>
            Set Default
          </Button>
        </div>

        <div className="ctaBtn">
          <Button className={classes.cta} type="submit" variant="contained">
            Save
          </Button>
          <Button className={classes.cta} onClick={clear} variant="contained">
            Clear
          </Button>
          <Button className={classes.cta} variant="contained">
            Discard
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
