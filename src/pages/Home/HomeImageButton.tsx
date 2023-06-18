import styled from "styled-components"

type HomeImageButtonProps = {
    imgSrc? : string,
    label? : string,
    onClick? : () => void;
}

export const HomeImageButton = (props : HomeImageButtonProps) => {
    return <Styled.Wrapper>
        <Styled.Img src={props.imgSrc} alt="no images"/>
        <Styled.Button onClick={props.onClick}>{props.label}</Styled.Button>
    </Styled.Wrapper>
}

const Styled = {
    Wrapper : styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 180px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 20px;
        padding: 16px 16px;
    `,
    Button: styled.button`

        height: 32px;
        width: 108px;
        margin-top : 12px;

        border: none;
        border-radius: 21px;
        // color?
        background-color: #E6F7F9;
        
        // typo
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        color: var(--color-main-dark);
    `,
    Img : styled.img`
        width: 96px;
        height: 102px;
    `
}