import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

type FormData = {
    name: string;
    address: string;
    city: string;
    phone: string;
    email: string;
    shippingRequest: string;
};

const PaymentComplete: React.FC = () => {
    const location = useLocation();
    const formData: FormData | undefined = location.state?.formData;

    return (
        <Container>
            <Title>COMPELETE ORDER</Title>
            {formData && (
                <InfoCard>
                    <InfoItem>{formData.name}님 주문이 완료되었습니다.</InfoItem>
                    <InfoItem><strong>이름:</strong> {formData.name}</InfoItem>
                    <InfoItem><strong>주소:</strong> {formData.address}</InfoItem>
                    <InfoItem><strong>도시:</strong> {formData.city}</InfoItem>
                    <InfoItem><strong>핸드폰 번호:</strong> {formData.phone}</InfoItem>
                    <InfoItem><strong>Email:</strong> {formData.email}</InfoItem>
                    <InfoItem><strong>배송 요청사항:</strong> {formData.shippingRequest}</InfoItem>
                </InfoCard>
            )}
        </Container>
    );
}

const Container = styled.div`

    max-width: 1000px;
    margin: 200px auto 50px;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 5px;
`;


const InfoCard = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
    margin-bottom: 15px;
`;


const Title = styled.h1`
    padding-top: 50px;
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
`;


export default PaymentComplete;