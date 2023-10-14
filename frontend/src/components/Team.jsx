import './Team.css';
import { Avatar1, Avatar2, Avatar3 } from './res/img';

const Team = () => {
    return (
        <>
            <hr />
            <div className="team">
                <TeamMembers name={'Beta'} role={'CEO'} pic={Avatar1} />
                <TeamMembers name={'Delta'} role={'VP'} pic={Avatar2} />
                <TeamMembers name={'Alpha'} role={'Co-founder'} pic={Avatar3} />
            </div>
            <hr />
        </>
    );
};

const TeamMembers = (props) => {
    return (
        <div className="team-member">
            <img src={props.pic} alt="member-pic" />
            <h1 className="member-name">{props.name}</h1>
            <h3 className="member-role">{props.role}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    );
};

export default Team;
