import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    const [backgroundColor,setBackgroundColor]=useState(null);
    const [text,setText] = useState('');

    /**
     *  Alternative getDerivedStateFromProps
     * 
     */

    if(color !== backgroundColor){
        setBackgroundColor(color);
    }

    /**
     * 
     * After Rendering
     * class Component (componentDidUpdate)
     * 
     */

    useEffect(()=>{
        console.log('After Rendering');
    })

    /**
     * After Rendering
     * 어떤 특정 상태의 변화에 반응하는 함수
     * 
     */

    useEffect(()=>{
        console.log('After Rendering backgroundColor');
    },[backgroundColor]);

    useEffect(()=>{
        console.log('After Rendering text');
    },[text]);

    /**
     *  4. Alternative02: componentDidMount & componentWillUnmount
     * 
     */
    useEffect(()=>{
        console.log("After Mount(componentDidMount)");
        return () => {
            console.log("After Unmount(componentWillUnmount)");
        };
    },[]);
    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: backgroundColor
                } } />
            <input
                type='text' value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    );
}