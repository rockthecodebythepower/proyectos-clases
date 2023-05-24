import "./Profile.css";
import logo from "../../assets/logo.png";

const Profile = ({user, repos}) => {
	return (
		<section>
			<a href={user.html_url} target="_blank">
				<h2>@{user.login}</h2>
			</a>
			<img src={user.avatar_url} alt={user.login + "avatar"} />
			<h3>{user.name}</h3>
			<h4>{user.location}</h4>
			<h4>{user.bio}</h4>
			<ul>
				{repos.map((repo) => (
					<li key={repo.node_id}>
						<h5>{repo.name}</h5>

						<h6>{repo.language}</h6>
						<h6>{repo.description !== null && repo.description}</h6>
						<a href={repo.html_url} target="_blank">
							<img src={logo} alt="GitHub icon" />
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Profile;
