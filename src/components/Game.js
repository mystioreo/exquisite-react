import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      player: 1,
      submissions: [],
      isSubmitted: false,
      lastLine: "",
    }
  }

  submitLine = (newLine) => {
    const submissions = this.state.submissions;
    submissions.push(newLine);

    this.setState({
      player: this.state.player + 1,
      submissions: submissions,
      lastLine: newLine,
    })
  }

  submitPoem = () => {
    this.setState({isSubmitted: true});
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        {(!this.state.isSubmitted && this.state.lastLine !== "") && <RecentSubmission lastLine={this.state.lastLine} />}

        {!this.state.isSubmitted && <PlayerSubmissionForm fields={ FIELDS } player={this.state.player} sendSubmissionCallback={this.submitLine} />}

        <FinalPoem poemLines={this.state.submissions} isSubmitted={this.state.isSubmitted} onPoemSubmitCallback={this.submitPoem}/>

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
