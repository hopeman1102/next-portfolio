import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				{/* <Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
					strategy='afterInteractive'
				/>

				<Script id='google-analytics' strategy='afterInteractive'>
					{`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                      });
                 `}
				</Script> */}
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
