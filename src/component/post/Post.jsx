import React from 'react'
import './post.css'
function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.thenews.com.pk/assets/uploads/updates/2023-01-21/1032858_8948879_1142680_031512_updates-copy_updates.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Kanye West related mails floods LAPD inbox over two years
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Kanye West and his dream project Donda school dominated The Los Angeles
        Police Department inbox to the extent in the past two years that they
        reached above the limit of their computers could search.<br/> According to
        Insider, the LAPD records analyst said, "Between January 1, 2022, and
        November 4, 2022, there were 19,155 emails that mentioned Kanye West or
        Donda Academy in the in-and-outboxes of LAPD employees."<br/>
        There were so many emails, in fact, that the files were too large for the police
        record system to search and export without narrowing them down," the
        analyst added. The LAPD asked Insider to sort down the request to help
        them export and search for records.
      </p>
      
    </div>
  );
}

export default Post