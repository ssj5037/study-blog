
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import { Introduce } from 'component/Introduce';
import { Home } from 'component/Home';
import { NotFound } from './NotFound';
import { TemplatePostList } from 'template/templatePostList';
import { TemplatePost } from 'template/templatePost';
import { Mypage } from 'component/Mypage';
import { Setting } from 'component/Setting';
import { Ffxiv } from 'component/Ffxiv';
import { Like } from 'component/Like';

export const Router = () => {
    return (
	    <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                {/* Home */}
                <Route path="/introduce" element={<Home />} />
                {/* page */}
                <Route path="/FFXIV" element={<Ffxiv />} />
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