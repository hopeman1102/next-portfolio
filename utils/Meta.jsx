import Head from 'next/head';

const Meta = () => {
	const pageTitle = 'Developers | Portfolio';
	return (
		<Head>
			{/* Settings */}
			{/* <meta charset='utf-8' /> */}
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='referrer' content='origin' />
			<meta name='page-type' content='Portfolio' />
			<meta name='audience' content='Everyone' />
			<meta name='color-scheme' content='only dark' />
			<meta name='theme-color' content='#1A1F2A' />
			{/* Page Information */}
			<title>{pageTitle}</title>
		</Head>
	);
};

export default Meta;
