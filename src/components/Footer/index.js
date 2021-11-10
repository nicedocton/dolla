import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/singin'>How it works</FooterLink>
							<FooterLink to='/singin'>Testimonials</FooterLink>
							<FooterLink to='/singin'>Careers</FooterLink>
							<FooterLink to='/singin'>Investors</FooterLink>
							<FooterLink to='/singin'>
								Terms of Service
							</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/singin'>How it works</FooterLink>
							<FooterLink to='/singin'>Testimonials</FooterLink>
							<FooterLink to='/singin'>Careers</FooterLink>
							<FooterLink to='/singin'>Investors</FooterLink>
							<FooterLink to='/singin'>
								Terms of Service
							</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/singin'>How it works</FooterLink>
							<FooterLink to='/singin'>Testimonials</FooterLink>
							<FooterLink to='/singin'>Careers</FooterLink>
							<FooterLink to='/singin'>Investors</FooterLink>
							<FooterLink to='/singin'>
								Terms of Service
							</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/singin'>How it works</FooterLink>
							<FooterLink to='/singin'>Testimonials</FooterLink>
							<FooterLink to='/singin'>Careers</FooterLink>
							<FooterLink to='/singin'>Investors</FooterLink>
							<FooterLink to='/singin'>
								Terms of Service
							</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							dolla
						</SocialLogo>
						<WebsiteRights>
							dolla &copy; {new Date().getFullYear()}. All rights
							reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Faceook'
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Instagram'
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Youtube'
							>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Twitter'
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='linkedIn'
							>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
