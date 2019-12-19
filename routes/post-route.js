const postService = require("../services/post-service");
const userService = require("../services/user-service");
function addRoutes(App) {
  App.post("/post/addcomment", (req, res) => {
    const data = req.body;
    postService.addComment(data).then(response => res.json(response));
  });

  App.post("/post/updatelikes", (req, res) => {
    const { postId, postLikes } = req.body;
    postService
      .updateLikes({ postId, postLikes })
      .then(response => res.json())
      .catch(err => res.status(500).send("couldnt add sorry"));
  });

  App.get("/postfeed", (req, res) => {
    postService
      .getFeed()
      .then(posts => {
        console.log('postss aree ')
        return res.json(posts);
      })
      .catch(err => {
        console.log('error',err)
        res.status(500).send("couldnt get feed, sorry")});
  });
  App.post(`/post/addpost`, (req, res) => {
    const post = req.body;
    postService
      .addPost(post)
      .then(post => {
        res.json(post);
      })
      .catch(err => {
        res.status(500).send("couldnt add, sorry");
      });
  });
}
module.exports = addRoutes;
