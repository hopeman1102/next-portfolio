import Image from 'next/image';

const Hero = ({user}) => {

	return (
		<section>
			<div className='flex items-center justify-center md:flex-row flex-col'>
				<div className='rounded-full border-[3px] border-sh-blue relative scale-95 hover:scale-100 transition ease-in shadow-lg'>
					<div className='h-44 w-44 select-none relative group'>
						<Image
							className='rounded-full w-full h-full'
							src={`/assets/images/photos/${user.photo}`}
							alt='ShafinAvatar'
							layout='fill'
							draggable='false'
						/>
						<div className='absolute bottom-0 flex-col items-center hidden mb-44 group-hover:flex'>
							<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
								{"Hey, It's so nice to see you here, thanks for visiting !"}
							</span>
							<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
						</div>
					</div>
				</div>
				<div className='ml-0 md:ml-16'>
					<div className='relative group inline-block'>
						<h2
							className='text-3xl font-bold animate-up bg-gradient-to-r from-sh-blue to-sh-blue mb-5 tracking-widest inline-block cursor-pointer select-none'
						>
							{`Hello, I am ${user.firstName}`}
							<span className='italic'>!</span>
						</h2>
					</div>

					<p className='text-2xl font-normal leading-20'>
						{user.overView}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
