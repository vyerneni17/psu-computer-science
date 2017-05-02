var React = require('react');

class Home extends React.Component {
    render() {
        return (
            <div className="col-md-12">
            <div className="content">
                <h2>Hello World!</h2>
                <p>Welcome! Do you plan to attend Portland State University and
                    pursue a Master's degree in Computer Science? You're
                    in the right spot!
                </p>
                <p>This place is a one stop for all your questions related to Computer
                    Science department, courses, faculty, internships, etc. at Portland
                    State University.
                    Let's get started! Feel free to navigate through topics above and
                    find answers to all the questions. We have added a general section
                    for information about CPT & OPT. This will give you more details about CPT, the
                    types of OPT and how these programs actually work. Please redirect any additional
                    queries to any of our kind contributors in the contacts section.
                </p>
                <p>The main idea behind creating this space is to give you fast and quick
                    access to information. Most people including ourselves in the past have
                    reached out to current PSU students or Alumni on social networking platforms
                    to find out more details about the university. Not all the people are responsive
                    or they might be involved in much more important work at the time. Later, there is
                    high possibility they might forget your message and cannot respond. We have all been
                    in such situations previously, kindly understand that it is purely a result of more
                    important things. If you are requesting any time-sensitive information
                    and we do not respond in a timely manner it might affect your chances. Well, we don't want
                    that to happen. Hence this website.
                </p>
                <p> We sincerely hope it helps!</p>
                <p>
                    <h3>Have you applied yet? </h3>
                    <p>
                        Previously at PSU, there used to be two different applications, one for PSU and the other for the
                        Department of Computer Science.
                        Recently, it has been changed to only <em><strong>one</strong></em> single application to both the University and the
                        Graduate program.
                    </p>
                    <p>
                        <ins>Application Deadlines:</ins>
                                <span id="span_tag">Fall - February 1st |
                                Winter - February 1st |
                                Spring - February 1st </span>
                    </p>
                    <p>
                        Access the application <a href="https://www.pdx.edu/graduate-admissions/apply" target="_blank">here</a>!
                        (Open link & Click on "Apply for Admission" tab)
                    </p>
                </p>
            </div>
            </div>
        );
    }
};

module.exports = Home;