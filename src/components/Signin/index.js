import React from 'react';
import {
	Container,
	FormButton,
	FormContent,
	Form,
	FormH1,
	FormInput,
	FormLabel,
	FormWrap,
	Icon,
	Text,
} from './SigninElements';

const SingIn = () => {
	return (
		<>
			<Container>
				<FormWrap>
					<Icon to='/'>dolla</Icon>
					<FormContent>
						<Form action='#'>
							<FormH1>Sign in to your account</FormH1>
							<FormLabel htmlFor='for'>Email</FormLabel>
							<FormInput type='email' required />
							<FormLabel htmlFor='for'>Password</FormLabel>
							<FormInput type='password' required />
							<FormButton type='submit'>Continue</FormButton>
							<Text>Forgit password</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default SingIn;
