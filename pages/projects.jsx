import { Description, Heading, ProjectCard } from '../utils';
import { GetUserContext } from '../context/user';

const projects = () => {

	const {user} = GetUserContext();

	return (
		<section>
			<Heading text={'Projects'} />
			<Description
				text={
					'Some selected my best projects that I worked on'
				}
			/>

			<div className='space-y-10'>
				{user.projects.map((project, id) => (
					<ProjectCard
						key={id}
						type={user.category}
						leftAlign={id % 2 == 0}
						{...project}
					/>
				))}
			</div>
		</section>
	);
};

export default projects;
