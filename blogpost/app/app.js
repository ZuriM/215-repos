var postData = [];

function addListeners() {
  $("nav a").click(function(e) {
    e.preventDefault();
    var id = e.currentTarget.id;
    // console.log(postData[id]);
    var post = postData[id];

    if (post) {
      $(".blog-holder").html(`
      <p>Title: ${post.title}</p>
      <p>Author: ${post.author}</p>
      <p>Publish Data: ${post.publishDate}</p>
      <p>Story: ${post.story}</p>`);
      <div>
        <ol>`;
            
            
 $.each(post.comment, function(idx,comment){
            `<li>
            ${Comment.userName}
            </li>}`;
        })`
        </ol>
      </div>`
    }
  });
}

function getData() {
  $.getJSON("data/data.json", function(blogPosts) {
    postsData = blogPosts;

    $.each(postsData, function(idx, value) {
      $("nav").append(`<a id="${idx}" href="#">${value.title}</a>`);
    });

    addListeners();
  });
}

$(document).ready(function() {
  getData();
});
