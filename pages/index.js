import { Hero } from '../components';
import { EduCard, Heading, SkillCap, ExpCard } from '../utils';
import { GetUserContext } from '../context/user';

export default function Home() {

	const {user} = GetUserContext();

	return (
		<>
			<Hero user={user}/>
			<section>
				<Heading text={'Skills'} />

				<div className='mt-3 lg:px-5 w-full flex flex-wrap gap-4'>
					{user.skills.map((item, id) => (
						<SkillCap key={id} name={item} />
					))}
				</div>
			</section>

			<section>
				<Heading text={'Experience'} />

				<div className='space-y-4 mt-3 lg:px-5'>
					{user.experience.map((exp, id) => (
						<ExpCard key={id} {...exp} />
					))}
				</div>
			</section>

			<section>
				<Heading text={'Education'} />

				<div className='space-y-4 mt-3 lg:px-5'>
					{user.education.map((edu, id) => (
						<EduCard key={id} {...edu} />
					))}
				</div>
			</section>
		</>
	);
}