import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, HStack, Input, Tag, TagCloseButton, TagLabel, Tooltip, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import database from "../Firebase";
import { collection, addDoc, Timestamp, updateDoc, doc } from "firebase/firestore"
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const Posting = () => {
    
    // ======================= HOOK =======================
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();
    let { id } = useParams();
    useEffect(() => {
        if (id) {
            setContent(location.state.content);
            setTitle(location.state.title);
            setTags(location.state.tags);
        }
    },[])

    // ======================= VARIABLES =======================
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState('');
    const [content, setContent] = useState('');

    const toolbarOptions = [
        ['image'],
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
    ];
    
    // ======================= METHOD =======================
    // 태그 추가
    const addTag = (e: any) => {
        if (e.keyCode === 13 && tag.length > 0) {
            setTags([...tags, tag]);
            setTag('');
        }
    }

    // 태그 삭제
    const deleteTag = (e: any, index: number) => {
        setTags(tags.filter((item, idx) => idx !== index));
    };

    // 게시글 저장
    const save = async (mode: 'save' | 'edit') => {
        if (title.length < 1) {
            toast({
                title: '제목을 입력하세요.',
                // description: `[${title}] 등록`,
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
            return;
        }
        if (content.length < 1) {
            toast({
                title: '내용을 입력하세요.',
                // description: `[${title}] 등록`,
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        if (mode === 'save') {
            // 신규 게시글 저장
            const result = await addDoc(collection(database, "board"), {
                title: title,
                tags: tags,
                content: content,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
                useYn: 'Y'
            });
            if (result) {
                toast({
                    title: '게시글이 등록되었습니다.',
                    // description: `[${title}] 등록`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                navigate("/post");
            }
        } else {
            // 기존 게시글 수정
            const result = await updateDoc(doc(database, "board", id || ''), {
                title: title,
                tags: tags,
                content: content,
                updatedAt: Timestamp.now(),
                useYn: 'Y'
            });
            toast({
                title: '게시글이 수정되었습니다.',
                // description: `[${title}] 등록`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            navigate(`/post/${id}`);
        }
    };

    // ======================= JSX =======================
    return (
        <div className='posting'>
            <Input
                placeholder='제목을 입력하세요.'
                size='lg'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <HStack spacing={2}>
            {
                tags.map((item, index) => (<Tag
                        size={'lg'}
                        key={index}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='blue'
                    >
                        <TagLabel>{item}</TagLabel>
                        <TagCloseButton onClick={(e) => deleteTag(e, index)} />
                    </Tag>
                ))
            }
                <Input
                    placeholder='태그를 입력하세요.'
                    size='md' width={'150px'}
                    value={tag}
                    onChange={(e)=>setTag(e.target.value)}
                    onKeyDown={addTag}
                />
                <Tooltip hasArrow placement='auto-end' label='입력 후, 엔터를 누르면 태그가 추가됩니다.' bg='black' color='white'>
                <QuestionOutlineIcon />
                </Tooltip>
            </HStack>
            <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                style={{ height: '500px', marginBottom: '50px' }}
                placeholder={'내용을 입력하세요.'}
                modules={{toolbar: toolbarOptions}}
            />
            <ButtonGroup m='10px 0' spacing="3">
                <Button colorScheme="blue" variant={"outline"}>임시저장</Button>
                {
                    id ?
                    <Button colorScheme="blue" onClick={() => save('edit')}>수정하기</Button>
                    :
                    <Button colorScheme="blue" onClick={() => save('save')}>게시하기</Button>
                }
            </ButtonGroup>
        </div>
    )
}