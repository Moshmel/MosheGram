const mongoService = require("./mongo-service");
const ObjectId = require("mongodb").ObjectId;


//every like to post is {userid,username,userimg}
function updateLikes(data){
  const {postId,postLikes}=data;
  const id= new ObjectId(postId);

  return mongoService
  .connect()
  .then(db => db.collection("posts").updateOne({_id:id},{$set:{
    likes:postLikes
  }}));

}
function updateAuthorImg(data){
  const {userId,userImg}=data;
  console.log('userId is',userId);
  return mongoService
  .connect()
  .then(db => db.collection("posts").updateMany({"userId":userId},{$set:{
    "userImg":userImg
  }}))
} 
function getUserPosts(userId) {
  console.log('userId',userId)
  return mongoService
    .connect()
    .then(db => db.collection("posts").find({userId:userId}).sort({timeStamp:-1}).toArray());
}
function addComment(data){
  const {postId,commentText,userId,userImg,username}=data;
  const _id=new ObjectId(postId);
  
  return mongoService
  .connect()
  .then(db => db.collection("posts").updateOne({_id:_id},{$push:{
    comments:{commentText,userId,userImg,username}
  }}))
}
function addPost(post) {
  post.timeStamp = Date.now();
  post.likes=[];
  post.likesCount=0;
  post.comments = [];

  return mongoService
    .connect()
    .then(db => db.collection("posts").insertOne(post))
    .then(res => {
      post._id = res.insertedId;
      return post;
    });
}
function getFeed() {
  return mongoService
    .connect()
    .then(db => db.collection("posts").find({}).sort({timeStamp:-1}).toArray())
    .then(res => {
      return res;
    });
}
module.exports = {
  addPost,
  getFeed,
  addComment,
  updateLikes,
  getUserPosts,
  updateAuthorImg,
};
