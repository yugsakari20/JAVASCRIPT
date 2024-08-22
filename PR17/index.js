
let likeCount = Number(localStorage.getItem("likeCount") || 0);
const likeCountSpan = document.getElementById("LikeCount");
likeCountSpan.innerHTML = likeCount;

document.getElementById("like").addEventListener("click", () => {
  likeCount++;
  likeCountSpan.innerHTML = likeCount;
  localStorage.setItem("likeCount", likeCount);
});

let commentCount = Number(localStorage.getItem("commentCount") || 0);
const commentCountSpan = document.getElementById("CommentCount");
commentCountSpan.innerHTML = commentCount;

document.getElementById("comment").addEventListener("click", () => {
  commentCount++;
  commentCountSpan.innerHTML = commentCount;
  localStorage.setItem("commentCount", commentCount);
});


let shareCount = Number(sessionStorage.getItem("shareCount") || 0);
const shareCountSpan = document.getElementById("ShareCount");
shareCountSpan.innerHTML = shareCount;

document.getElementById("share").addEventListener("click", () => {
  shareCount++;
  shareCountSpan.innerHTML = shareCount;
  sessionStorage.setItem("shareCount", shareCount);
});


let downloadCount = Number(sessionStorage.getItem("downloadCount") || 0);
const downloadCountSpan = document.getElementById("DownloadCount");
downloadCountSpan.innerHTML = downloadCount;

document.getElementById("bookmark").addEventListener("click", () => {
  downloadCount++;
  downloadCountSpan.innerHTML = downloadCount;
  sessionStorage.setItem("downloadCount", downloadCount);
});
