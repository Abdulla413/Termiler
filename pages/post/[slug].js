import PostContent from "../../components/PostContent";
import ReadersNav from "../../components/ReadersNav"
import Recomendation from "../../components/Recomendation";
function Post () {
  return (
    <>
    <div className="flex">
        <ReadersNav/>
        <PostContent/>
        <Recomendation/>
    </div>

    </>
  )
}

export default Post;