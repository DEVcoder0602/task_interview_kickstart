import { createSlice } from "@reduxjs/toolkit";
import DummyImage from "../assests/dummy.png";
import theme from "../theme";
import dayjs from "dayjs";

const webinars = [
  {
    name: "Matthew Martin",
    role: "Lead Front End Developer",
    company: "Google",
    photoUrl: DummyImage,
    backgroundColor: theme.palette.purple.main,
    topic: "Front End Engineering",
    title: "React and React Native",
    startDate: dayjs().format("DD MMM YYYY"),
    startTime: dayjs().format("hh:mm A"),
    endTime: dayjs().add(1, "hour").format("hh:mm A"),
  },
  {
    name: "IK Expert",
    role: "Leadership Role at a",
    company: "FAANG Company",
    photoUrl: DummyImage,
    backgroundColor: theme.palette.pink.main,
    topic: "Career",
    title: "How to get a job at FAANG",
    startDate: dayjs().format("DD MMM YYYY"),
    startTime: dayjs().format("hh:mm A"),
    endTime: dayjs().add(1, "hour").format("hh:mm A"),
  },
  {
    name: "Matthew Martin",
    role: "Lead Front End Developer",
    company: "Google",
    photoUrl: DummyImage,
    backgroundColor: theme.palette.teal.main,
    topic: "Front End Engineering",
    title: "Nextjs and Gatsbyjs",
    startDate: dayjs().format("DD MMM YYYY"),
    startTime: dayjs().format("hh:mm A"),
    endTime: dayjs().add(1, "hour").format("hh:mm A"),
  },
  {
    name: "Matthew Martin",
    role: "Lead Front End Developer",
    company: "Google",
    photoUrl: DummyImage,
    backgroundColor: theme.palette.primary.main,
    topic: "Front End Engineering",
    title: "React and React Native",
    startDate: dayjs().format("DD MMM YYYY"),
    startTime: dayjs().format("hh:mm A"),
    endTime: dayjs().add(1, "hour").format("hh:mm A"),
  },
  {
    name: "Matthew Martin",
    role: "Lead Front End Developer",
    company: "Google",
    photoUrl: DummyImage,
    backgroundColor: theme.palette.yellow.main,
    topic: "Front End Engineering",
    title: "React and React Native",
    startDate: dayjs().format("DD MMM YYYY"),
    startTime: dayjs().format("hh:mm A"),
    endTime: dayjs().add(1, "hour").format("hh:mm A"),
  },
  {
    name: "Matthew Martin",
    role: "Lead Front End Developer",
    company: "Google",
    photoUrl: DummyImage,
    backgroundColor: theme.palette.green.main,
    topic: "Front End Engineering",
    title: "React and React Native",
    startDate: dayjs().format("DD MMM YYYY"),
    startTime: dayjs().format("hh:mm A"),
    endTime: dayjs().add(1, "hour").format("hh:mm A"),
  },
];

const webinarSlice = createSlice({
  name: "webinar",
  initialState: {
    webinars,
  },
  reducers: {
    setWebinars: (state, action) => {
      state.webinars = [...state.webinars, action.payload];
    },
  },
});

export const { setWebinars } = webinarSlice.actions;
export default webinarSlice.reducer;
