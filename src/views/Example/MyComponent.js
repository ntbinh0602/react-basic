import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent"

class MyComponent extends React.Component {
  /**
   * JSX => return block
   */
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500" },
      { id: "abcJob2", title: "Testers", salary: "400" },
      { id: "abcJob3", title: "Project Manager", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log('Check Job From Parent:',job)
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job)
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
      // arrJobs: currentJobs
    })
  }

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter(item => item.id !== job.id)
    this.setState({
      arrJobs: currentJobs
    })
  }

  render() {
    return (
      <>

        <AddComponent
          addNewJob = {this.addNewJob}
        />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob = {this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
