import { useUserContext } from '../context/user';

const Footer = () => {

	const {user} = useUserContext();

	return (
		<footer className='max-w-[50rem] mx-auto w-full py-2 px-10 md:px-0'>
			<div className='flex md:flex-row flex-col items-center justify-between p-4 gap-2'>
				<p className='order-2 md:order-1'>
					© {new Date().getFullYear()} {`${user.firstName} ${user.lastName}`}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
