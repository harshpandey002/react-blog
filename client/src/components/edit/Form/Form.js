import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import "./Form.css";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  textStyle: {
    width: "100%",
    textAlign: "center",
  },
  formControl: {
    width: "100%",
    textAlign: "left",
  },
  input: {
    display: "none",
  },
});

function Form() {
  const [blog, setBlog] = useState({ title: "", category: "", thumbnail: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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

  const classes = useStyles();

  return (
    <div className="Form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="inpt">
          <TextField
            className={classes.textStyle}
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            // inputProps={{
            //   style: {
            //     padding: "10px 14px",
            //   },
            // }}
          />
        </div>
        <div className="inpt">
          <FormControl variant="outlined" className={classes.formControl}>
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

        <div className="uploadBTn">
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
            <Button variant="outlined" component="span">
              Upload
            </Button>
          </label>
        </div>

        <Button type="submit" variant="outlined">
          Save
        </Button>
        <Button variant="outlined">Clear</Button>
        <Button variant="outlined">Discard</Button>
      </form>
    </div>
  );
}

export default Form;
