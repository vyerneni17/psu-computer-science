var React = require('react');

class Courses extends React.Component {
    render() {
        return (
            <div className="content">
                <h2>Course Information</h2>
                <p>
                    <h3>Core Courses (Mandatory)</h3>
                    <p>These courses must be passed with a grade of <b>B</b> or better.
                        It is highly recommended to take these courses
                        as early as possible in your graduate program (Preferably first year of your Master's).
                        These courses are often considered to be the <b><i>most</i></b> challenging courses at PSU. If in any of these courses,
                        you receive a grade lower than B (B- and below), you will have to retake the course.
                        These courses are minimum requirements to complete your graduation and obtain a degree.
                    </p>
                    <p>
                        <li>CS 581 Theory of Computation (3)</li>
                        <li> CS 558 Programming Languages (3)</li>
                        <li>CS 533 Concepts of Operating Systems (3)</li>
                    </p>

                    <h3>Track Courses</h3>
                    <p>
                        There are 7 Tracks in total at PSU. Below link provides in-depth details about each and every track
                        directly as approved by the CS Department at PSU. Given 45-credits for graduate degree, it is quite common to
                        complete two different tracks along the course of your graduate program. This opens up a wide range of opportunities
                        in the rapidly changing technology market. But, If you are keen on learning only one track, become the master of it.
                    </p>
                    <p>
                        <a href="https://www.pdx.edu/computer-science/track-courses" target="_blank">Learn more about Tracks!</a>
                    </p>
                    <p>
                        <h3>Popular Tracks</h3>
                        <li>Software Engineering</li>
                        <li>Databases</li>
                        <li>Systems</li>
                        <li>Security</li>
                    </p>
                    <h3>Popular Combinations (Term-Wise)</h3>
                    <p>
                        This section provides details about which combination of subjects make a perfect term if taken together.
                        These combinations have been curated based on frequent choice of students, work load, time required, terms
                        the course is offered and Professors offering the course.
                    </p>
                    <p>
                        <h4><ins>FALL</ins></h4>
                    </p>
                    <p>
                        <h4><ins>WINTER</ins></h4>
                    </p>
                    <p>
                        <h4><ins>SPRING</ins></h4>
                    </p>
                    <p>
                        <h4><ins>SUMMER</ins></h4>
                    </p>
                </p>
            </div>
        );
    }
};

module.exports = Courses;