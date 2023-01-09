import {useState,useEffect} from 'react'

type Props = {
    content:string|undefined,
    excerpt?:string
}

const ReadMoreAndLess = ({ content,excerpt }: Props) => {
    const [isReadMoreShown, setReadMoreShown] = useState(false)
    //const [contentEle, setContentEle] = useState<HTMLElement>()
 /** 
    useEffect(()=>{
        //const conEle = document.getElementById("post_content")
        //const conElement: HTMLElement = conEle as HTMLElement;
        //setContentEle(conElement)
        //const conEle =  document.getElementById("post_content_sub")
        if(conEle){
        /   removeChildren()
        }
    },[])

    function htmlToElement(html:string) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content;
    }

    const removeChildren = ()=>{
        const conEle =  document.getElementById("post_content")
        let child =  document.getElementById("post_content_sub")
        if(!child){
            const newEle = htmlToElement(content)
            child = newEle.getElementById('post_content_sub')
        }
        if (child?.hasChildNodes()) {
            while (child.childElementCount>2) {
                const lastChild = child.lastChild
                if(lastChild){
                    child.removeChild(lastChild)
                }
            }
            conEle?.appendChild(child)
        }
    }

    const showMoreChildren = ()=>{
        const conEle =  document.getElementById("post_content")
        const conEles =  document.getElementById("post_content_sub")
        if(conEles){
            conEle?.removeChild(conEles)
        }
        const newEle = htmlToElement(content);
        const child = newEle.getElementById('post_content_sub')
        if(child){
            conEle?.appendChild(child)
        }
    }
    */
    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
        /*
        if(!isReadMoreShown){
            showMoreChildren()
        }else{
            removeChildren()
        }*/
    }

    return (
        <div className="read-more-and-less space-y-4">
            {
                isReadMoreShown?
                <div id="post_content" className="space-y-2" dangerouslySetInnerHTML={{ __html: content?content:"" }} />:
                <div id="excerpt" className="space-y-4">{excerpt}</div>
            }
            <button id="continue"
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={toggleBtn}
            >
            {isReadMoreShown?'Đóng':'Đọc tiếp'}
            </button>
        </div>
    )
}

export default ReadMoreAndLess;
