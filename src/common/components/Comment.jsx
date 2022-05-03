import Giscus from "@giscus/react";
import { MdClose } from "react-icons/md";

const Comment= () => {
  const projectRepoId = process.env.REACT_APP_GISCUS_PROJECT_REPO_ID;
  const discussionCategoryId = process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_ID;
  const discussionCategoryName = process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_NAME;

  return (
    <>
      <div className="play-details-comments">
        <div className="comments-header">
          <h3 className="header-title">Comments &amp; Reactions</h3>
          <button className="header-action">
            <MdClose size={24} className="icon" />
          </button>
        </div>
        <div className="comments-body">
          <Giscus
            repo="atapas/react-play"
            repoId={ projectRepoId }
            category={ discussionCategoryName }
            categoryId={ discussionCategoryId }
            mapping="pathname"
            reactionsEnabled="0"
            emitMetadata="1"
            inputPosition="top"
            theme="light"
            lang="en"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Comment;