import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? '#010606' : '#ffffff')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? '#ffffff' : '#01bf71')};
	}
`;
