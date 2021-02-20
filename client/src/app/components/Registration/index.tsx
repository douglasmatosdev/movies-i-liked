import React from 'react'
import styled, { css } from 'styled-components'
import SelectYear from './SelectYear'

const Registration = (): JSX.Element => {
    return (
        <RegistrationContainer>
            <RegisterBox>

                <RegisterRow>
                    <span className="RegisterRow_title">
                        Adicione uma imagem
                    </span>
                    <RegisterImageUpload>
                        <div className="image_preview">
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="image_button">
                            <button>
                                <i className="fas fa-upload"></i>
                                Adicionar imagem
                            </button>
                        </div>
                    </RegisterImageUpload>
                </RegisterRow>

                <RegisterRow columns={2}>
                    <div className="RegisterRow_first-column">
                        <span className="RegisterRow_title">Título do filme</span>
                        <input type="text" placeholder="Digite o título do filme" />
                    </div>
                    <div className="RegisterRow_second-column">
                        <span className="RegisterRow_title">Ano</span>
                        <SelectYear className="RegisterRow_select" />
                    </div>
                </RegisterRow>

            </RegisterBox>
        </RegistrationContainer>
    )
}


export default Registration

const RegistrationContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const RegisterBox = styled.div`
box-sizing: border-box;
    width: 100%;
    height: 50vh;

    padding: 32px 16px;

    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    /* border: 1px solid #000; */
`


const RegisterRow = styled.div<{ columns?: number }>`
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    /* border: 1px solid blue; */
    box-sizing: border-box;
    
    ${props => {
        if (!props?.columns) {
            return css`
                display: flex;
                flex-direction: column;
            `
        } else {
            return css`
                display: grid;
                grid-template-columns: repeat(${props?.columns}, 1fr);
            `
        }
    }}
    

    .RegisterRow_title {
        margin-bottom: 8px;
        font-weight: 600;
        color: ${props => props.theme.UPLOAD_TEXT_COLOR};
    }

    .RegisterRow_first-column {
        margin-right: 8px;
        /* border: 1px solid #000; */
        width: 130%;
        input {
            width: 90%;

            height: 36px;
        }
    }
    .RegisterRow_second-column {
        /* border: 1px solid #000; */
        width: 30%;
        justify-self: flex-end;
        input {
            width: 30%;
            height: 16px;
        }
    }
    
    .RegisterRow_second-column {
        min-width: 100px;
    }

`

const RegisterImageUpload = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    padding: 8px;

    border: 1px solid ${props => props.theme.UPLOAD_BORDER_COLOR};
    border-radius: 5px;
    box-shadow: 0 0 4px ${props => props.theme.UPLOAD_BACKGROUND_COLOR};

    .image_preview {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid ${props => props.theme.UPLOAD_BORDER_COLOR};
        background: ${props => props.theme.UPLOAD_BACKGROUND_COLOR};

        .fa-image {
            width: 50%;
            height: 50%;
            color: ${props => props.theme.UPLOAD_TEXT_COLOR};
        }

    }
    .image_button {
        flex: 3;
        height: 100%;
        margin-left: 8px;

        display: flex;
        justify-content: center;
        align-items: center;

        &, * { cursor: pointer; }

        button {
            border: none;
            margin: 0;
            padding: 0;
            outline: none;
            background: none;
            font-weight: 600;
            color: ${props => props.theme.UPLOAD_TEXT_COLOR};
            .fa-upload {
                margin-right: 8px;
                color: ${props => props.theme.UPLOAD_TEXT_COLOR};
            }
        }
    }
`
const RegisterForm = styled.div`
    display: flex;
    justify-content: space-between;
`