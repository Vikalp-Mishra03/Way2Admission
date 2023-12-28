import React from 'react'
import content from '../../assets/images/Content.png'
import engineer from '../../assets/images/Engineering.png'
import Sales from '../../assets/images/Sales.png'
import PostEnrolmentTeam from '../../assets/images/PostEnrolmentTeam.png'

export default function JoinOurTeam() {

    const jobData = [
        {
            img: content,
            job_title: 'Content Writer',
            position: 'Junior',
            place: 'Noida',
            time: 'Full Time'
        },
        {
            img: engineer,
            job_title: 'Full Stack Developer',
            position: 'Junior/Mid',
            place: 'Noida',
            time: 'Full Time'
        },
        {
            img: engineer,
            job_title: 'Associate Product Manager',
            position: 'Mid/Senior',
            place: 'Noida',
            time: 'Full Time'
        },
        {
            img: Sales,
            job_title: 'Associate Product Manager',
            position: 'Mid/Senior',
            place: 'Noida',
            time: 'Full Time'
        },
        {
            img: PostEnrolmentTeam,
            job_title: 'Consultant',
            position: 'Mid/Senior',
            place: 'Noida',
            time: 'Full Time'
        },
    ]

    return (
        <div className='joinOurTeam'>
            <div className="container">
                <div className="join">
                    Join Our Team
                </div>

                {jobData.map((job, index) => (
                    <div className="job" key={index}>
                        <div className='name'>
                            <img src={job.img} alt="" />
                            <div className="job-title">{job.job_title}</div>
                        </div>
                        <div className="position">{job.position}</div>
                        <div className="place">{job.place}</div>
                        <div className="time">{job.time}</div>
                    </div>
                ))}

                <div className="button">

                    <a href="mailto:anyone@example.com"><button>Click Here To Apply  </button></a>

                </div>
            </div>
        </div>
    )
}
