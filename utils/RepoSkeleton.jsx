const RepoSkeleton = () => (
	<div className='animate-pulse p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg'>
		<div className='mb-2 bg-sh-dark h-5 rounded-sm w-3/5'></div>
		<div className='bg-sh-dark h-5 mb-3 rounded-sm'></div>
		<div className='bg-sh-dark h-5 rounded-sm w-11/12'></div>
		<div className='flex gap-2 mt-3'>
			<div className='bg-sh-dark rounded-3xl px-2 w-1/4 h-5'></div>
			<div className='bg-sh-dark rounded-3xl px-2 w-1/4 h-5'></div>
			<div className='bg-sh-dark rounded-3xl px-2 w-1/4 h-5'></div>
		</div>
	</div>
);

export default RepoSkeleton;
