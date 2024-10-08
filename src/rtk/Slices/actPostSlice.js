import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL, POSTS } from "../../api/api";
import { toast } from "react-toastify";

const actPostSlice = createAsyncThunk("posts/actPostSlice", async (pageNum) => {
  try {
    if (pageNum === 0) {
      toast.warning("Page not found. Redirecting to page 1.");
      pageNum = 1;
    }
    let res = await axios.get(`${BASEURL}/${POSTS}?pageNum=${pageNum}`);
    if (!res.data.posts || res.data.posts.length === 0) {
      toast.info("No posts available for this page.");
      return [];
    }
    return res.data.posts;
  } catch (error) {
    console.log(error);
  }
});

export default actPostSlice;
