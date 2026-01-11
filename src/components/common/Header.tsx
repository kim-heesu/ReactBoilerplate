import styled from "@emotion/styled";
import GNB from "@/components/common/GNB";

export default function Header(){
    return (
        <StyledHeader>
            <h1>HEADER</h1>
            <GNB />
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
    h1 {
        font-weight: 600;
    }
    display: flex;
    gap: 2rem;
    * {
        display: flex;
        gap: 2rem;
    }
`;