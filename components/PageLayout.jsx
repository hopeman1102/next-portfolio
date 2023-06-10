import { Footer, NavBar } from '../components';
import Meta from '../utils/Meta';
import { GetUserContext } from '../context/user';

const PageLayout = ({ children }) => {
	const {user} = GetUserContext();
	if(user == null) {
		return (<p>Loading...</p>)
	}
	if(user.category == -1) {
		return (<p>Error....</p>)
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