import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
// import { ToastContainer, toast } from "react-toastify";
import { createStory, updateStory } from "../../../actions/story";
import { useParams, useHistory } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
  },

  width: {
    width: "100%",
  },

  formControl: {
    width: "100%",
    textAlign: "left",
  },

  input: {
    color: "white",
    outlineColor: "white",
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

  cta: {
    background: "#161616",
    color: "#c9c9c9",
    flex: 1,
    "&:hover": {
      background: "#0e0e0e",
    },
  },
});

function Form({ blog, setBlog, dark }) {
  const dispatch = useDispatch();
  let params = useParams();
  let history = useHistory();

  let post = useSelector((state) =>
    state.story.filter((post) => {
      if (post._id === params.id) {
        return post;
      }
    })
  )[0];

  useEffect(() => {
    console.log("useEffect Post: ", post);
    setBlog({
      ...blog,
      _id: params.id,
      created: Date(),
      like: false,
    });

    if (post) {
      setBlog((blog) => ({
        ...post,
      }));
    }
  }, [blog._id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      console.log("UPDATE: ", blog);
      dispatch(updateStory(blog));
    } else {
      console.log("CREATE: ", blog);
      dispatch(createStory(blog));
    }
    clear("Saved");
    history.goBack();
  };

  const handleDiscard = (e) => {
    clear("Discarded");
    history.goBack();
  };

  const clear = (messege) => {
    setBlog({ ...blog, title: "", category: "", description: "" });
    // notify(messege);
  };

  const classes = useStyles();

  // const notify = (messege) => {
  //   toast.dark(messege, {
  //     position: "bottom-right",
  //     autoClose: 3000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  return (
    <div className={`Form ${dark ? `Form-dark` : ""}`}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="inpt">
          <TextField
            className={classes.width}
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            id="outlined-basic"
            label="Title"
            inputProps={{
              maxlength: 55,
              // className: classes.input,
            }}
            helperText={`${blog.title.length}/55`}
            variant="outlined"
            required
          />
        </div>

        <div className="inpt">
          <TextField
            id="outlined-multiline-static"
            className={classes.width}
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
            label="Description"
            inputProps={{
              maxlength: 110,
              // className: classes.input,
            }}
            helperText={`${blog.description.length}/110`}
            multiline
            rows={3}
            variant="outlined"
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
              inputProps={
                {
                  // className: classes.input,
                }
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="entertainment">Entertainment</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="programming">Programming</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="ctaBtn">
          <Button className={classes.cta} type="submit" variant="contained">
            Save
          </Button>
          <Button
            className={classes.cta}
            onClick={() => clear("Cleared")}
            variant="contained"
          >
            Clear
          </Button>
          <Button
            onClick={handleDiscard}
            className={classes.cta}
            variant="contained"
          >
            Discard
          </Button>
        </div>
      </form>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}

export default Form;
