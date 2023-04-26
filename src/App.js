import logo from "./logo.svg";
import "./App.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { inputFormElements } from "./formElements";

function App() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log("values");
    },
  });
  console.log("valuessss", formik.values);
  console.log("errors", formik.errors);
  return (
    <div className="App">
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography>Dynamic Form</Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                {inputFormElements.map((input) => (
                  <Grid spacing={1}>
                    <TextField {...input} onChange={formik.handleChange} />
                    <div></div>
                  </Grid>
                ))}
              </Grid>
            </form>
            <Grid>
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
