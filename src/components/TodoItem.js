import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: 10px;
    margin-top: 10px;
`;

const CheckCircle = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #999999;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
            border: 1px solid #999999;
            background-color: red;
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 13px;
    color: #999999;
`;

const Text2 = styled.div`
    font-size: 13px;
    color: #000000
`

const TextBlock = styled.div`
    columns: 100px;
    width: 200px;
`

function TodoItem({ done, text1, text2 }) {
    const [isDone, setIsDone] = useState(done);

    const onClickCheckCircle = () => {
        setIsDone(!isDone);
    };

    return (
        <TodoItemBlock>
            <TextBlock>
            <Text>{text1}</Text>
            <Text2>{text2}</Text2>
            </TextBlock>
            <CheckCircle done={isDone} onClick={onClickCheckCircle}>
                {isDone}
            </CheckCircle>
        </TodoItemBlock>
    );
}

export default TodoItem;