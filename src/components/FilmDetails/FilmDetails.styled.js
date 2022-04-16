import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DetailsWrap = styled.div`
display: flex;
margin-bottom:30px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const ImgWrap = styled.div`
margin-right: 30px;
`;

export const InformationTitle = styled.h3`
margin-bottom:10px;
`;

export const InformationWrap = styled.div`
    margin-bottom:30px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const InformationList = styled.ul`
display: flex;
padding: 10px;
`;

export const InformationItem = styled.li`
margin-right: 30px;
`;

export const InformationLink = styled(NavLink)`
    color: gray;
    &.active{
        color: red;
    }
`;