import React from 'react'
import './singlePost.css'
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://www.thenews.com.pk/assets/uploads/updates/2023-01-21/1032858_8948879_1142680_031512_updates-copy_updates.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Kanye West related mails floods LAPD inbox over two years
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ahmed</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Kanye West and his dream project Donda school dominated The Los
          Angeles Police Department inbox to the extent in the past two years
          that they reached above the limit of their computers could search.
          <br /> According to Insider, the LAPD records analyst said, "Between
          January 1, 2022, and November 4, 2022, there were 19,155 emails that
          mentioned Kanye West or Donda Academy in the in-and-outboxes of LAPD
          employees."
          <br />
          There were so many emails, in fact, that the files were too large for
          the police record system to search and export without narrowing them
          down," the analyst added. The LAPD asked Insider to sort down the
          request to help them export and search for records.
        </p>
      </div>
    </div>
  );
}

export default SinglePost