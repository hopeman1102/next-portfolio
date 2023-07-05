import Image from 'next/image';
import { useState  } from 'react';

const EduCard = ({ school, degree, from, to }) => {
	const [imgSrc, setImgSrc] = useState('/assets/images/institutions/'+school.replace(/ /g, '_')+'.png');
	return (
		<div className='md:flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
			<div className='flex items-center gap-3'>
				<div className='flex items-center w-14 h-14 md:w-16 md:h-16'>
					<Image
						src={imgSrc}
						alt={school + ' logo'}
						objectFit='contain'
						draggable='false'
						width={160}
						height={160}
						onError={() => {
							setImgSrc('/assets/images/institutions/default.png');
						}}
					/>
				</div>
				<h3 className='md:hidden block text-lg md:text-xl font-bold'>
					{school}
				</h3>
			</div>
			<div className='mt-1'>
				<div>
					<h3 className='hidden md:block text-lg md:text-xl font-bold'>
						{school}
					</h3>
					<p>{degree}</p>
					<p className='text-sm text-sh-white-500'>
						<span>{from}</span> - <span>{to}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default EduCard;
