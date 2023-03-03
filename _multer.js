import express from "express";
import morgan from "morgan";
import multer from "multer";
import fs from "fs";
import path from "path";
import exp from "constants";
const app = express();
app.set("port", 3000);

const __dirname = path.resolve();
app.use(morgan("dev", express.json(), express.urlencoded({ extended: false })));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", express.static(path.join(__dirname, "public")));

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

try {
  fs.readdirSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads/");
}

app.post("/upload", upload.single("image"), (req, res) => {
  const data = {
    state: "success",
    data: {
      src: `/uploads/${req.file.filename}`,
    },
  };

  console.log(req.file);
  res.status(200).json(data);
});

app.post(
  "/uploads",
  upload.fields([{ name: "image1" }, { name: "image2" }]),
  (req, res) => {
    console.log(req.files);
  }
);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번으로 서버 실행중`);
});
