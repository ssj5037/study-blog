
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import { Introduce } from 'component/Introduce';
import { Home } from 'component/Home';
import { NotFound } from './NotFound';
import { TemplatePostList } from 'template/templatePostList';
import { TemplatePost } from 'template/templatePost';

export const Router = () => {
    return (
	    <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/templateList" element={<TemplatePostList />} />
                <Route path="/templatePost" element={<TemplatePost />} />
                        
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}