import post from "./routers/post.js";
import comment from "./routers/comment.js";
import user from "./routers/user.js";
import express from "express";

const app = express();
app.set("port", 3000);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번으로 서버 실행중`);
});

app.get("/", (req, res) => {
  res.send("헬로 익스프레스");
});

app.use("/post", post);
app.use("/comment", comment);
app.use("/user", user);
