var React = require('react');

class Internships extends React.Component{
    render() {
        return (
            <div className="col-md-12">
            <div className="content">
                <h2>Internships</h2>
                <h3>Credits for Internship</h3>
                <p>The Computer Science department allows students to take a maximum of 9-credits per term towards internship.
                    But, none of these credits will be counted towards to your degree or graduation.
                </p>
                <p><ins>Typical scenarios for Internships:</ins> <br></br>
                    Generally, students are required to be enrolled for atleast 9-credits per term to maintain a full-time international
                    student status. So, when a student secures an internship he/she might opt to take 'x' credits towards internship & 'y' credits
                    towards coursework. Here, 'x' being between 1-9 and 'y' between 0-8.
                    <br></br>
                    <ins>Examples:</ins> <br></br>
                    Internship (1 credit) + Coursework (8 credits) <br></br>
                    Internship (3 credits) + Coursework (6 credits)
                    <p> In any of the above cases, credits taken for internship should be paid for and won't be considered in the 45-credits.</p>
                </p>
                <p>
                    <h3>Internship Eligibility</h3>
                    <li>According to the USCIS regulations, any international student is eligible for internships only after completing 9-months
                        of education in the United States.</li>
                    <li>The computer science department at PSU requires all the students to complete atleast two of the three core courses
                        to be eligible for an internship.</li>
                </p>
                <p>
                    <ins>Key to securing an Internship</ins>
                    <li>A well-drafted resume.</li>
                    <li>Apply endlessly.</li>
                    <li>Interact with company professionals at career fairs.</li>
                </p>
                <p>
                    <h3>Major Industry Players</h3>
                    <div>
                        <img id="intelimg" src="app/images/intel.png"/>
                        <img id="cdkimg" src="app/images/cdk.png"/>
                        <img id="mentorimg" src="app/images/mentor.jpeg"/>
                        <img id="daimlerimg" src="app/images/daimler.png"/>
                        <img id="jamaimg" src="app/images/jama.png"/>
                        <img id="pgeimg" src="app/images/pge.jpeg"/>
                        <img id="elementalimg" src="app/images/elemental.png"/>
                        <img id="puppetimg" src="app/images/puppet.jpeg"/>
                        <img id="ibmimg" src="app/images/ibm.png"/>
                    </div>
                </p>
            </div>
            </div>
        );
    }
};

module.exports = Internships;