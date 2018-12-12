import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.poemLines.map((line) => <p>{line}</p>)}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button"
              value="We are finished: Reveal the Poem"
              className="FinalPoem__reveal-btn"
              onClick={props.onPoemSubmitCallback}/>
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  onPoemSubmitCallback: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  poemLines: PropTypes.array.isRequired,
}
export default FinalPoem;
