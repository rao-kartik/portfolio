import React from 'react';
import styled from 'styled-components';
import db from '../../NetworkReq/netReq';

interface IFormData {
    name: string;
    email: string;
}

const initData: IFormData = {
    name: '',
    email: '',
}

export const ContactForm = () => {

    const [ req, setReq ] = React.useState<IFormData>(initData);

    const [ message, setMessage ] = React.useState<string>('');

    const [ forms, setForms ] = React.useState<any>([])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        const payload = {
            ...req,
            [name]: name === 'email'? value.toLowerCase() : value
        };

        setReq(payload);
    }

    const handleMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const value = e.target.value;
        setMessage(value);
    }

    const fetchData = async () => {
        const data = await db.collection('contactForms').get();
                    
    }

    const handlePostForm: React.FormEventHandler<HTMLFormElement> = async (e)=>{
        e.preventDefault();
        // const data = {
        //     ...req,
        //     message
        // }
        const data = await db.collection("contactForms").get();

        console.log(data)
    }
    
    return (
        <Container>

            <Heading>or</Heading>

            <Form>

                <Input type="text" name="name" placeholder="Name" onChange={handleChange} />

                <Input type="text" name="email" placeholder="Email" onChange={handleChange} />

                <Textarea name="" id=""  placeholder="Enter Message" onChange={handleMessageChange} ></Textarea>   

                <Btn>Submit</Btn>      

            </Form>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.p`
    margin-bottom: 10px;
    font-size: 30px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 410px;

    @media (max-width: 500px) {
        width: 350px;
    };

    @media (max-width: 350px) {
        width: 270px;
    }
`;

const Input = styled.input`
    margin: 10px 0;
    height: 45px;
    border-radius: 5px;
    padding: 0 20px;
    font-size: 16px;
`;

const Textarea = styled.textarea`
    margin: 10px 0;
    height: 200px;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    resize: none;
`;

const Btn = styled.button`
    background: #58ba9d;
    height: 45px;
    width: 200px;
    border-radius: 5px;
    margin: 10px auto;
`;