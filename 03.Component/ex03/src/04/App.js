import React, {useRef} from 'react';
import logo from './assets/images/react-logo.png';


export default function App() {

    const imgRef = useRef(null);

    const onKeyPressInput=(e)=>{
        if(e.key === 'Enter'){
            console.log("key press   " + e.target.value);
        }
        
    };

    const onChangeInput=(e)=>{
        console.log("changed   "+e.target.value);
    };

    const onFocusInput=()=>{ // 마우스 클릭할때
        console.log("Focused   ");
    };

    const onBlurInput=()=>{ // 마우스 떼질때
        console.log("Bllur   ");
    };
    const onMouseOverImg=(e)=>{
        console.log('mouseOver', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseMoveImg=(e)=>{
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;
        // console.log('mouseMove', `x=${e.clientX}, y=${e.clientY}`);
        console.log('mouseMove', `x=${e.clientX-offsetLeft}, y=${e.clientY - offsetTop}`);
    }

    const onMouseOutImg=(e)=>{
        
        console.log('mouseOut', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseDownImg=(e)=>{
        console.log('mouseDown', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseUpImg=(e)=>{
        console.log('mouseUp', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onClickImg=(e)=>{
        console.log('mouseOnClick', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onDoubleClickImg=(e)=>{
        console.log('mouseDoubleClick', `x=${e.clientX}, y=${e.clientY}`);
    }
    return (
        <>
            <h2>Event Handler  예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요' 
                onKeyPress={onKeyPressInput}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                />
                <br/>
                <br/>
            <img
                ref={imgRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={logo} 
                onMouseOver={onMouseOverImg}
                onMouseMove={onMouseMoveImg}
                onMouseOut={onMouseOutImg}
                onMouseDown={onMouseDownImg}
                onMouseUp={onMouseUpImg}
                onClick={onClickImg}
                onDoubleClick={onDoubleClickImg}
                />
        </>
    );
}