// CODE HERE
document.addEventListener('DOMContentLoaded', function () {
    const feedData = [
        {id: 1, imageURL: 'image1.jpg', likes: 0, comment: [] },
        {id: 2, imageURL: 'image2.jpg', likes: 0, comment: ['Great!'] },
        {id: 3, imageURL: 'image3.jpg', likes: 0, comment: [] }
    ];

    const userFeed = document.getElementById('userFeed');

    function renderFeedItems() {
        userFeed.innerHTML = '';

        feedData.forEach(item => {
            const feedItem = document.createElement('div');
            feedItem.classList.add('feed-item');

            const img = document.createElement('img');
            img.src = item.imageURL;
            feedItem.appendChild(img);

            const likeContainer = document.createElement('div');
            likeContainer.classList.add('like-container');

            const likeHeart = document.createElement('i');
            likeHeart.classList.add('fa', 'fa-heart', 'like-heart');
            likeHeart.textContent = item.likes;
            likeContainer.appendChild(likeHeart);

            feedItem.appendChild(likeContainer);

            // if (item.comments && Array.isArray(item.comments)) {
            //     item.comments.forEach(comment => {
            //         const commentDiv = document.createElement('div');
            //         commentDiv.classList.add('comment');
            //         commentDiv.textContent = comment;
            //         commentsSection.appendChild(commentDiv);      
            // });
            // } else {
            //     console.error('item undefined', item.comments);
            // }

            const commentsSection = document.createElement('div');
            commentsSection.classList.add('comments');

            const commentTextarea = document.createElement('textarea');
            commentTextarea.placeholder = 'Add a comment...';
            commentsSection.appendChild(commentTextarea);

            const commentButton = document.createElement('button');
            commentButton.textContent = "Post";
            commentsSection.appendChild(commentButton);

            feedItem.appendChild(commentsSection);

            img.addEventListener('dbclick', function () {
                if (!likeHeart.classList.contains('liked')) {
                    item.likes++;
                    //likeHeart.style.display = 'block';
                    likeHeart.textContent = item.likes;
                    likeHeart.classList.add('liked');
                    
                    setTimeout (()=> {
                        likeHeart.classList.remove('liked');
                    }, 1000);
            }
            });


            commentButton.addEventListener('click', function () {
                const commentText = commentTextarea.value.trim();
                if (commentText !== '') {
                    if (!Array.isArray(item.comments)) {
                        item.comments = [];
                    }

                    item.comments.unshift(commentText);
                    renderFeedItems();
                }
                commentTextarea.value = '';
            });

            if (item.comments && Array.isArray(item.comments)) {
                item.comments.forEach(comment => {

                    const commentBox = document.createElement('div');
                    commentBox.classList.add('comment-box');

                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.textContent = comment;
                    commentsSection.appendChild(commentDiv);      
            });
            } else {
                console.error('item undefined', item.comments);
            }

            feedItem.appendChild(commentsSection);

            userFeed.appendChild(feedItem);
        });
    }
    
    renderFeedItems();
});