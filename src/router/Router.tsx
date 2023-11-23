
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import { Home } from 'component/Home';
import { NotFound } from './NotFound';
import { TemplatePostList } from 'template/templatePostList';
import { TemplatePost } from 'template/templatePost';
import { Mypage } from 'component/Mypage';
import { Setting } from 'component/Setting';
import { Like } from 'component/Like';
import { PostList } from 'component/PostList';
import { Post } from 'component/Post';
import { Posting } from 'component/Posting';

export const Router = () => {
    return (
	    <Routes>
            <Route path="/" element={<Layout />}>
                {/* Home */}
                <Route path="/" element={<Home />} />
                {/* page */}
                <Route path="/post" element={<PostList />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/posting" element={<Posting />} >
                    <Route path=":id" element={<Posting />} />
                </Route>
                {/* 템플릿 */}
                <Route path="/templateList" element={<TemplatePostList />} />
                <Route path="/templatePost" element={<TemplatePost />} />
                {/* 설정 */}
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/like" element={<Like />} />
                {/* 유효하지 않은 페이지 */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}