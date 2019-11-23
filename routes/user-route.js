const userService = require("../services/user-service");
const postService = require("../services/post-service");

function addRoutes(App) {
  App.post("/user/updateuserimg", async (req, res) => {
    const { userId, userImg } = req.body;
    try {
      const [user, posts] = await Promise.all([
        userService.updateUserImg({ userId, userImg }),
        postService.updateAuthorImg({ userId, userImg })
      ]);
      res.json();
    } catch (err) {
      console.log("error in update user img");
      err => res.status(500).send("error on update user img");
    }
    userService
      .updateUserImg({ userId, userImg })
      .then(response => res.json())
      .catch(err => res.status(500).send("error on fetching userpage data"));
  });

  App.post("/user/userpagedata", async (req, res) => {
    const { userId } = req.body;
    try {
      const [user, posts] = await Promise.all([
        userService.getUserById(userId),
        postService.getUserPosts(userId)
      ]);
      const { username, userImg, follow, followers, email, _id } = user;
      res.json({ username, userImg, follow, followers, posts, email, _id });
    } catch (err) {
      err => res.status(500).send("error on fetching userpage data");
    }
  });
  App.post("/user/toggleliketopost", (req, res) => {
    const { userId, userLikes } = req.body;
    userService
      .toggleLiketoPost({ userId, userLikes })
      .then(response => res.json())
      .catch(err => res.status(500).send("couldnt add sorry"));
  });
  App.post(`/user/register`, async (req, res) => {
    const newUser = req.body;
    const isUsernameExist = await userService.isUsernameExists(
      newUser.username
    );
    if (isUsernameExist) {
      res.status(500).send("error! username taken");
    } else {
      userService.register(newUser).then(user => res.json(user));
    }
  }),
    App.post("/user/login", (req, res) => {
      const { username, password } = req.body;
      userService
        .checkLogin({ username, password })
        .then(user => {
          req.session.user = user;
          res.json(user);
        })
        .catch(res => res.catch);
    }),
    App.post("/user/update", (req, res) => {
      const user = req.body;
      userService
        .update(user)
        .then(res => res.json())
        .catch(() => res.catch);
    });
  App.post("/user/addpost", (req, res) => {
    const { userId, postId } = req.body;
    userService
      .addPost({ userId, postId })
      .then(() => res.json())
      .catch(() => res.catch);
  });
}
module.exports = addRoutes;
