import Image from 'next/image';
import { useState  } from 'react';

const ExpCard = ({ company, title, start, end }) => {
	const [imgSrc, setImgSrc] = useState('/assets/images/companies/'+decodeURIComponent(company)+'.png');
	return (
		<div className='md:flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
			<div className='flex items-center gap-3'>
				<div className='flex items-center w-14 h-14 md:w-16 md:h-16'>
					<Image
						src={imgSrc}
						alt={company + ' logo'}
						objectFit='contain'
						draggable='false'
						width={160}
						height={160}
						onError={() => {
							setImgSrc('/assets/images/companies/default.png');
						}}
					/>
				</div>
				<h3 className='md:hidden block text-lg md:text-xl font-bold'>
					{company}
				</h3>
			</div>
			<div className='mt-1'>
				<div>
					<h3 className='hidden md:block text-lg md:text-xl font-bold'>
						{company}
					</h3>
					<p>{title}</p>
					<p className='text-sm text-sh-white-500'>
						<span>{start.year}</span> - <span>{end.year}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ExpCard;
