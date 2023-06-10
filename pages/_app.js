import { PageLayout } from '../components';
import '../styles/globals.css';
import { useEffect } from 'react';
import { UserProvider } from '../context/user';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js');
		}
	}, []);

	return (
		<UserProvider>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</UserProvider>
	);
}

export default MyApp;
