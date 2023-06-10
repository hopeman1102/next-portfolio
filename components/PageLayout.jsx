import { Footer, NavBar } from '../components';
import Meta from '../utils/Meta';
import { GetUserContext } from '../context/user';
import { useRouter } from 'next/router';

const PageLayout = ({ children }) => {

	const {user} = GetUserContext();
	if(useRouter().query.key === undefined) {
		return (
			<main className='max-w-[50rem] mx-auto w-full py-3 px-5 md:px-10 lg:px-0'>
				<h1>Welcome to developers and scientists portfolio. Please select a user.</h1>
			</main>
		)
	}
	if(user === null) {
		return <p>Loading...</p>
	}
	return (
		<>
			<Meta />
			<NavBar />
			<main className='max-w-[50rem] mx-auto w-full py-3 px-5 md:px-10 lg:px-0'>
				{children}
			</main>
			<Footer />
		</>
	);
};
export default PageLayout;