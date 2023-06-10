import Image from 'next/image';
import { useState  } from 'react';

const ProjectCard = ({ type, leftAlign, title, description, images, skills, url, github }) => {
	const defaultImage = '/assets/images/projects/default.png';
	const [imgSrc, setImgSrc] = useState(images.length > 0 ? `/assets/images/projects/${type}/${images[0]}` : defaultImage);
	return (
		<div
			className={
				'flex justify-center ' +
				(leftAlign ? 'md:justify-end' : 'md:justify-start')
			}
		>
			<article className='relative inline-flex max-w-max'>
				<header
					className={
						'top-2/4 bottom-2/4 right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 absolute flex items-center justify-center ml-0 ' +
						(leftAlign ? 'md:-ml-[22.5rem]' : 'md:ml-[22.5rem]')
					}
				>
					<div>
						<a
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className={
								'mb-2 text-xl md:text-3xl text-left font-bold block ' +
								(leftAlign ? 'md:text-left' : 'md:text-right')
							}
						>
							{title}
						</a>
						<div
							className={
								'text-left text-xs md:text-base p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg w-80 ' +
								(leftAlign ? 'md:text-left' : 'md:text-right')
							}
						>
							{description}
						</div>
						<div
							className={
								'flex gap-5 p-2 text-sh-white-500 cursor-default ' +
								(leftAlign ? 'justify-start' : 'justify-end')
							}
						>
							{skills.map((tech, index) => (
								<span key={index}>{tech}</span>
							))}
						</div>
					</div>
				</header>

				<a href={url === '' ? (github === '' ? '#' : github) : url} target='_blank' rel='noopener noreferrer'>
					<div className='opacity-25 md:opacity-50 hover:opacity-100 w-96 md:w-[35rem] rounded-lg border-2 border-sh-blue relative scale-[.99] hover:scale-100 transition ease-in shadow-lg flex'>
						<Image
							className='w-full h-full rounded-lg'
							src={imgSrc}
							alt={title + ' image'}
							objectFit='contain'
							draggable='false'
							width={600}
							height={400}
							onError={() => {
								setImgSrc(defaultImage);
							}}
							priority={false}
						/>
					</div>
				</a>
			</article>
		</div>
	);
};

export default ProjectCard;
