import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  return (
    <div className="FinalPoem">
    {props.isSubmitted &&
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          <section>
            { props.poem.map((line, i) => {
                return <p key={i}> {line} </p> })
            }
          </section>
      </section>
        }
        {(!props.isSubmitted && props.poem.length > 2) &&
      <div className="FinalPoem__reveal-btn-container">
        <input
            type="button"
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
            onClick={props.handleSubmitFinalCallback}
        />
      </div>}
    </div>
  );
};

FinalPoem.propTypes = {
    poem: PropTypes.array.isRequired,
    isSubmitted: PropTypes.bool.isRequired,
    handleSubmitFinalCallback: PropTypes.func.isRequired,
};

export default FinalPoem;


